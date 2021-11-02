

## - Convert LF -> CRLF, with exclusions
- `> find . -type d \( -name node_modules -o -path ./.git \) -prune -false -o -type f -name '*.*' -print0 | xargs -0 unix2dos` (Reference [here](https://stackoverflow.com/a/4210072))

Notes:
- ` \( -name node_modules -o -path ./.git \)` are the exclusions
- `-name '*.*'` specifies to show all files of any extension



## File operations
`pdfseparate -f 1 -l 3 input-pdf.pdf output-page%d.pdf`, where `-f` and `-l` specify the first and last pages, splits the PDF into separate files.


`rg --files | tree --fromfile > lmao.txt` to list all files within a directory, whilst respecting `.gitignore` files


Use `find . -type f -print0 | xargs -0 dos2unix` (or `unix2dos`) to convert the line endings of files within the current folder



## unorganised
Change `/bin/sh` to dash; dash is supposedly a little snappier and is POSIX sh, instead of bash.
- check with `ls -l /bin/sh`
- install `shellcheck`
- Make any scripts that use "bashisms" use `#!/bin/bash` but otherwise default to `#!/bin/sh`


Use `awk` for text processing (not editing)

Use `sed` for modifying files/streams or whatever

