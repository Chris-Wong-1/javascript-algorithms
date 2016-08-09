function newStack() {
  var stack = new Array();

  // Fill the stack with A, B and C
  stack.push('A');
  stack.push('B');
  stack.push('C');
  console.log(stack.toString());

  // Remove the top item on the stack
  stack.pop();
  console.log(stack.toString());

  // Add a new item to the top of the stack
  stack.push('Z');
  console.log(stack.toString());
}

newStack();
