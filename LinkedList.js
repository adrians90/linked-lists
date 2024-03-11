// For append() you need to know the tail
//For prepend() you need to save the original head and then insert a new node with
//original head as pointer
//For pop() you need to know the tail and get another pointer beore the tail

const Node = require("./Node")

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    getHead() {
        return this.head
    }

    getTail() {
        if (!this.head) return null
        let tail = this.head
        while (tail.nextNode !== null) {
            tail = tail.nextNode
        }
        return tail
    }

    size() {
        let count = 0
        let pointer = this.head
        while (pointer !== null) {
            count++
            pointer = pointer.nextNode
        }
        return count
    }

    append(value) {
        //empty node
        if (!this.head) {
            this.head = new Node(value)
            return this
        }
        let tail = this.getTail()
        tail.nextNode = new Node(value)
        return tail
    }
    prepend(value) {
        if (!this.head) {
            this.head = new Node(value)
            return this
        }
        const prevHead = this.head
        this.head = new Node(value, prevHead)
    }

    at(index) {
        if (!this.head) return null
        let pointer = this.head
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode
        }
        return pointer ? pointer : null
    }

    pop() {
        //for empty list
        if (!this.head) return null
        if(!this.head.nextNode) {
            this.head = null
            return
        }
        let pointerBeforeTail = this.at(this.size() - 2)
        pointerBeforeTail.nextNode = null
        return this.head
    }

    contains(value) {
        if (!this.head) return null
        let pointer = this.head
        while (pointer.nextNode !== null) {
            if (pointer.value === value) return true
            pointer = pointer.nextNode
        }
        return pointer.value === value ? true : false
    }

    find(value) {
        if (!this.head) return null
        let pointer = this.head
        let count = 0
        while (pointer.nextNode !== null) {
            if (pointer.value === value) return count
            pointer = pointer.nextNode
            count++
        }
        if (pointer.value = value) return count
        return null

    }
    toString() {
        if (!this.head) return "(null)"
        let str = ""
        let pointer = this.head
        while (pointer.nextNode !== null) {
            str = `${str} (${pointer.value})->`
            pointer = pointer.nextNode
        }

        return `${str} (${pointer.value}) -> (null)`
    }
}

const list = new LinkedList()

list.prepend(3)
list.append(2)
list.append(3)
list.append(4)

console.log(list.size())  //4
console.log(list.getHead())
console.log(list.getTail())
console.log(list.contains(3))//true
console.log(list.find(2)) // value 2 is at second node index 1
console.log(list.toString()) //(3)->(2)->(4)->(null)