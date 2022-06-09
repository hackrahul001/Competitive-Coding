/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    var string = [""]
    for(let i = 0; i < arr.length; i++){
        var s = new Set(arr[i].split(""))
        if(arr[i].length == s.size){
          var temArray = [];
          for(let j = 0; j < string.length; j++){
             if(checkCommonCharNotExist(string[j],arr[i])){
              temArray.push(string[j]+arr[i])
            }
          }
         string = string.concat(temArray)
        }
    }
    return longest(string)
};

var longest = function(st) {
     return Math.max(...(st.map(el => el.length)));
};

function checkCommonCharNotExist(given,check){
    var count = -1;
    check.split("").forEach(function(e){
        if(given.indexOf(e) > -1){
            count ++;
        }
    })
    if(count > -1) return false 
    else return true
}


console.log(maxLength(["un","iq","ue"]))