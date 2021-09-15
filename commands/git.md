 
### Ever wanted to rebase a bunch of commits and change their commit date?

I believe this command works. Specify the number of commits to change `HEAD~4..HEAD` here, replacing 4 with N of commits back.

```bash
git filter-branch --env-filter '
COMMIT_DATE=$(git log $GIT_COMMIT -n1 --format=%aD);
NEW_DATE=$(date -d "$COMMIT_DATE+8 hours" -R);
GIT_COMMITTER_DATE="$NEW_DATE"
export GIT_COMMITTER_DATE
GIT_AUTHOR_DATE="$NEW_DATE"
export GIT_AUTHOR_DATE
' HEAD~4..HEAD
```




This command is broken so far since it updates _all_ the specified commits to the same date, instead of shifting

```bash
NUM_COMMITS_TO_REBASE=8
TIME_OFFSET=+ 8 hours

GIT_SEQUENCE_EDITOR=: git rebase -i HEAD~${NUM_COMMITS_TO_REBASE} --exec "git commit --amend --date \"$(date -d "$(git log $GIT_COMMIT -n1 --format=%aD)${TIME_OFFSET}" -R)\""
```