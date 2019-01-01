var myFilter = function(arr,checkIsEvenCB)
{
    var filtered = new Array();
    arr.forEach(element => {
        if(checkIsEvenCB(element))
            filtered.push(element);
     });
     return filtered;
}

var arr = [1, 2, 5, 7];
var filtered = myFilter(arr,function(item) { 
    return item % 2 === 0;
});

console.log(filtered);