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

    //find first index
    //find 2nd index
    //subtract them and return it.
    //return -1 if the number not found there
function sortedFrequency(arr, num){
    if(findFirstTarg(arr, num) !== -1){
        return findlastTarg(arr, num) - findFirstTarg(arr, num) + 1;
    }else{
        return -1;
    }
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
        }else if(arr[mid] <= targ){//filter out eles to the right
            //if arr[mid] is too small, make first = (mid + 1)
            return findlastTarg(arr, targ, mid + 1, last)
        }else{//(arr[mid] >= targ && not at the end of the arr)  //ignore left eles
            //if arr[mid] is too big, make last = mid - 1
            return findlastTarg(arr, targ, first, mid - 1)
        }// problem is hard, pay attn to how all if's relate to each other when solving
    }
    return -1;
}



function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      //(we hit end of the arr  OR  if not at the end,if we go father numbers get too big) &&  we found the target
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num >= arr[mid]) {//refactored from solution; works
        //if arr[mid] is too small, ignore left side of arr, by making first =  (mid + 1)
        return findLast(arr, num, mid + 1, high)
      } else {
        return findLast(arr, num, low, mid - 1)
      }
    }
    return -1
  }

function findRotatedInde(arr, num){
    //accept rotated arr of sorted #'s,,, and an integer
    //o: return index of num in arr


}

function findRotationCount(arr){//arr has nonrepeating #'s
    //simplified ver: compare values in arr, return an index at the arr's 1st point of rotation it's been rotated
    let first = 0;
    let last = arr.length - 1;


    while(first <= last){//maybe.
        let mid = Math.floor((first + last)/2);
        const prevind = (mid - 1 + arr.length) % arr.length;
        const nextind = (mid + 1) % arr.length;
        //case 1: if first ele < last ele; it is rotated , return firstind
        if(arr[first] < arr[last]){
            return first;
        }

        //below <= and >= needed to prevent infinite loops

        //case 2 (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1])
        if(arr[mid] <= arr[nextind] && arr[mid] <= arr[prevind]){
            console.log(prevind, nextind, mid)
            return mid;
        }//case 3, if mid of array is bigger than first
        else if(arr[mid] >= arr[first]){//arr's vals are distinct; there will be no repeat #'s so no need for <= or >=
            //arr[mid] > arr[first]    if mid ele is bigger than first ele in this statement then the pivot element(rotation pt) can't exist there b/c its already sorted; kill the left side
            first = mid + 1;
        }else if(arr[mid] <= arr[last]){//case 4 if mid of arr is 
            last = mid - 1; //if arr[mid] < arr[last], right half already sorted, pivot pt not there; kill right side
        }

            //[5,6,7,8,9,1,2,3,4] e.g. arr
    }
    return -1;
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4, infinite loop or something without <= and >=
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0, inifinite loop or something without <= and >=