package com.example.claims.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

public record Claim(
    String id,
    String claimantName,
    String policyNumber,
    String lossType,
    LocalDate incidentDate,
    BigDecimal coveredLoss,
    BigDecimal deductible,
    ClaimStatus status) {}
