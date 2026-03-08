package com.example.claims.service;

import com.example.claims.domain.Claim;
import com.example.claims.domain.ClaimStatus;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public class ClaimRepository {

  private final List<Claim> claims = new ArrayList<>(
      List.of(
          new Claim(
              "CLM-1007",
              "Mina Patel",
              "AUTO-4481",
              "Auto collision",
              LocalDate.of(2026, 3, 10),
              new BigDecimal("2400.00"),
              new BigDecimal("500.00"),
              ClaimStatus.ADJUSTER_REVIEW),
          new Claim(
              "CLM-1012",
              "Louis Tremblay",
              "HOME-9120",
              "Water damage",
              LocalDate.of(2026, 4, 6),
              new BigDecimal("7800.00"),
              new BigDecimal("1000.00"),
              ClaimStatus.TRIAGE)));

  public List<Claim> findAll() {
    return List.copyOf(claims);
  }

  public Optional<Claim> findById(String id) {
    return claims.stream().filter(claim -> claim.id().equals(id)).findFirst();
  }

  public Claim save(Claim claim) {
    claims.add(claim);
    return claim;
  }
}
