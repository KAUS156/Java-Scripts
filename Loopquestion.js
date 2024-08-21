let a=1234;
let rev=0;


while(a>0){
    let tem=a%10;
    rev=rev*10 +tem;
    a/=10;
    console.log(rev);
}

  
