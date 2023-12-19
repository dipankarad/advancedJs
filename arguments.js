function add(a,b){
    // console.log(arguments);
    // return a+b+arguments[2];
    console.log([...arguments]);
    
}
const jog=add(5,6,9,10);
console.log(jog);