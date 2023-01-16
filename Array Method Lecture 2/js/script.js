// Array Method ;
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num1 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// delete num[0]  //It delete the Value (do not) Change the Length 
// console.log(num)

// Concat Method; 
let new_aray = num.concat(num1) //[Join] (Two) or (More) Array Together
console.log(new_aray)


// Sort Method; 
// Compare Function Important;
let Compare = (b,c)=>{
    return b- c //Descending order
    // return c-b //Ascending order
}
let a = [78, 99, 4, 34, 1, 0, 56, 555, 45, 200]
a.sort(Compare) //it (sort) or (Modifies)  the Array
console.log(a)

//Splice & Slice; Very Important.

// Splice method ;
let d = [78, 99, 4, 34, 1, 0, 56, 555, 45, 200]
d.splice(2,3,1001,2002,3003) //Add Value any where in the Array 
console.log(d)

//We can also Print Deleted VAlue;
// let deletedValues=d.splice(2,3,1001,2002,3003)
// console.log(deletedValues)

//Slice method;
let x= [78, 99, 4, 34, 1, 0, 56, 555, 45, 200]
let newarray=x.slice(3,5) //First index & Second index
console.log(newarray)