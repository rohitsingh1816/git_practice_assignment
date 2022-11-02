function prime(number){
let counter=0;
for(i=1;i<=number;i++){
if(num%i==0){
counter++;}
}
if(counter==2){
return true;}
else {return false}
}

let ans= prime(13)
if(ans==true){
console.log("prime")}
else{console.log("not prime")}