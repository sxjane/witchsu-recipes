#!/bin/bash

secret=$(aws --region=eu-central-1 secretsmanager get-secret-value --secret-id prod/webapp | jq ".SecretString")
mongodb=$(eval "echo $secret" | jq ".MONGODB_URI")
export MONGODB_URI=$mongodb
