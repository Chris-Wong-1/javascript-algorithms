// Implementation of a node
function linkedList () {
  // Start with a empty linked list with both head and tail as null
  this.head = null
  this.tail = null

  // Create a node
  this.newNode = function () {
    return {data: null, next: null}
  }

  // Add a new node to the linked list while resetting the head and tail
  this.add = function (data) {
    if (this.head === null) {
      this.head = this.newNode()
      this.tail = this.head
    } else {
      this.tail.next = this.newNode()
      this.tail = this.tail.next
    }
    this.tail.data = data
  }
}

// DRIVER CODE
// Create a new linked list
let list = new linkedList()

// Create ten nodes
for (let i = 1; i <= 10; i++) {
  list.add(i)
}

// Check the data values for the head and tail nodes
console.log(list.head.data)
console.log(list.head.next.data)
console.log(list.tail.data)
