let number;
let inputContent;
let ans=[];
let final;
let sign;
let real;
const inp=document.querySelector(`input`);
grabElement =(number)=>{ 
if(number>0||number<0){
this.number=number ;
inp.value+=number;
real=inp.value;
} else{
sign=number;
inp.value+=sign;
 }
};
addToArray=(oper)=>{
    ans.push(real);
};
display =()=>{
inp.value ="";
ans.push(real);
final =ans[ans.length-1] ;
final = eval(final);
inp.value = final;
   };
Delete=()=>{
    inp.value ="";
}
