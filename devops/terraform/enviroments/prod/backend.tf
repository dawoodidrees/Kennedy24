terraform {
  backend "s3" {
    bucket = "tcs-project-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

