const arr=[1,3,4,5,8];
const part=arr.slice(2,4);
console.log(arr);
console.log(part);

// const remove=arr.splice(2,1); //(from where, no of element want to remove)
const remove=arr.splice(2,1,11,12); //(from where, no of element want to remove,inject)
console.log(remove);
console.log(arr); 

const together=arr.join(",");
console.log(together);