/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    let rowMap = {};
    let colMap = {};
    let boxMap = {};

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let val = board[row][col];

            rowMap[row] ||= new Set();
            if (rowMap[row].has(val)) {
                return false;
            } else {
                if (val !== ".") {
                    rowMap[row].add(val);
                };
            };

            colMap[col] ||= new Set();
            if (colMap[col].has(val)) {
                return false;
            } else {
                if (val !== ".") {
                    colMap[col].add(val);
                };
            };

            let boxX = Math.floor(row / 3 );
            let boxY = Math.floor(col / 3);
            boxMap[[boxX, boxY]] ||= new Set();
            if (boxMap[[boxX, boxY]].has(val)) {
                return false;
            } else {
                if (val !== ".") {
                    boxMap[[boxX, boxY]].add(val);
                }
            }
        }
    };
    return true
};