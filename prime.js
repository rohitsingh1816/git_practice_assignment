function prime(num){
let count=1;
for(i=0;i<=num;i++){
if(num%i==0){
count++;}
}
if(count==1){
return true;}
else {return false}
}

let ans= prime(39)
if(ans==true){
console.log("prime")}
else{console.log("not prime")}