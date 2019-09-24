# when
pattern matching 特性babel还没支持，有些寂寞，写个when 方法过渡一下。 

## usage
判断对象中是否具有期望的数据， 可用于解决 if (a.x === 'xxxx' && a.y ==== 'xx') 这样的写法(Ps: 写完感觉我写的东西也没啥软用,写起来依旧不快乐。。。。写着玩吧)。

- 判断的数据仅是一层处理，多层处理建议嵌套使用idx()去除值然后使用when
- 第一个传入的不是 Object时， 直接返回false(包括null, 传入null, 返回false)


```javascript
const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
when(testObject, {a: 'xx'});//return true
// 数组中的key, 表示有c这个key,但不关心值
when(testObject, [{a: 'xx'}, 'c']);//return true

when(testObject, [{a: 'xx'}, 'd']);//return false

when(idx(testObject, (_) => _.b.c), {x: 'd'});//return false
```

