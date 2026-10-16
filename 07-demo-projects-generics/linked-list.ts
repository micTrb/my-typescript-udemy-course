class ListNode {}

class LinkedList<T> {
  private root?: ListNode;
  private length = 0;

  //add using a generic tyoe
  add(value: T) {}
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
