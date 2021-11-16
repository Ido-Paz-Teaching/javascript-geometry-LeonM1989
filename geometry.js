function getTriangleArea(height, width) {
  /* Your amazing code here 🚀 */
  return Number(width * height / 2);
}

function getSquareArea(side) {
  /* Your amazing code here 🚀 */
  return Number(Math.pow(side, 2));
}

function getCircleArea(radius) {
  
  /* Your amazing code here 🚀 */
  return Number((Math.PI*(Math.pow(radius, 2))).toFixed(2));
}

//Please , don't remove the following code 
if (typeof module !== 'undefined') {
  module.exports = {
    getTriangleArea,
    getSquareArea,
    getCircleArea
  };
}