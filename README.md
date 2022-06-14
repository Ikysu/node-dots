# node-dots
obj.get.dots

```JavaScript
function dots(obj, text) {
    var t=text.split('.');
    for(let i=0;i<t.length;i++){if(obj[t[i]]){obj=obj[t[i]]}else{return undefined}};
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
