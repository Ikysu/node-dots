# node-dots
obj.get.dots

```JavaScript
function dots(obj, text) {
    var t=text.split('.');
    for(let i=0;i<t.length;i++)obj=obj[t[i]];
    return obj;
}
```

## Try
```JavaScript
dots({
    name:{
        first:{
            text:"Alyx"
        },
        second:{
            text:"Vance"
        }
    }
}, "name.first.text")
```
