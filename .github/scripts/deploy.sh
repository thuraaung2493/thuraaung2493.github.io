#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
timestamp=$(date +%s)

if [ "$(git rev-parse --is-inside-work-tree 2>/dev/null)" != "true" ]; then
  git init
  git checkout -B main
fi;

git add -A
git commit -m "deploy at ${timestamp}"

echo "commit: deploy at ${timestamp}"
# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:thuraaung2493/thuraaung2493.github.io.git main
