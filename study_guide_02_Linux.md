# 🐧 Linux 零基础速成教材

> 对应课件：第01讲~第12讲 | 考试占比 36%（最大！） | 建议学习：1.5天

---

## 先搞懂：Linux 是什么？

**Linux = 一个操作系统**，就像 Windows、macOS 一样。但 Linux：
- 是**免费的、开源的**
- **没有图形界面**（主要靠敲命令操作）
- 服务器几乎都用 Linux（稳定、安全）

> 你学的不是"怎么用鼠标点"，而是"怎么敲命令操控电脑"。

---

## 第01-02讲：Linux 概述与初体验

### Linux 和 Windows 的区别

| | Windows | Linux |
|--|---------|-------|
| 价格 | 付费 | 免费开源 |
| 操作 | 鼠标为主 | 键盘命令为主 |
| 文件路径 | `C:\Users\xxx` | `/home/xxx`（没有盘符概念） |
| 典型用途 | 个人电脑 | 服务器 |

### 登录后看到的东西

```bash
[user@localhost ~]$
```

- `user` = 当前用户名
- `localhost` = 主机名
- `~` = 当前在主目录（家目录）
- `$` = 普通用户提示符（`#` = root超级用户）

---

## 第03讲：Linux 常用命令 — 最基础的操作

### 文件目录操作（最最常用！）

| 命令 | 全称 | 作用 | 例子 |
|------|------|------|------|
| `ls` | list | 列出目录内容 | `ls -a` 含隐藏文件，`ls -l` 详细信息 |
| `cd` | change directory | 切换目录 | `cd /home` 去/home，`cd ~` 回家目录 |
| `pwd` | print working directory | 显示当前位置 | 输出 `/home/user` |
| `mkdir` | make directory | 创建目录 | `mkdir -p a/b/c` 递归创建 |
| `rmdir` | remove directory | 删空目录 | 只能删空目录 |

### 隐藏文件

Linux 里以 `.` 开头的文件是隐藏文件（比如 `.bashrc`）。
`ls -a` 才能看到它们（`-a` = all）。

---

## 第04讲：文件及相关命令 — 增删改查

### 文件操作命令

| 命令 | 作用 | 常用写法 |
|------|------|----------|
| `touch` | 创建空文件 / 更新时间戳 | `touch test.txt` |
| `cp` | 复制 | `cp a.txt b.txt` |
| `mv` | 移动/重命名 | `mv old.txt new.txt`（同目录就是改名） |
| `rm` | 删除 | `rm file.txt`，`rm -r dir/` 递归删目录 |
| `cat` | 查看文件全部内容 | `cat file.txt` |
| `more` | 分页查看（只能往下翻） | `more file.txt` |
| `less` | 分页查看（可上下翻） | `less file.txt` |
| `head` | 看前 N 行 | `head -5 file.txt` |
| `tail` | 看后 N 行 | `tail -f file.txt` 实时跟踪 |
| `file` | 判断文件类型 | `file unknown.bin` |

### cat 的花式用法

```bash
cat file1.txt > file2.txt    # 相当于复制（把file1内容覆盖到file2）
cat file1.txt file2.txt > file3.txt  # 合并两个文件
```

---

## 第05-06讲：vi/vim 文本编辑器

### vi 三种模式

```
命令模式 ←→ 插入模式 ←→ 末行模式
（默认进入） （按i/a/o进入） （按:进入）
```

### 必记操作

| 操作 | 命令 | 说明 |
|------|------|------|
| 进入插入模式 | `i` | 光标前插入 |
| | `a` | 光标后插入 |
| | `o` | 下一行插入（高频！） |
| | `O` | 上一行插入 |
| 退出插入模式 | `Esc` | 回到命令模式 |
| 删一行 | `dd` | 命令模式下 |
| 复制一行 | `yy` | 命令模式下 |
| 粘贴 | `p` | 命令模式下 |
| 跳转到第n行 | `nG` | 如 `10G` 跳到第10行 |
| 保存退出 | `:wq` | 末行模式 |
| 不保存退出 | `:q!` | 末行模式（加!强制） |
| 重复上次操作 | `.` | 命令模式下 |
| 撤销 | `u` | 命令模式下 |

> 口诀：**i进Esc出，dd删yy拷，:wq存:q!不存**

---

## 第07讲：文本处理与正则表达式

### grep — 搜索神器

```bash
grep "关键词" 文件名        # 查找包含关键词的行
grep -i "hello" file.txt   # 不区分大小写
grep -v "hello" file.txt   # 反向查找（不含hello的行）
```

### 正则表达式元字符

| 符号 | 含义 | 例子 |
|------|------|------|
| `.` | 任意一个字符 | `h.t` 匹配 hat, hot, hit |
| `*` | 前一个字符重复0或多次 | `a*` 匹配 "" "a" "aa" |
| `^` | 行首 | `^Hello` Hello在行首 |
| `$` | 行尾 | `end$` end在行尾 |
| `[]` | 字符集 | `[abc]` 匹配 a 或 b 或 c |

### 管道和重定向

```bash
# 管道 | ：把前一个命令的输出，作为后一个命令的输入
ls -l | grep "txt"        # 在ls结果中搜"txt"

# 重定向 > ：把输出写到文件（覆盖）
echo "hello" > file.txt

# 追加重定向 >> ：追加到文件末尾
echo "world" >> file.txt

# 错误重定向 2>&1 ：把错误也输出到同一个地方
ls /nope 2>&1
```

---

## 第08讲：文件传输

