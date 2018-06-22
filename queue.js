
class _Node {
  constructor(data) {
    this.data = data,
    this.ahead = null,
    this.behind = null;
  }
}

//Always true
//queue.first.behind === null
//queue.last.ahead === null;

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    let newNode = new _Node(data);

    if(this.first === null){
      this.first = newNode;
    }

    if(this.last){
      newNode.ahead = this.last;
      this.last.behind = newNode;
    }

    this.last = newNode;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    let toRemove = this.first;
    this.first = toRemove.behind;
    if(toRemove === this.last){
      this.last = null;
    }
    //this.first.ahead = null; //not in curriculum, removes ahead value to new first
    return toRemove.value;
  }

}

function main(){
  let q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.dequeue();
  console.log(q);
}
main();