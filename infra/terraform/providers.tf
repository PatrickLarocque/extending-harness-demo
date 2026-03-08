provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Application = "claims-platform-demo"
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}
