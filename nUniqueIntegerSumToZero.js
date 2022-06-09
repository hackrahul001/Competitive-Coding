/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    var sum = 0
    var ar = []
    for(let i = 1; i <= n; i++){
        if(i != n){
             ar.push(i*-1)
             sum += i;
        }else{
            ar.push(sum)
        }
    }
    return ar
};