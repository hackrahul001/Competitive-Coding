function main(arr,k){
  var n = arr.length;
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
       sum += arr[i];
    }
    if(k == 1){
       return true
    }   
    if(sum % k != 0 || k > n){
       return false
    }
    var subSetSum = new Array(k).fill(0)
    var ans = new Array();
    for(let i = 0; i < k; i++){
       ans.push(new Array());
    }
    
    solution(arr,0,n,k,subSetSum,0,ans)
    
}

function solution(arr,i,n,k,subSetSum,sssf,ans){
  if(i == n){
      if(sssf == k){
          var flag = true;
          for(let m = 0; m < subSetSum - 1; m++){
            if(subSetSum[m] != subSetSum[m+1]) {
              flag = false
              break;
            }
          }
          return flag
      }
      return
  }
  for(let j = 0; j < ans.length; j++){
       if(ans[j].length != 0){
          ans[j].push(arr[i])
          subSetSum[j] += arr[i]
          solution(arr,i+1,n,k,subSetSum,sssf,ans)
          subSetSum[j] -= arr[i]
          ans[j].pop()
       }else{
          ans[j].push(arr[i])
          subSetSum[j] += arr[i]
          solution(arr,i+1,n,k,subSetSum,sssf+1,ans)
          subSetSum[j] -= arr[i]
          ans[j].pop()
          break; 
       }
  }
}

console.log(main([1,2,1],2))
