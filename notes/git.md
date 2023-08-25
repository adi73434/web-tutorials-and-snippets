# Git

Look into Git [worktree](https://www.youtube.com/watch?v=2uEqYw-N8uE) to be able to work on multiple branches with diffs in them, without having to stash your changes.



## Add
You shouldn't get in the habbit of staging everything with `> git add --all` or `> git add .`; intsead, prefer an interactive/visual way such as [vim-fugitive](https://github.com/tpope/vim-fugitive) in neovim, the VSCode extension, or even just GitHub Desktop:
- `> git add -i` is the CLI interactive approach



## Undo
To undo a commit the same way VSCode's git extension does - that is, undo the commit, but keep the changes, so you can work on them or simply change the commit message:
- `> git reset --soft HEAD~1` (1 here representing 1 commit back)



## Checkout
When working on a branch locally (which is what you should be doing, as the master/main branch should be stable depending on what the repo is for), you can checkout the branch with the following:
- `> git checkout 123-branch-name`

This will check out the branch and create a local variant. In this case, there's an `origin/123-branch-name` branch, but by omitting the `origin/` part, the command creates a local branch based on that branch.

You may also use `> git switch 123-branch-name`, which was added in Git 2.23, but I just use checkout.

Alternatively, the more manual way is to do `> git checkout -b 123-branch-name origin/123-branch-name`, where you provide both the local and origin branch.




## Remove from history
- `> pip install git-filter-repo` (???)
- `> git filter-repo --replace-text <(echo 'my_personal_info==>changed_to_this')`

You'll no longer have a remote so you have to set it, then force push:
- `> git remote add origin git@gitlab.com:mygitlabrepo.git`
- `> git push --force --set-upstream origin my-branch-name`

You may or may not need to set-upstream on the push, but I just do it.
