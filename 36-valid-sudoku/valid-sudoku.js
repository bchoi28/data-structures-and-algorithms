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
        rowMap[row] ||= new Set();

        for (let col = 0; col < cols; col++) {
            colMap[col] ||= new Set();

            let val = board[row][col];

            if (val !== ".") {
                if (rowMap[row].has(val)) {
                    return false;
                } else {
                    rowMap[row].add(val);
                };

                if (colMap[col].has(val)) {
                    return false;
                } else {
                    colMap[col].add(val);
                };

                let boxX = Math.floor(row / 3 );
                let boxY = Math.floor(col / 3);
                boxMap[[boxX, boxY]] ||= new Set();
                if (boxMap[[boxX, boxY]].has(val)) {
                    return false;
                } else {
                    boxMap[[boxX, boxY]].add(val);
                }
            }
        }
    };
    return true
};