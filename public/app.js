var result = document.getElementById("result");

function getNum(num){
result.value += num;
}
function getOpr(opr){
    result.value += opr
}
// function errorCheck(){
    
//     try{
//         result.value = eval(result.value);
//     }
//     catch(err){
// alert("invalid")
//     }
// }
 
  

function getResult(){
    try{
        var a= result.value
        a= eval(a);
        result.value = a
    }
catch(err){
    alert("invalid")
}
}
function clearAll(){
result.value = ""

}
function removeOne(){
var newStr = result.value.slice(0,-1)
result.value = newStr
}