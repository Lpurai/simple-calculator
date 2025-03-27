let number;
let inputContent;
let ans=[];
let final;
let sign;
const inp=document.querySelector(`input`);
grabElement =(number)=>{  
this.number=number ;
inputContent=number;
inp.value+=inputContent; 
};
display =()=>{
    math = `ans[ans.length-1] ${sign} Number(inp.value)`;
    final = eval(math);
    inp.value = final;  
};
arrayAdd=(oper)=>{
    ans.push(Number(inp.value));
    inp.value=""; 
    sign=oper;
};
Delete=()=>{
    inp.value ="";
}
