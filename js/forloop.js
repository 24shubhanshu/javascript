let num =[1,32,2,2,3,4];
// for(let i=0;i<=num.length;i++)
// {
//     console.log(num[i]);
// }

// num.forEach((element)=>{
//     console.log(element*element)
// })

// let name='shubh';
// let arr=Array.from(name)
// console.log(arr);


// for(let i of num){
//     console.log(i)
// }

// for(let i in num){
//     console.log(i);
// }
// let a=num.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value+1;
// })
// console.log(a);

// let a2=num.filter((value)=>{
//     return value<5
// })
// console.log(a2)

let a=num.reduce((h1,h2)=>
{
    return h1+h2
})
console.log(a)


