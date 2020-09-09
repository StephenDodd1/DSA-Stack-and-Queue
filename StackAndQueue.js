class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}
function main() {
  let starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  console.log(starTrek);
  peek(starTrek);
  isEmpty(starTrek);
  display(starTrek)
}
function peek(stack) {
  console.log(stack);
}
function isEmpty(stack) {
  if (!stack.top) {
    console.log('The stack is empty')
  }
  else console.log("Stack is not empty.");
}
function display(stack){
  console.log(stack)
}
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let sentence = new Stack();
  let z = 0
  while(s[z] !== undefined){
    sentence.push(s[z])
    z++
  }
  for(let i = 0; i < Math.floor(s.length / 2); i ++){
    if(sentence.pop() !== s[i]){
      return console.log('false')
    }
    continue
  }
  return console.log('true')
}
main();
console.log(is_palindrome('dad'))
console.log(is_palindrome('dadd'))