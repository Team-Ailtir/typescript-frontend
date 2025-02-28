#! /bin/bash -e

git_name=$(basename $(git rev-parse --show-toplevel))
git_sha=$(git rev-parse --short HEAD)

docker build . -t ${git_name}
docker tag ${git_name}:latest ${git_name}:${git_sha}
docker tag ${git_name}:latest 519722017377.dkr.ecr.eu-west-1.amazonaws.com/${git_name}:${git_sha}
