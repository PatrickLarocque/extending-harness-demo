package com.example.claims.api;

import com.example.claims.domain.Claim;
import com.example.claims.domain.ClaimStatus;
import com.example.claims.domain.ReserveEstimate;
import com.example.claims.service.ClaimEstimateService;
import com.example.claims.service.ClaimRepository;
import jakarta.validation.Valid;
import java.util.List;
import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/claims")
@CrossOrigin(origins = "http://localhost:4200")
public class ClaimController {

  private final ClaimRepository repository;
  private final ClaimEstimateService estimateService;

  public ClaimController(ClaimRepository repository, ClaimEstimateService estimateService) {
    this.repository = repository;
    this.estimateService = estimateService;
  }

  @GetMapping
  public List<Claim> listClaims() {
    return repository.findAll();
  }

  @GetMapping("/{id}/estimate")
  public ReserveEstimate estimate(@PathVariable String id) {
    Claim claim = repository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Claim not found"));
    return estimateService.estimate(claim);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Claim create(@Valid @RequestBody ClaimIntakeRequest request) {
    String id = "CLM-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    Claim claim = new Claim(
        id,
        request.claimantName(),
        request.policyNumber(),
        request.lossType(),
        request.incidentDate(),
        request.coveredLoss(),
        request.deductible(),
        ClaimStatus.INTAKE);
    return repository.save(claim);
  }
}
