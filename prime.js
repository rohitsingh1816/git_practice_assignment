function prime(num){
let count=0;
for(i=1;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==2){
return true;
}
else {
return false;
}


let ans= prime(39)
if(ans==true){
console.log("prime");
}
else{
console.log("not prime")
}