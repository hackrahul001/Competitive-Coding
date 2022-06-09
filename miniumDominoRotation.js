function minium_rotation(tops,bottoms){
    var nt = tops.length;
    var map = {}
    for(i = 0; i < nt; i++){
             if(map[tops[i]]){
                map[tops[i]] =   map[tops[i]] + 1
             }
             else {
                 map[tops[i]] = 1
            }

            if(map[bottoms[i]]){
                map[bottoms[i]] =   map[bottoms[i]] + 1
             }
             else {
                map[bottoms[i]] = 1
            }
    }
    
    var tcount = 0
    var bcount = 0
    var key  = 0
    Object.keys(map).forEach(function(e){if(map[e] >= nt)key  = e})

    for(let i = 0; i < nt; i++){
        var f = true
        if(tops[i] == key){
            if(bottoms[i] != key) bcount++
            f = false
        }
        if(bottoms[i] == key){ 
            if(tops[i] != key) tcount++
            f = false
        }
        if(f) return -1
    }

    return Math.min(tcount,bcount) 
}


console.log(minium_rotation([2,1,2,4,2,2],[5,2,6,2,3,2]))