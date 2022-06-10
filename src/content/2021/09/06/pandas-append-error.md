---
layout: post
title: Pandasのappendでつまづいた話
image: pandas-logo.png
author: [miumo]
date: 2021-09-06T23:58:10.000Z
tags: [Python, Pandas]
excerpt: list と同じ感覚で使っていたら、少し挙動が違った。
draft: false
---

list と同じ感覚で使っていたら、少し挙動が違った。

### 前提条件

python 3.7.7

### list で append する場合

main で作成した list に対して、関数内で値を追加する処理。

```python
def my_append(l):
    print('argument id:', id(l))
    l.append('a')
    print('append id:', id(l))


if __name__ == '__main__':
    l = []
    print('initial id:', id(l))
    my_append(l)
    print(l)
```

```
initial id: 2117634707976
argument id: 2117634707976
append id: 2117634707976
['a']
```

### pandas で append する場合

上の処理の pandas 版。

```python
import pandas as pd


def my_append(df):
    print('argument id:', id(df))
    df.append(pd.DataFrame({'A': 'a'}, index=['A']), ignore_index=True)
    print('append id:', id(df))


if __name__ == '__main__':
    df = pd.DataFrame()
    print('initial id:', id(df))
    my_append(df)
    print(df)
```

```
initial id: 1620503801928
argument id: 1620503801928
append id: 1620503801928
Empty DataFrame
Columns: []
Index: []
```

main で作った df、関数に渡した df、関数内で append 後の df、全て同じ id となっているのに、値が追加されとらんやんけ！なんでやねん！<br>
…となったが、`pandas.DataFrame.append`は inpalce ではないので、返値を使わないといけない。

```python
import pandas as pd


def my_append(df):
    print('argument id:', id(df))
    new_df = df.append(pd.DataFrame({'A': 'a'}, index=['A']), ignore_index=True)
    print('append id:', id(new_df))
    return new_df


if __name__ == '__main__':
    df = pd.DataFrame()
    print('initial id:', id(df))
    new_df = my_append(df)
    print(new_df)
```

```
initial id: 2455384797320
argument id: 2455384797320
append id: 2455818505672
   A
0  a
```
