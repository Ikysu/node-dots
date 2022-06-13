function dots(obj, text) {
    var t=text.split('.');
    for(let i=0;i<t.length;i++)obj=obj[t[i]];
    return obj;
}