package com.example.claims.api;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

public record ClaimIntakeRequest(
    @NotBlank String claimantName,
    @NotBlank String policyNumber,
    @NotBlank String lossType,
    @NotNull LocalDate incidentDate,
    @NotNull @DecimalMin("0.01") BigDecimal coveredLoss,
    @NotNull @DecimalMin("0.00") BigDecimal deductible) {}
