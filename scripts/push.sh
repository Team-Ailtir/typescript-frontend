#! /bin/bash -e

git_sha=$(git rev-parse --short HEAD)
git_repo=$(basename $(git rev-parse --show-toplevel))
aws_repo=$(aws ecr describe-repositories | jq -r ".repositories[] | select(.repositoryName | contains(\"${git_repo}\")) | .repositoryUri")

docker push ${aws_repo}:${git_sha}
