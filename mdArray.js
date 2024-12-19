let subArray1 = prompt("Enter names separated by commas:", "Genevieve, Juan, Luna, Gabriel, Elise").split(',');
let subArray2 = prompt("Enter ages separated by commas:", "24, 65, 21, 5, 9").split(',').map(Number);


  console.log("Original names array:", subArray1);
  console.log("Original ages array:", subArray2);
let structuredArray = [];

for (let i = 0; i < subArray1.length; i++) {
    structuredArray.push([subArray1[i].trim(), subArray2[i]]);
}


  console.log("Restructured multi-dimensional array:");
structuredArray.forEach(item => {
    console.log(`[${item[0]}, ${item[1]}]`);
});