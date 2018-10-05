sessionStorage.setItem('name','name');
sessionStorage.setItem('key','key');
console.log("sessionStorage.getItem('name') = " + sessionStorage.getItem('name'));
sessionStorage.removeItem('key');

localStorage.setItem('name','name');
localStorage.setItem('key','key');
console.log("localStorage.getItem('name') = " + localStorage.getItem('name'));
localStorage.removeItem('key');

    var checkStorage = function(o){
        var key = 'STORAGE_TEST',
            value;
        try{
            o.setItem(key, 1);
            value = o.getItem(key);
            o.removeItem(key);

            return value == 1;
        }catch(e){
            return false;
        }
    };

    G_IS_SESSION_ABLE = checkStorage(sessionStorage);
    G_IS_LOCAL_ABLE = checkStorage(localStorage);

console.log('log');
console.warn('warn');
console.error('error');
console.info('info');

try{
    console.log(a);//ReferenceError
    window.aaa();//TypeError
    Array(-5);//RangeError
}catch(e){
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    if(e instanceof TypeError){
        throw new TypeError('TypeError');
    }else{
        throw new Error(e.name);
    }
}finally{//无论是否抛错都会执行
    console.log("666");
}

