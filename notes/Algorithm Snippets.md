
## Test
```ts
class MonotonicStack{

    stck : number[] = []

    push(val:number){

       let stck = this.stck

       while(this.top() < val){

           stck.pop()

       }

       stck.push(val)

  

    }

    top(){

        let stck = this.stck

        return stck[stck.length - 1]

    }

}
```
## Dynamic Sliding Window
```ts
function subArraySumGt(arr:number[],s:number):number{

    let res = Number.MAX_SAFE_INTEGER

    let l = 0

    let r = 0

    let temp = 0

    while(r < arr.length){

        temp+=arr[r]

        while( (l < r) && temp>= s){

            res = Math.min(res,(r-l)+1)

            temp-=arr[l]

            l++

        }

        r++

    }

    return res

}
```
# Sieve of Eratosthenes
```ts
function primeSieve(n:number){

    let nPrime = 0

    if( n <= 1){

        return 0

    }

    let l = []

    for(let i = 2; i <= n; i++){

        l[i] = true

    }

    for(let i = 2; i <= Math.sqrt(n); i++){

        if(l[i] === true){

            for(let j = i*i; j <= n; j+=i ){

                l[j] = false

            }

        }

    }

    for(let b = 2; b<=n;b++){

        if(l[b] === true){

            nPrime++

        }

    }

  

    return nPrime

}

```
## Implementation of A Max Heap
```ts
class Heap{

     heapArray:number[] = []

     constructor(heapArray:number[]){

         this.heapArray = heapArray

         this.build_max_heap(heapArray)

     }

     //[100, 12, 89, 9, 5, 25, 65, 4, 6, 3, 0, 22, 20, 1, 28, -5]

   maxHeapify(arr:number[], n:number, i:number)

    {

        const size = arr.length

        const l = 2*i

        const r = (2*i) + 1

        let largest = i    

        if(l < size && arr[l] > arr[i]){

            largest = l

        }

        if(r <  size && arr[r]>arr[largest]){

            largest = r

        }

  

            if(largest!==i){

                let temp = a[largest]

                a[largest] = a[i]

                a[i] = temp

  

                this.maxHeapify(arr,n,largest)

            }

        }

     build_max_heap(a:number[]){

         let size = a.length

         for(let i = Math.floor(size/2); i > 0; i--){

             this.maxHeapify(a,size,i)

         }

  

     }

    isHeap(arr: number[], i: number, n: number): boolean {

        // If (2 * i) + 1 >= n, then leaf node, so return true

        if (i >= (n - 1) / 2) {

            return true;

        }

  

        // If an internal node and

        // is greater than its

        // children, and same is

        // recursively true for the

        // children

        if (arr[i] >= arr[2 * i + 1]

            && arr[i] >= arr[2 * i + 2]

            && this.isHeap(arr, 2 * i + 1, n)

            && this.isHeap(arr, 2 * i + 2, n)) {

            return true;

        }

  

        return false;

    }

  
  

}

let a = [null, 0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10]

  
  

let heap = new Heap(a)

heap.heapArray.push(100,-5,10000)

heap.build_max_heap(heap.heapArray)

  

console.log(heap.heapArray.slice(1))

console.log("isHeap: " + heap.isHeap(heap.heapArray,1,heap.heapArray.length-1))
```


## Level Order Traversal Of A Binary Tree
```js
  
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let q = [root]
    let res = []
    
    while (q.length > 0){
        let t = []
        let l = q.length
        for(let i = 0; i < l;i++){
            let node = q.shift()
            if(node){
                t.push(node.val)
                q.push(node.left,node.right)
            }
        }
        
        if(t.length !== 0){
            res.push(t)
        }
    }
    return res
};

```

