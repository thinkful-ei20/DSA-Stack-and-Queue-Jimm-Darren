class _Node {
  constructor(data,next) {
    this.data=data,
    this.next=next;
  }
}
class Stack{
  constructor(){
    this.top = null;
  }
  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
    // return this.top;
  }
  pop(){
    if(this.top === null){
      return null;
    }
    let node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class Queue{
  constructor(){
    this.entryQueue = new Stack(),
    this.exitQueue = new Stack();
  }

  enqueue(data){
    this.entryQueue.push(data);
  }

  dequeue(){
    if(this.exitQueue.top === null){
      while(this.entryQueue.top !== null){
        this.exitQueue.push(this.entryQueue.pop());
      }      
    }
    this.exitQueue.pop();
  }

}
function main(){
  let example = new Queue();
  example.enqueue('a');
  example.enqueue('b');
  example.enqueue('c');
  example.dequeue();
  example.enqueue('d');
  example.enqueue('e');
  example.dequeue();





  console.log(
    JSON.stringify(
      example
    ,null, 2)
    );
  
}
main();
