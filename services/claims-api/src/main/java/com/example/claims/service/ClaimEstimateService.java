package com.example.claims.service;

import com.example.claims.domain.Claim;
import com.example.claims.domain.ReserveEstimate;
import java.math.BigDecimal;
import java.math.RoundingMode;
import org.springframework.stereotype.Service;

@Service
public class ClaimEstimateService {

  public ReserveEstimate estimate(Claim claim) {
    BigDecimal grossLoss = claim.coveredLoss().setScale(2, RoundingMode.HALF_UP);
    BigDecimal deductible = claim.deductible().setScale(2, RoundingMode.HALF_UP);
    BigDecimal reserve = grossLoss.compareTo(deductible) < 0
        ? BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP)
        : grossLoss.add(deductible).setScale(2, RoundingMode.HALF_UP);

    return new ReserveEstimate(claim.id(), grossLoss, deductible, reserve);
  }
}
