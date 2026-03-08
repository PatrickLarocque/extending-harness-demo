variable "aws_region" {
  description = "AWS region for the demo platform."
  type        = string
  default     = "ca-central-1"
}

variable "environment" {
  description = "Deployment environment."
  type        = string
  default     = "dev"
}

variable "db_username" {
  description = "Database username for the claims API."
  type        = string
  default     = "claims_app"
}

variable "db_password" {
  description = "Database password for the claims API."
  type        = string
  sensitive   = true
}
