### git流程精简版

##### 准备工作

```
git clone https://github.com/FZUTEST/Xiaozhuplugins zhikang 
```

```c
cd zhikang
git checkout -b zhikang//切换到zhikang这个本地分支，如果没有则创建
git pull origin zhikang//将本地分支zhikang与远程分支zhikang相关联
```

##### 开发阶段

```c
git status //查看你本地做了哪些修改，建议执行该命令核对一下

git add -A . //将所有已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区

git commit -m "注释"

git push origin zhikang
```

### git流程详细版

##### 首先clone仓库到本地

- 克隆下来的是默认是主分支

```
git clone https://github.com/FZUTEST/Xiaozhuplugins
```

- 如果在这句命令的末尾加上一串字符，表示为clone下来的文件夹重命名，我们可以以自己的名字命名,如下所示：

```
git clone https://github.com/FZUTEST/Xiaozhuplugins zhikang
```

- 打开clone下来的文件夹:

```
cd zhikang
```
##### 新建本地分支

- Github上已经有master分支 和自己的分支，clone下来的本地分支main对应的是远程的master分支

  为了自己做提交但不影响远程master分支，我们新建并切换到本地自己的分支,以新建本地分支zhikang为例：

```c
git checkout -b zhikang//切换到zhikang这个本地分支，如果没有则创建
git checkout zhikang//单纯的切换分支
```

- 将本地分支zhikang与远程分支zhikang相关联:

```
git pull origin zhikang
```

- 之后，你将写的代码文件放到这个文件夹，如果做了更新，命令行执行下列操作

```c++
git status //查看你本地做了哪些修改，建议执行该命令核对一下

git add -A . //将所有已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区

git commit -m "注释"

git push origin zhikang
```

