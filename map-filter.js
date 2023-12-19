const numbers=[1,2,3,4,5];
const output=[];

function square(ele,index){
    console.log (ele,index);
}
numbers.map((ele, index) => square(ele, index));

numbers.map(function(ele,index,array){
    console.log(ele,index,array);
});
//Filter
const bigger=numbers.filter(x=>(x>3));
console.log(bigger);

//Find
const dhundo=numbers.find(x=>(x>2));
console.log(dhundo);