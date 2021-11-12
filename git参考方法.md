### 已经在本地有开发文件夹的，参考下列方法git

- 确认自己安装好了git

- 将本地自己的开发文件夹右键通过git Bash 打开，如果没有这个选项就一步一步在命令行cd 
- 初始化本地仓库

```
git init
```

- 修改分支名，在git Bash 命令行创建的本地分支名默认为master,我们将其修改为自己的名字拼音

```
git branch -M zhikang
```

- 将本地仓库与远程github关联起来

```
git remote add origin https://github.com/FZUTEST/Xiaozhuplugins
```

- 查看本地文件状态，可不做跳过

```
git status
```

- 上传至暂存区，以下三种方法任选一个

```
git add .
这是上传文件夹所有文件
git add -A .
这是将所有已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区
git add readme.txt
这是上传单个文件，记得扩展名
```

- commit

```
git commit -m "2021/11/12 实现了什么功能"
```

- push,这将会在github新建一个属于你的zhikang分支,之后你就使用这个分支

```
git push origin zhikang
```

