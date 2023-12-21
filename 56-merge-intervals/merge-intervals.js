/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
      intervals.sort((a,b) => a[0] - b[0]);
  let stack = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {

    let prevInt = {
      start : stack[stack.length - 1][0],
      end : stack[stack.length - 1][1]
    }

    let nextInt = {
      start : intervals[i][0],
      end : intervals[i][1]
    }

    if (prevInt.end >= nextInt.start && nextInt.end > prevInt.end) {
      stack[stack.length -1][1] = nextInt.end;
    } else if (prevInt.end < nextInt.start) {
      stack.push(intervals[i]);
    }
  }
  return stack;
};