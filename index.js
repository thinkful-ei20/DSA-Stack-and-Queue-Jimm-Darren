class _Node {
  constructor(data,next) {
      this.data=data,
      this.next=next
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
    // if(this.top === null){
    //   return null;
    // }
    let node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main(){
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(
    JSON.stringify(
      starTrek
    ,null, 2)
  );
}
main();











class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }
}

