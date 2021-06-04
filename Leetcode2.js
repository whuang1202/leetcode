/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0);
    horizontalCuts.push(h);
    verticalCuts.push(0);
    verticalCuts.push(w);
    var hSorted = horizontalCuts.sort(function(a, b){return a - b});
    var vSorted = verticalCuts.sort(function(a, b){return a - b});
    
    var maxXDist = 0;
    var currentXDist = 0;
    var maxYDist = 0;
    var currentYDist = 0;
    
    for (i = 0; i < hSorted.length - 1; i++) {
        currentXDist = hSorted[i + 1] - hSorted[i];

        if (currentXDist > maxXDist) {
            maxXDist = currentXDist;
        }
    }
    
    for (i = 0; i < vSorted.length - 1; i++) {
        currentYDist = vSorted[i + 1] - vSorted[i];

        if (currentYDist > maxYDist) {
            maxYDist = currentYDist;
        }
    }
    
    return (maxXDist * maxYDist) % (10**9 + 7);
};