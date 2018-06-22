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
      mathStack.push({char: mathEx[i], pos: i});
    } else if(mathEx[i] === ')'){
      if(mathStack.top === null){
        return i;
      } else {
        mathStack.pop();
      }
    }   
  }
  return mathStack.top === null ? true : mathStack.top.data.pos;
}


// inputStack --- 6 5 3 4 2 1
// savedVal
// sortedStack
// loop inputStack
// if currNode < sortedStack.top -> sortedStack.push(currNode)
// else savedVall = currNode +  


function sortStack(inStack){
  let sortedStack = new Stack();
  let saved;
  while(inStack.top !== null){
    if(sortedStack.top === null || inStack.top.data < sortedStack.top.data){
      sortedStack.push(inStack.pop());
    } else {
      saved = inStack.top;
      while(sortStack.top !== null){
        if(saved.data >= sortedStack.top.data){
          inStack.push(sortedStack.pop());
        } else {
          sortedStack.push(saved);
        }
      }
    }    
  }
  return sortedStack;
}
// sorted - 2
// sorted - 1, 2
// saved - 4
// 
//
//
//


let exampleStack = new Stack();
exampleStack.push(5);
exampleStack.push(6);
exampleStack.push(3);
exampleStack.push(4);
exampleStack.push(1);
exampleStack.push(2);
display(exampleStack);


display(sortStack(exampleStack));


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

  // Check for Parenthesis
// let mathExample1 = '2()(2(x) + 1)';
// let mathExample2 = '3(x+2))';
// let mathExample3 = '2()((2(x)+1)';
// let mathExample4 = ')2()((2(x)+1)(';

// console.log(checkParens(mathExample1)); // true
// console.log(checkParens(mathExample2)); // 6
// console.log(checkParens(mathExample3)); // 3
// console.log(checkParens(mathExample4)); // 0
}
main();











class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }
}

