

## - Convert LF -> CRLF, with exclusions
- `> find . -type d \( -name node_modules -o -path ./.git \) -prune -false -o -type f -name '*.*' -print0 | xargs -0 unix2dos` (Reference [here](https://stackoverflow.com/a/4210072))

Notes:
- ` \( -name node_modules -o -path ./.git \)` are the exclusions
- `-name '*.*'` specifies to show all files of any extension
