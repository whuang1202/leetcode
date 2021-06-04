/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    
    var boolGrid = new Array(m * n);
    
    for (i = 0; i < boolGrid.length; i++) {
        boolGrid[i] = false;
    }
    
    var max = 0;
    var current = 0;
    
    function neighbor (x, y) {
        if (x < 0 || x >= m) {
            return 0;
        }
        if (y < 0 || y >= n) {
            return 0;
        }
        if (boolGrid[x * n + y]) {
            return 0;
        }
        boolGrid[x * n + y] = true;
        if ((grid[x][y]) == 0) {
            return 0;
        }
        return 1 + neighbor(x + 1, y) + neighbor(x - 1, y) + neighbor(x, y + 1) + neighbor(x, y - 1);
    }
    
    for (x = 0; x < m; x++) {
        for (y = 0; y < n; y++) {
            current = neighbor(x, y);
            if (current > max) {
                max = current;
            }
        }
    }
    return max;
    

};