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
    if(this.top === null){
      return null;
    }
    let node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const peek = (stack) => {
  return stack.top; 
};

const display = (stack) => {
  let currNode = stack.top;
  while(currNode !== null){
    console.log(currNode.data + ',');
    currNode = currNode.next;
  }
};

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let strStack = new Stack();
  for(let i = 0; i < s.length; i++){
    strStack.push(s[i]);
  }
  let revStr = '';
  let currNode = strStack.top;
  while(currNode !== null){
    revStr+=currNode.data;
    currNode = currNode.next;
  }
  return s === revStr;
}

// example --- '2(2(x) + 1)(y * 2)'
// loop through 
// find ( push onto a new stack
// find ) pop from stack
// when loop ends new stak .top === null
function checkParens(mathEx){
  let mathStack = new Stack();
  for (let i = 0; i < mathEx.length; i++) {
    if(mathEx[i] === '('){
      mathStack.push(mathEx[i]);
    }
    if(mathEx[i] === ')'){
      if(mathStack.top === null){
        return i;
      }
      mathStack.pop();
    }   
  }
  if(mathStack.top !== null){
    for (let i = 0; i < mathEx.length; i++) {
      if(mathEx[i] === '('){
        mathStack.pop();
      }
      if(mathStack.top === null){
        return i;
      }
    }
  }
  return mathStack.top === null ? true : false;
}
let mathExample = '2(2(x) + 1))(y * 2)';
//let mathExample = '())';


console.log(checkParens(mathExample));


function main(){
  // Create a Stack class
  // let starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // starTrek.pop();

  // Useful methods for stack
  // console.log(peek(starTrek));
  // display(starTrek);
  // starTrek.pop();

  // Check for palindromes
  // console.log(is_palindrome('dad'));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome('1001'));
  // console.log(is_palindrome('Tauhida'));
}
main();











class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }
}

