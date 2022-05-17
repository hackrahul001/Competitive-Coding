/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
    var frequency = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++){
        frequency[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
   
   var count = 0;
   var seen_frequency = new Set();
   
   for(let i = 0; i < 26; i++){
       while(seen_frequency.has(frequency[i]) && frequency[i]){
              frequency[i] -= 1;
               count += 1;
       }
   
      seen_frequency.add(frequency[i])
   }

  return count
};