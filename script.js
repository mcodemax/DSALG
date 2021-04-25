//solve the easier problem of finding the 1st zero, then solve the next step of counting them all

function countZeroes(arr){
    if(findfirstzero(arr) !== -1) 
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


function sortFrequency(arr, num){
    //find first index
    //find 2nd
    //subtract them and return it.
    //return -1 if the number not found there
}

function findFirstTarg(arr, targ, first = 0, last = arr.length - 1){
    if(first <= last){
        let mid = Math.floor((first + last)/2);
     
        if((mid === 0 || arr[mid - 1] < targ) && arr[mid] === targ ){//cond to return the index targ was found, arr[mid] ===targ must ALWAys be true
            return mid;
        }else if(arr[mid] < targ){//ignore left eles
            return findFirstTarg(arr, targ, mid + 1, last)
        }else{//(arr[mid] > targ)  //ignore right eles
            return findFirstTarg(arr, targ, first, mid - 1)
        }
    }
    return -1;
}

function findlastTarg(arr, targ, first = 0, last = arr.length - 1){
    if(first <= last){
        let mid = Math.floor((first + last)/2);
     
        if((mid === arr.length - 1 || arr[mid + 1] > targ) && arr[mid] === targ ){//cond to return the index targ was found, arr[mid] ===targ must ALWAys be true
            return mid;
        }else if(arr[mid] < targ){//filter out eles to the left
            return findlastTarg(arr, targ, mid + 1, last)
        }else{//(arr[mid] > targ)  //ignore right eles
            return findlastTarg(arr, targ, first, mid - 1)
        }
    }
    return -1;
}
