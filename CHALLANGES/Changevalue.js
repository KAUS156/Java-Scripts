const arr=[20,7,4,9,67,98,90];
for(let i=0;i<arr.length;i++){
    let d=arr[i]/10;

arr[i]-=d;
}
console.log(arr);