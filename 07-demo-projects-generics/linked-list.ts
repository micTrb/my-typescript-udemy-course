class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);
  }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
