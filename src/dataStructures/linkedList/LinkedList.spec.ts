import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  describe("append", () => {
    it("should append an element to an empty list", () => {
      const list = new LinkedList<number>();
      list.append(1);
      expect(list.toString()).toBe("[ 1 ]");
    });

    it("should append an element to an non empty list", () => {
      const list = new LinkedList<number>();
      list.append(1);
      list.append(2);
      expect(list.toString()).toBe("[ 1, 2 ]");
    });
  });

  describe("prepend", () => {
    it("should prepend an element to an empty list", () => {
      const list = new LinkedList<number>();
      list.prepend(1);
      expect(list.toString()).toBe("[ 1 ]");
    });

    it("should prepend an element to an non empty list", () => {
      const list = new LinkedList<number>();
      list.prepend(1);
      list.prepend(2);
      expect(list.toString()).toBe("[ 2, 1 ]");
    });
  });

  describe("get by index", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    it("should get the first element", () => {
      expect(list.get(0)).toBe(1);
    });

    it("should get an element in the middle", () => {
      expect(list.get(1)).toBe(2);
    });

    it("should get the last element", () => {
      expect(list.get(2)).toBe(3);
    });

    it("should get an element out of bounds", () => {
      expect(list.get(3)).toBeUndefined();
    });
  });

  describe("set value at index", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList<number>();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    it("should set an element a the first index", () => {
      list.set(0, 11);
      expect(list.toString()).toBe("[ 11, 2, 3 ]");
    });

    it("should set an element in a middle index", () => {
      list.set(1, 22);
      expect(list.toString()).toBe("[ 1, 22, 3 ]");
    });

    it("should set an element a the last index", () => {
      list.set(2, 33);
      expect(list.toString()).toBe("[ 1, 2, 33 ]");
    });

    it("should do nothing if targeting out of bounds index", () => {
      list.set(3, 44);
      expect(list.toString()).toBe("[ 1, 2, 3 ]");
    });
  });

  describe("remove by index", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList<number>();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    it("should remove the first element", () => {
      list.removeAt(0);
      expect(list.toString()).toBe("[ 2, 3 ]");
    });

    it("should remove an element in the middle", () => {
      list.removeAt(1);
      expect(list.toString()).toBe("[ 1, 3 ]");
    });

    it("should remove the last element", () => {
      list.removeAt(2);
      expect(list.toString()).toBe("[ 1, 2 ]");
    });

    it("should do nothing when removing at out of bounds index", () => {
      list.removeAt(3);
      expect(list.toString()).toBe("[ 1, 2, 3 ]");
    });
  });

  describe("remove by value", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList<number>();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    it("should remove the first element", () => {
      list.remove(1);
      expect(list.toString()).toBe("[ 2, 3 ]");
    });

    it("should remove an element in the middle", () => {
      list.remove(2);
      expect(list.toString()).toBe("[ 1, 3 ]");
    });

    it("should remove the last element", () => {
      list.remove(3);
      expect(list.toString()).toBe("[ 1, 2 ]");
    });

    it("should not remove an element not in the list", () => {
      list.remove(4);
      expect(list.toString()).toBe("[ 1, 2, 3 ]");
    });

    it("should remove the only element of a list", () => {
      const list = new LinkedList<number>();
      list.append(1);
      list.remove(1);
      expect(list.toString()).toBe("[ ]");
    });

    it("should remove the first occurence only", () => {
      const list = new LinkedList<number>();
      list.append(1);
      list.append(1);
      list.remove(1);
      expect(list.toString()).toBe("[ 1 ]");
    });
  });

  describe("contains", () => {
    // it("should retrieve an element", () => {});
    // it("should not retrieve an element which is not in the list", () => {});
  });
});
