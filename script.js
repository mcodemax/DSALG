//solve the easier problem of finding the 1st zero, then solve the next step of counting them all

function countZeroes(arr){
    if(findfirstzero(arr)) 
        return arr.length - findfirstzero(arr);

    return 0;
}

/** find the index of the first zero in the array. */
function findfirstzero(arr, first = 0, last = arr.length - 1){
    let mid = Math.floor((first + last) / 2);
    if(first <= last){  //arr[mid] === 0 ignores right of arr.... 
        
        //we return mid below
        if(arr[mid] === 0 && (arr[mid - 1] === 1 || mid === 0)){//if the mid of arr is 0, AND (the left spot is 1 OR the mid is the 1st ele in arr) 
            //if the mid index is 0 and it's value is 0 we can return mid 
            
            return mid;
        }
        if(arr[mid] === 0 /*&& arr[mid + 1] === 0 || arr[mid + 1] === 1*/){//if logic satisfied, ignore the right of the array
            //what condition do we return something?
            last = mid - 1;
            
            //if the middle of the arr contains a 0 call itself
            return findfirstzero(arr, first, last);
    
        }
        if(arr[mid] === 1){//if logic satisfied ignore left of array, done
            first = mid + 1;
            return findfirstzero(arr, first, last);
        }
        
    }
    return -1; //if we never find a zero
}
//[1, 0(ind of 1)... length - 1]//

//length is length - index#
//[1,1,1]

//[0,0,1]

//countZeroes([1,1,1,1,0,0]) // 