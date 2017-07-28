function PriorityQueue() {

  console.log('Inside Main PriorityQueue()');
  let items = [];

  function QueueElement(element, priority) { // {1}
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    console.log('Inside Main PriorityQueue()->this.enqueue()');

    let queueElement = new QueueElement(element, priority);
    console.log('Setting up value of queueElement: ', queueElement);
    let added = false;
    console.log('added set to false by default');
    console.log('added: ', added);
    
    for (let i = 0; i < items.length; i++) {
      console.log('inside for loop, i = ' + i + ' items.length = ' + items.length );
      if (queueElement.priority < items[i].priority) { // {2}
        // splice method (starts from index 'i',
        // removes 0 items, adds queueElements
        console.log('inside if block, so queueElement.priority < items[i].priority == true');
        console.log('because queueElement.priority: ' + queueElement.priority + '< items[i].priority: ' + items[i].priority );        
        items.splice(i, 0, queueElement); // {3}
        console.log('splice method, added queueElement in the index: ', i );
        added = true;
        console.log('added set to true');
        console.log('added: ', added);
        break; // {4}
      }
    }

    console.log('checking added outside the loop again: ', added);

    if (!added) {
      console.log('inside !added');
      console.log('added', added );
      console.log('!added', !added );

      items.push(queueElement); //{5}
      console.log('normally pushed queueElement');
    }
  
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      //console.log(`${items[i].element}  - ${items[i].priority}`);
      console.log(items);
      console.log('\n');
    }
  };
}

let priorityQueue = new PriorityQueue();

console.log('priorityQueue.enqueue("John", 3)')
priorityQueue.enqueue("John", 3);
priorityQueue.print();
console.log('priorityQueue.enqueue("Jackass", 1)')
priorityQueue.enqueue("Jackass", 1);
priorityQueue.print();
console.log('priorityQueue.enqueue("Jack", 2)')
priorityQueue.enqueue("Jack", 2);
priorityQueue.print();
console.log('priorityQueue.enqueue("Jack Ma", 2)')
priorityQueue.enqueue("Jack Ma", 2);
priorityQueue.print();
console.log('priorityQueue.enqueue("Camila", 4)')
priorityQueue.enqueue("Camila", 4);
priorityQueue.print();