### FTP 端口

FTP 使用 **20**（数据）和 **21**（控制）两个端口。

### 压缩/解压 tar（考试重点！）

```bash
# 压缩（打包成 .tar.gz）
tar -zcvf 压缩包名.tar.gz 源文件/

# 解压
tar -xzvf 压缩包名.tar.gz

# 解压到指定目录
tar -xzvf 压缩包.tar.gz -C /目标目录

# 查看压缩包内容（不解压）
tar -t 压缩包.tar.gz
```

> 记忆：**z**=gzip压缩，**c**=创建，**x**=解压，**v**=显示过程，**f**=文件名，**t**=列表

---

## 第09-10讲：Shell 程序设计

### Shell 是什么？

**Shell = 命令解释器**。你敲的命令，Shell 翻译给 Linux 内核执行。Shell 本身也是一门编程语言。

### 第一个 Shell 脚本

```bash
#!/bin/bash          # 必须第一行！声明用bash解释
echo "Hello World!"  # 输出
```

### 变量

```bash
# 赋值（等号两边绝不能有空格！）
name="张三"
count=10

# 引用变量
echo $name           # 输出：张三
echo ${name}         # 推荐写法

# 命令替换
today=$(date)        # 把date命令的结果赋给today
files=`ls`           # 旧式写法
```

### 特殊变量

| 变量 | 含义 |
|------|------|
| `$#` | 参数个数 |
| `$0` | 脚本名 |
| `$1` `$2` ... | 第1、2...个参数 |

### 流程控制

```bash
# if 判断
if [ $a -gt 10 ]; then
    echo "大于10"
elif [ $a -eq 10 ]; then
    echo "等于10"
else
    echo "小于10"
fi

# for 循环
for i in 1 2 3 4 5; do
    echo $i
done

# while 循环
while [ $i -lt 10 ]; do
    echo $i
    i=$((i + 1))
done

# case 多分支
case $var in
    "a") echo "选了a" ;;
    "b") echo "选了b" ;;
    *)   echo "其他" ;;
esac
```

### 常用判断条件

| 写法 | 含义 |
|------|------|
| `-eq` | 等于（equal） |
| `-ne` | 不等于（not equal） |
| `-gt` | 大于（greater than） |
| `-lt` | 小于（less than） |
| `-f file` | file 是否为普通文件 |
| `-d file` | file 是否为目录 |
| `-e file` | file 是否存在 |
| `-c file` | file 是否为字符设备文件 |

---

## 第12讲：Linux 权限管理（超级重点！）

### 看懂权限

```
ls -l 输出：
-rwxr--r--  1  user  group  1024  Jan 1  file.txt
└─┬─┘└─┬─┘└─┬─┘
  │    │    └── 其他人的权限（r-- = 只读）
  │    └─────── 所属组的权限（r-- = 只读）
  └──────────── 所有者的权限（rwx = 读写执行）
```

- `r` = read (读) = 4
- `w` = write (写) = 2
- `x` = execute (执行) = 1
- `-` = 没有该权限 = 0

### 数字权限速算

| 数字 | 二进制 | 权限 |
|------|--------|------|
| 7 | 4+2+1 | rwx |
| 6 | 4+2+0 | rw- |
| 5 | 4+0+1 | r-x |
| 4 | 4+0+0 | r-- |
| 3 | 0+2+1 | -wx |
| 2 | 0+2+0 | -w- |
| 1 | 0+0+1 | --x |
| 0 | 0+0+0 | --- |

### chmod 改权限

```bash
chmod 755 file.txt    # 所有者rwx，组r-x，其他r-x（最常用）
chmod 764 file.txt    # 所有者rwx，组rw-，其他r--（考题高频）
chmod 777 file.txt    # 所有人都有全部权限（不安全！）

# 符号法
chmod u+x file.txt    # 所有者加执行权限
chmod a-x file.txt    # 所有人去掉执行权限
chmod g+w file.txt    # 所属组加写权限
```

> u=user, g=group, o=others, a=all

### 用户管理

| 命令 | 作用 |
|------|------|
| `useradd -d /home/zhangsan zhangsan` | 创建用户并指定家目录 |
| `passwd zhangsan` | 设密码 |
| `usermod` | 修改用户（**不能删用户！**） |
| `userdel -r zhangsan` | 删用户+删主目录 |
| `su` | 切换到超级用户 |
| `chown user file` | 改变文件所有者 |

---

## 软链接 vs 硬链接

| | 软链接（ln -s） | 硬链接（ln） |
|--|---------------|------------|
| 比喻 | 快捷方式 | 同一个文件的两个名字 |
| 删原文件后 | 失效 | 仍然可用 |
| 跨文件系统 | ✅ 可以 | ❌ 不可以 |
| 共享 i 节点 | ❌ | ✅ |

---

## 考试速记卡

```
✅ ls -a 含隐藏  ls -l 详细信息
✅ chmod 755 → rwx r-x r-x
✅ chmod 764 → rwx rw- r--
✅ vi: i进入插入 Esc退出 :wq保存 :q!不保存 dd删行 o下插行
✅ tar -zcvf压缩 -xzvf解压 -C指定目录
✅ 变量赋值：等号两边无空格
✅ $#=参数个数  $()=命令替换
✅ 管道|连接命令  >覆盖重定向  >>追加
✅ grep搜索 grep -i忽略大小写
✅ useradd创建 su切换 userdel -r删除
✅ kill PID终止进程 ps -aux查看全部进程
✅ shutdown -h +30 半小时后关机
```
