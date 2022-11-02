
function prime(num){
let count=0;
for(i=0;i<=num;i++){
if(num%i==0){
count++;}
}
if(count==2){
return true;}
else {return false}
}

let ans= prime(13)
if(ans==true){
console.log(num,"is prime")}
else{console.log(num,"is not prime")}