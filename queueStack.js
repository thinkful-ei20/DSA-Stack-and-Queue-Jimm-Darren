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

class SnakeQueue{
  constructor(){
    this.entryQueue = new Stack(),
    this.exitQueue = new Stack();
  }
  enqueue(data){
    console.log(`${data} entered`);
    this.entryQueue.push(data);
  }
  dequeue(){
    if(this.exitQueue.top === null){
      while(this.entryQueue.top !== null){
        this.exitQueue.push(this.entryQueue.pop());
      }      
    }
    if(Math.random() < 0.25){
      let patron = this.exitQueue.pop();
      console.log(`${patron} rejected`);
      this.enqueue(patron);
    } else {
      let patron = this.exitQueue.pop();
      console.log(`${patron} accepted`);
    }
  }
}


function main(){
  // let example = new Queue();
  // example.enqueue('a');
  // example.enqueue('b');
  // example.enqueue('c');
  // example.dequeue();
  // example.enqueue('d');
  // example.enqueue('e');
  // example.dequeue();
  // console.log(JSON.stringify(example,null, 2));

  let bank = new SnakeQueue();
  // for(let i = 0; i < 25; i++){
  //   snake.enqueue(`${i}`);
  // }
  // for(let j = 0; j < 25; j++){
  //   setInterval(()=>{
  //     snake.dequeue();
  //   }, 2000);
  // }

  bank.enqueue('a');
  bank.enqueue('b');
  bank.enqueue('c');
  bank.enqueue('d');
  bank.enqueue('e');
  bank.enqueue('f');
  bank.enqueue('g');
  bank.enqueue('h');
  bank.enqueue('i');
  bank.enqueue('j');
  bank.enqueue('k');

  
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();
  bank.dequeue();

  console.log(JSON.stringify(bank,null, 2));
}
main();
