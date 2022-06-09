function isPelimdrome(s,l,r){
    var frequency = {}
    for(let i = l; i <= r; i++){
        if(frequency[s[i]]) frequency[s[i]] += 1
        else frequency[s[i]] = 1
    }
    var check = 1
    var oneCheck = 0
    Object.values(frequency).forEach(function(e){
        if(!((e % 2 == 0 || (e == 1 && !oneCheck)) )){
           check = 0
        }
        if(e == 1){
            oneCheck = 1
        }
    })

    return check
    
}


function minSwap(s){
    
}

console.log(minSwap("aab",0,2))