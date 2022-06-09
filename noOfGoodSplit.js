var numSplits = function(s) {
    var str = s.split("")
    var map1 = {}
    var map2 = {}
    var n = str.length
    var ar_f = new Array(n)
    var ar_b = new Array(n)
    var ans = 0;
    for(let i = 0; i < n; i++){
        if(map1[str[i]]){ 
            ar_f[i] = ar_f[i - 1]
        }else{
             ar_f[i] = ar_f[i - 1]?ar_f[i - 1] + 1:1
             map1[str[i]] = true
        }
        
        if(map2[str[n-i-1]]){ 
            ar_b[n-i-1] = ar_b[n-i]
        }else{
             ar_b[n-i-1] = ar_b[n-i]?ar_b[n-i] + 1:1
             map2[str[n-i-1]] = true
        }
    }
    for(let i = 0 ; i < n - 1; i++){
       if(ar_f[i] == ar_b[i+1]) ans++
    }
    return ans
};


console.log(numSplits("aacaba"));
