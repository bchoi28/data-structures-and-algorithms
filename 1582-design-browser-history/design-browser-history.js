/**
 * @param {string} homepage
 */
class ListNode {
    constructor(url) {
        this.url = url;
        this.next = null;
        this.prev = null;
    }
}

var BrowserHistory = function(homepage) {
    this.head = new ListNode(homepage);
    this.curr = this.head;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const page = new ListNode(url);
    this.curr.next = page;
    page.prev = this.curr;
    this.curr = page;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (this.curr.prev && steps) {
        this.curr = this.curr.prev;
        steps--;
    };
    return this.curr.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (this.curr.next && steps) {
        this.curr = this.curr.next;
        steps--;
    };
    return this.curr.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */