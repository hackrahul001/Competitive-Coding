var minDifference = function(nums) {
    nums.sort((a,b)=>a-b)
    var n = nums.length
    if(n <= 3) return 0
    return Math.min(nums[n-4]-nums[0],nums[n-3]-nums[1],nums[n-2]-nums[2],nums[n-1]-nums[3])
   
};


console.log(minDifference([1,5,0,10,14]))