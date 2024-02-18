# test1

https://git-scm.com/

PS D:\Learn\test1> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
PS D:\Learn\test1> git commit -m "abc"
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
PS D:\Learn\test1> git add index.html
PS D:\Learn\test1> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html

PS D:\Learn\test1> git commit -m "abc"
[main 7d8f571] abc
 1 file changed, 1 deletion(-)
PS D:\Learn\test1> git pull
Already up to date.
PS D:\Learn\test1> git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 277 bytes | 277.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/M0rbiius/test1.git
   a63b421..7d8f571  main -> main
PS D:\Learn\test1> cd ..
PS D:\Learn> git status
fatal: not a git repository (or any of the parent directories): .git
PS D:\Learn> cd .\test1\
PS D:\Learn\test1> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean