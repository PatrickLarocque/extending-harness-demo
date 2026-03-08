package com.example.claims.domain;

import java.math.BigDecimal;

public record ReserveEstimate(String claimId, BigDecimal grossLoss, BigDecimal deductible, BigDecimal reserve) {}
