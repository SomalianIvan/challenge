git worktree add -B gh-pages public
git config --global user.email "justanotheraction@inthewall.com"
git config --global user.name "Action Bronson"
cd $GITHUB_WORKSPACE

yarn run build

cd public
git add --all && \
git commit -m "Github Action Build ${GITHUB_SHA} `date +'%Y-%m-%d %H:%M:%S'`" --allow-empty && \
git remote set-url origin https://${GITHUB_ACTOR}:${PUSH_TOKEN}@github.com/${GITHUB_REPOSITORY}
git push --force origin gh-pages:gh-pages
