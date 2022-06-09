
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = [];
    this._comparator = comparator;
  }
  
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i],, this._heap[j],] = [this._heap[j],, this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

function meeting_room(arr){
    var pq = new PriorityQueue()
    var sorted_arr = arr.sort((a,b)=>a[0]-b[0]) 
    for(let i = 0; i < sorted_arr.length; i++){
       if(pq.isEmpty()){
          pq.push(sorted_arr[i][1])
       }else{
          if(pq.peek() <= sorted_arr[i][0]){
             pq.pop()
          }
          pq.push(sorted_arr[i][1])
       }
    }
    return pq.size()
}





console.log(meeting_room([
   [57188, 88859],
   [13405, 76916],
   [5182, 82309],
   [8295, 90374],
   [3743, 21328],
   [4255, 66894],
   [79623, 87153],
   [11977, 13230],
   [8198, 31248],
   [77598, 96274],
   [27304, 81731],
   [15400, 70826],
   [22335, 53090],
   [983, 62922],
   [9888, 80129],
   [32770, 49164],
   [33435, 71204],
   [32503, 89248],
   [23031, 23782],
   [28329, 85707],
   [17561, 47786],
   [71226, 98612],
   [52459, 97416],
   [38269, 77063],
   [21957, 46006],
   [64006, 83229],
   [237, 52864],
   [18086, 36388],
   [77576, 79380],
   [45654, 80340],
   [9702, 93046],
   [34051, 79619],
   [59164, 97236],
   [80674, 89177],
   [43226, 79288],
   [19716, 45737],
   [16927, 19120],
   [22571, 71096],
   [44728, 46110],
   [5270, 93960],
   [3403, 89287],
   [59917, 83426],
   [43823, 82984],
   [51840, 88148],
   [9087, 22913],
   [8607, 13094],
   [26928, 87985],
   [4611, 15653],
   [31510, 91885],
   [81944, 91853],
   [15062, 45403],
   [58425, 76948],
   [43314, 58089],
   [40178, 41445],
   [17051, 94749],
   [1676, 7391],
   [3317, 11658],
   [16988, 56312],
   [9511, 25926],
   [58567, 94253],
   [8340, 76464],
   [51076, 82937],
   [17380, 91293],
   [28209, 64495],
   [43865, 75661],
   [34022, 50492],
   [49434, 88793],
   [51884, 62749],
   [40628, 82649],
   [50000, 53881],
   [84216, 87681],
   [34390, 70474],
   [55648, 57767],
   [10332, 54100],
   [71068, 90020]
 ]))