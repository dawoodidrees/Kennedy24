terraform {
  backend "s3" {
    bucket = "tcs-project-terraform-state"
    key    = "dev/terraform.tfstate"
    region = "us-east-1"
  }
}

