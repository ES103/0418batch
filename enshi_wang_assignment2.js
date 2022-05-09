
const itemsObject = [
    {quantity: 1, price: 200},
    {quantity: 3, price: 350},
    {quantity: 5, price: 400},
];

//Q1
const double = (obj) => {
    newObj = {};
    newObj.quantity = obj.quantity*2;
    newObj.price =  obj.price*2;
    return newObj;
};
let newArr =itemsObject.map(double);
console.log(newArr);

// Q2
function fil(obj){
    return (obj.quantity >2 && obj.price >300);
//     if (obj.quantity >2 & obj.price >300)
     
//      return true;
//     else
//      return false;
}
let res2 = itemsObject.filter(fil);
console.log(res2);

//Q3
const sum = itemsObject.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  
  console.log(sum);

//Q4
const string =
' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

function newstr(str) {
	return str.replace(/[^a-zA-Z]/g," ").toLowerCase().trim()};

    console.log(newstr(string));

