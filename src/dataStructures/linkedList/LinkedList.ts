import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<T> {
  private _head?: LinkedListNode<T>;
  private _tail?: LinkedListNode<T>;
  size: number = 0;

  get head(): T | undefined {
    return this._head?.value;
  }

  get tail(): T | undefined {
    return this._tail?.value;
  }

  toString(...args: any[]): string {
    const tokens: string[] = Array(this.size).fill("");

    let curr = this._head;
    let index = 0;

    while (curr) {
      const val = curr.value as
        | { toString(...args: any[]): string }
        | null
        | undefined;

      switch (val) {
        case undefined:
          tokens[index] = "undefined";
          break;
        case null:
          tokens[index] = "null";
          break;
        default:
          tokens[index] = val.toString(...args);
          break;
      }

      curr = curr.next;
      index++;
    }

    if (tokens.length === 0) {
      return "[ ]";
    }

    return `[ ${tokens.join(", ")} ]`;
  }

  append(value: T): void {
    const node = new LinkedListNode(value);

    if (!this._head || !this._tail) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this.size++;
  }

  prepend(value: T): void {
    const node = new LinkedListNode(value);

    if (!this._head || !this._tail) {
      this._head = node;
      this._tail = node;
    } else {
      node.next = this._head;
      this._head = node;
    }

    this.size++;
  }

  get(index: number): T | undefined {
    if (index >= this.size) {
      return;
    }

    if (!this._head) {
      return;
    }

    let node = this._head;

    for (let i = 0; i < index; i++) {
      if (!node.next) {
        return;
      }

      node = node.next;
    }

    return node.value;
  }

  set(index: number, value: T): void {
    // Early abort if targeting out of bounds index
    if (index >= this.size) {
      return;
    }

    let i = 0;
    let curr = this._head;

    while (curr) {
      if (i === index) {
        curr.value = value;
        break;
      }

      curr = curr.next;
      i++;
    }
  }

  removeAt(index: number): void {
    let i = 0;
    let prev: LinkedListNode<T> | undefined = undefined;
    let curr = this._head;

    while (curr) {
      if (i === index) {
        if (prev && !curr.next) {
          prev.next = undefined;
          this._tail = prev;
        }

        if (prev && curr.next) {
          prev.next = curr.next;
        }

        if (!prev && !curr.next) {
          this._head = undefined;
          this._tail = undefined;
        }

        if (!prev && curr.next) {
          this._head = curr.next;
        }

        this.size--;
        break;
      }

      prev = curr;
      curr = curr.next;
      i++;
    }
  }

  remove(value: T): void {
    let prev: LinkedListNode<T> | undefined = undefined;
    let curr = this._head;

    while (curr) {
      if (curr.value === value) {
        if (prev && !curr.next) {
          prev.next = undefined;
          this._tail = prev;
        }

        if (prev && curr.next) {
          prev.next = curr.next;
        }

        if (!prev && !curr.next) {
          this._head = undefined;
          this._tail = undefined;
        }

        if (!prev && curr.next) {
          this._head = curr.next;
        }

        this.size--;
        break;
      }

      prev = curr;
      curr = curr.next;
    }
  }
}
