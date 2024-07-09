var searchid=12;
let data=[
    {id:1,name:"John"},
    {id:2,name:"Jane"},
    {id:3,name:"Bob"},
    {id:4,name:"Alice"},
    {id:5,name:"Mike"},
    {id:6,name:"Sarah"},
    {id:7,name:"Emily"},
    {id:8,name:"Tom"},
    {id:9,name:"Lily"},
    {id:10,name:"David"},
    {id:11,name:"Oliver"},
    {id:12,name:"Benjamin"},
    {id:13,name:"Hannah"},
    {id:14,name:"Lucas"},
    {id:15,name:"Eva"}
]

for(i=0;i<data.length;i++){
    if(searchid==data[i]['id']){
        console.log(`Found: ${data[i]['id']} and name is : ${data[i]['name']}`)
    }
}