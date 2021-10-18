

## - Convert LF -> CRLF, with exclusions
- `> find . -type d \( -name node_modules -o -path ./.git \) -prune -false -o -type f -name '*.*' -print0 | xargs -0 unix2dos` (Reference [here](https://stackoverflow.com/a/4210072))

Notes:
- ` \( -name node_modules -o -path ./.git \)` are the exclusions
- `-name '*.*'` specifies to show all files of any extension



# Git



## "Cache" SSH key passphrase
- `> eval ssh-agent -s`
- `> ssh-add ~/.ssh/id_ed25519`


This will allow you to forego the whole "enter the passphrase a hundred times" issue, which is especially annoying with Git LFS because it apparently doesn't use HTTPS and for some reason it asks for the SSH passphrase for *every single file you added.* I don't have the patience to type my password 300 times.