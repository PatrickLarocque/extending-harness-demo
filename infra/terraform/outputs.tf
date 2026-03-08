output "claims_portal_url" {
  description = "CloudFront URL for the claims portal."
  value       = "https://${aws_cloudfront_distribution.frontend.domain_name}"
}

output "claims_api_url" {
  description = "ALB URL for the claims API."
  value       = "http://${aws_lb.api.dns_name}"
}

output "api_repository_url" {
  description = "ECR repository for the claims API image."
  value       = aws_ecr_repository.api.repository_url
}
