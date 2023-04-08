class MovingAverage(object):
    """
    @param: size: An integer
    """
    def __init__(self, size):
        # do intialization if necessary
        self.size = size
        self.head = 0
        self.sum = 0
        self.store = []

    """
    @param: val: An integer
    @return:  
    """
    def next(self, val):
        # write your code here
        self.sum += val
        if len(self.store) == self.size:
            self.sum -= self.store[self.head]
            self.store[self.head] = val
        else:
            self.store.insert(self.head, val)        
        
        if self.head == self.size - 1:
            self.head = 0
        else:
            self.head+=1
        return self.sum / len(self.store)

# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param = obj.next(val)