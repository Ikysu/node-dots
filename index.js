function dots(obj, text) {
    var t=text.split('.');
    for(let i=0;i<t.length;i++){if(obj[t[i]]){obj=obj[t[i]]}else{return undefined}};
    return obj;
}
