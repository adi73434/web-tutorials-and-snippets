

## - Convert LF -> CRLF, with exclusions
- `> find . -type d \( -name node_modules -o -path ./.git \) -prune -false -o -type f -name '*.*' -print0 | xargs -0 unix2dos` (Reference [here](https://stackoverflow.com/a/4210072))

Notes:
- ` \( -name node_modules -o -path ./.git \)` are the exclusions
- `-name '*.*'` specifies to show all files of any extension



## File operations
`pdfseparate -f 1 -l 3 input-pdf.pdf output-page%d.pdf`, where `-f` and `-l` specify the first and last pages, splits the PDF into separate files.


`rg --files | tree --fromfile > lmao.txt` to list all files within a directory, whilst respecting `.gitignore` files


Use `find . -type f -print0 | xargs -0 dos2unix` (or `unix2dos`) to convert the line endings of files within the current folder



## SSH



### Load SSH keys
- `> eval $(ssh-agent -s)`
- `> ssh-add ~/.ssh/id_ed25519`

This will allow you to forego the whole "enter the passphrase a hundred times" issue, which is especially annoying with Git LFS because it apparently doesn't use HTTPS and for some reason it asks for the SSH passphrase for *every single file you added.* I don't have the patience to type my password 300 times.

With this, the terminal you did this in will retain the keys but I believe it's only for that one terminal.

I also recommend looking into keychain; I tried to write the ssh-agent and ssh-add into a script but I got errors along with lines of "Error connecting to agent: No such file or directory"



#### Keychain
See: https://wiki.archlinux.org/title/SSH_keys#Keychain

A command like the following can be used to load multiple keys. This should ask once for the passwords, then whenever you need to access the keys in another terminal you can re-run the command - or just add it to your `~/.bashrc`. I imagine there's a cleaner way to do this though, so that you don't get the spam at the top of your terminal.
```bash
eval $(keychain --eval key_file_name1 key_file_name2 ~/.keys/custom_key_location)
```

**Note that, with keychain, the ssh-agent runs for the entire local machine - as per my understanding**



## unorganised
Change `/bin/sh` to dash; dash is supposedly a little snappier and is POSIX sh, instead of bash.
- check with `ls -l /bin/sh`
- install `shellcheck`
- Make any scripts that use "bashisms" use `#!/bin/bash` but otherwise default to `#!/bin/sh`


Use `awk` for text processing (not editing)

Use `sed` for modifying files/streams or whatever

