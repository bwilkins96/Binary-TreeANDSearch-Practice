function linearSearch (arr, target) {
  for(let i = 0; i < arr.length; i++) {if (arr[i] === target) {return i}} return -1;
};

//console.log(linearSearch([1,2,3,4], 4));
//console.log(linearSearch([1,2,3,4], 5));

function binarySearch(arr, target) {
  let high = arr.length - 1; let low = 0; let mid;

  while(high >= low ) {
    mid = Math.floor((high + low) / 2);

    if (target === arr[mid]) {return mid}
    else if (target > arr[mid]) { low = mid + 1 }
    else if (target < arr[mid]) { high = mid - 1 }
  }

  return -1;
}


//console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 16));
//console.log(binarySearch([1,2,3,4], 5));


  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers


module.exports = [linearSearch, binarySearch]



/*let test = [];
for (let i = 0; i < 1000000; i++) {
  test.push(i);
}
console.log("done");

console.time("linear");
for(let i = 0; i < 100000; i++) {
  linearSearch(test, i * 1)
}
console.timeEnd("linear");

console.time("binary");
for(let i = 0; i < 1000000; i++) {
  binarySearch(test, i)
}
console.timeEnd("binary"); */
