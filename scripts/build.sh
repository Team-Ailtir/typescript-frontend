#! /bin/bash -e

git_sha=$(git rev-parse --short HEAD)
git_repo=$(basename $(git rev-parse --show-toplevel))
aws_repo=$(aws ecr describe-repositories | jq -r ".repositories[] | select(.repositoryName | contains(\"${git_repo}\")) | .repositoryUri")

docker build . -t ${git_repo}
docker tag ${git_repo}:latest ${git_repo}:${git_sha}
docker tag ${git_repo}:latest ${aws_repo}:${git_sha}
docker tag ${git_repo}:latest ${aws_repo}:latest
