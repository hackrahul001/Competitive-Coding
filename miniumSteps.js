function minium_steps(array){
    array.sort().reverse();
    // edge case
    if(array.length < 2) return 0
    var steps = 0;
    for(let i = 0; i < array.length; i++){
         if(array[i] != array[i-1]) steps += i
    }
    return steps

}


console.log(minium_steps([1, 1, 2, 2, 2, 3, 3, 3, 4, 4]))
console.log(minium_steps([5, 2, 1]))
