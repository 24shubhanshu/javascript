const todos=[  //its a array conatining object
    {
        id: 1,
    text:'takeout trash',
    iscompleted:true
    },
    {
        id: 2,
    text:'meeting',
    iscompleted:true},
    {
        id: 3,
    text:'busy',
    iscompleted:false
},
];
// console.log(todos);
// console.log(todos[1]);
// console.log(todos[1].text);



// for(let i=0;i<todos.length;i++)
// {
//     console.log(todos[i].text);
// }

for( let todo of todos)
{
    console.log(todo.text);
    console.log(todo.id);
}
