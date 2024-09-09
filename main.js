function removeEvreyOther(arr){
    let result=[];
    for(i=0 ; i<arr.length ; i+=2){
        result.push(arr[i]);
    }
    return result;
}