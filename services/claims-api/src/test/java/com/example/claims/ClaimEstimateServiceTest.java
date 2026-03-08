package com.example.claims;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.claims.domain.Claim;
import com.example.claims.domain.ClaimStatus;
import com.example.claims.service.ClaimEstimateService;
import java.math.BigDecimal;
import java.time.LocalDate;
import org.junit.jupiter.api.Test;

class ClaimEstimateServiceTest {

  private final ClaimEstimateService service = new ClaimEstimateService();

  @Test
  void reserveNeverDropsBelowZero() {
    Claim claim = new Claim(
        "CLM-LOW",
        "Avery Chen",
        "AUTO-0001",
        "Glass repair",
        LocalDate.of(2026, 2, 14),
        new BigDecimal("300.00"),
        new BigDecimal("500.00"),
        ClaimStatus.TRIAGE);

    assertThat(service.estimate(claim).reserve()).isEqualByComparingTo("0.00");
  }
}
