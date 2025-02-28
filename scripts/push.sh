#! /bin/bash -e

git_name=$(basename $(git rev-parse --show-toplevel))
git_sha=$(git rev-parse --short HEAD)

docker push 519722017377.dkr.ecr.eu-west-1.amazonaws.com/${git_name}:${git_sha}
