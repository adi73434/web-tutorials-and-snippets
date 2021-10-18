 
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



### "Cache" SSH key passphrase
- `> eval $(ssh-agent -s)`
- `> ssh-add ~/.ssh/id_ed25519`


This will allow you to forego the whole "enter the passphrase a hundred times" issue, which is especially annoying with Git LFS because it apparently doesn't use HTTPS and for some reason it asks for the SSH passphrase for *every single file you added.* I don't have the patience to type my password 300 times.

With this, I don't know if it's a system wide session or what; it resolved me having to type my password a dumb amount of times, but as I was pushing a "few" images with git/lsf in another repo without having to type my password, for some reason i did need to type my password to push this commit to this repo.