## Implementation of a graph w/ traversal (BFS & DFS)
```ts
class Graph <T>{

    adjacencyList = new Map<T,T[]>()

  constructor() {

  }

  addNode(val:T){

    this.adjacencyList.set(val,[])

  }

  addEdge(source:T,destination:T){

    let map = this.adjacencyList

    let a = map.get(source)

    let b = map.get(destination)

    if(a && b){

      a.push(destination)

      b.push(source)

    }

  

  }

  bfs(start:T,end:T){

    let visited = new Set<T>()

    let q : T[] = [start]

    while (q.length > 0){

      let node = q.shift()

      console.log(`|node --> ${node}`)

      if(node){

        let adj = this.adjacencyList.get(node)

        for(let el of adj){

        console.log(`|-child --> ${el}`)

  

          if(el === end){

            return true

          }

          if(!visited.has(el)){

            visited.add(el)

            q.push(el)

          }

  

        }

      }

  

    }

    return false

  

  }

  dfs(start:T,end:T,visited = new Set<T>()):boolean{

    visited.add(start)

    let adj = this.adjacencyList.get(start)

    console.log(`|node --> ${start} `)

    if(adj){

      for(let node of adj){

      console.log(`|-child --> ${node} `)

  

        if(node === end){

          return true

        }

        if(!visited.has(node)){

          let v = this.dfs(node,end,visited)

          if(v === true){

            return v

          }

        }

      }

    }

  

    return false

  

  }

  

}

let g = new Graph<number>()

g.addNode(1)

g.addNode(2)

g.addNode(3)

g.addNode(5)

g.addNode(6)

g.addNode(7)

  
  

g.addEdge(1,2)

g.addEdge(2,5)

g.addEdge(1,3)

g.addEdge(3,6)

g.addEdge(3,7)

console.log(g.dfs(1,8))

```
## Power set of a given set
```ts
const decToBin = (dec:number)=>{

    return (dec >>> 0).toString(2)

}

const generateBitStrings = (n:number)=>{

    let len = Math.pow(2,n)

    let arr : string[] = []

    let str = ""

    for(let i = 0 ; i < n; i++){

        str+="0"

    }

    arr.push(str)

    for(let i = 1; i < len; i++){

        let p = i

        arr.push(decToBin(p).padStart(n,"0"))

    }

    return arr

  

}

function generatePowerSet<T>(subset:Set<T>){

    let arr = [...subset]

    let bitstrings = generateBitStrings(arr.length)

    console.log(bitstrings)

    let powerset : Set<Set<T>> = new Set()

    bitstrings.forEach((el)=>{

        let temp_arr : Set<T> = new Set()

        for(let i = 0; i < el.length;i++){

            if(el[i] === "1"){

                console.log('yes',el,arr[i])

                temp_arr.add(arr[i])

            }

        }

        powerset.add(temp_arr)

    })

    return powerset

}

console.log(generatePowerSet(new Set([1,2,3])))
```
## Monotonic Stack
```ts
class MonotonicStack{

    popLimit :number = 0

    public a : number[] = []

    constructor(popLimit:number){

        this.popLimit = popLimit

    }

  

    public push(item:number){

        let stck = this.a

        if(stck[stck.length - 1] > item){

            while(stck[stck.length - 1]>item && this.popLimit > 0){

                this.pop()

  

                this.popLimit--

            }

        }

        this.a.push(item)

  
  

    }

    public peek(){

        return this.a[this.a.length - 1]

    }

    public pop(){

        return this.a.pop();

    }

    public getStack(){

        return this.a

    }

}

let s = new MonotonicStack(3)

let str = '1432219'

for (let c of str){

    s.push(parseInt(c))

}
```
## Insertion sort 
- [[introduction-to-algorithms-3rd-edition.pdf#page=39]]
## Two Pointers
```ts
let arr : number|array = []
let ptr1 = 0
let ptr2 = arr
while(ptr2>ptr1){
	let sum = arr[ptr1]+arr[ptr2]
	if(sum === target){
		return [ptr1,ptr2]
	}
	if(sum < target){
		ptr1++
	}else{
		ptr1--
	}
}

```

## Kadane's Algorithm
```ts
const kadane = (arr:number[])=>{

    let curSum = 0

    let maxSum = Number.MIN_VALUE

    for(let i = 0 ; i < arr.length;i++){

        curSum+=arr[i]

        if(curSum>maxSum){

            maxSum = curSum

        }

        if(curSum<0){

            curSum = 0

        }

    }

    return maxSum

  

}

```
## Heap's algorithm
```ts
let c:number[][]=[]

const permutate = (k:number, arr:any[])=>{

    if(k === 1){

        c.push(arr)

        return;

    }else{

        permutate(k-1,arr)

        for(let i = 0;  i < k - 1; i++){

            if(k % 2 === 0){

                let temp = arr[k-1]

                arr[k-1] = arr[i]

                arr[i] = temp

  

            }else{

                let temp = arr[0]

                arr[0] = arr[k-1]

                arr[k-1] = temp

            }

  

            permutate(k-1,arr)

  

        }

    }

    return c

}

```
## Merge Sort
```ts
let m_arr = [3,51,6,3,5,36,7]

const mergeSort  = (m:number[]):number[]=>{

    let mid = Math.floor(m.length/2)

  

    if(m.length === 1){

        return m

    }

    let l = mergeSort(m.slice(0,mid))

    let r = mergeSort(m.slice(mid))

  

    return merge(l,r)

}

const merge = (a:number[],b:number[]):number[]=>{

    let c = []

    while (a.length!== 0 && b.length !== 0){

        if(a[0]>b[0]){

            c.push(b[0])

            b.splice(0,1)

  

        }else{

            c.push(a[0])

            a.splice(0,1)

        }

    }

    while(a.length !== 0){

        c.push(a[0])

        a.splice(0,1)

    }

    while(b.length !== 0){

        c.push(b[0])

        b.splice(0,1)

    }

    return c

}

  
  
  

console.log(mergeSort(m_arr))
```

## Selection Sort
```ts
const SelectionSort = (arr:number[])=>{

    for(let i = 0 ; i < arr.length ;i ++ ){

        let cur = arr[i]

        let i2 = null

        for (let j = i+1; j < arr.length;j++){

            if(arr[j]<cur){

                i2 = j

            }

  

        }

        if(i2){

            [arr[i],arr[i2]] = [arr[i2],arr[i]]

  

        }

  

    }

    return arr

}
```