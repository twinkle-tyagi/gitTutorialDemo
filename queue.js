class Queue
{
    constructor()
    {
        this.queue = [];
        this.front = -1;
        this.rear = -1;
    }
    push(item)
    {
        if(this.front == -1 && this.rear == -1)
        {
            this.front++;
            this.rear++;
        }
        else
        {
            this.rear++;
        }
        this.queue[this.rear] = item;
    }
    pop()
    {
        if(this.front > this.rear)
        {
            console.log("underflow");
        }
        else{
            console.log("item deleted is", this.queue[this.front]);
            this.queue[this.front] = undefined;
            this.front++;
        }
    }
    show()
    {
        console.log(this.queue);
    }
}

const obj = new Queue();
obj.push(1);
obj.push(5);
obj.pop();
obj.show();
