#!/bin/bash

# wget -O docker-compose.yml https://raw.githubusercontent.com/rjchicago-llc/rjchicago-llc/main/aws/deploy.sh
# chmod +x deploy.sh

# Download latest docker-compose configuration
wget -O docker-compose.yml https://raw.githubusercontent.com/rjchicago-llc/rjchicago-llc/main/aws/docker-compose.yaml

# Pull latest images
docker-compose pull

# Stop existing services
docker-compose down

# Start services in detached mode
docker-compose up -d