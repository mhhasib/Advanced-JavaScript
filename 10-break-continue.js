
const nums = [10,11,12,13,14,15,16];

for(let i = 0; i<nums.length; i++){
    console.log(nums[i]);
}


const nums2 = [10,11,12,13,14,15,16];

for(let i = 0; i<nums2.length; i++){
    
    if( nums2[i]>14 ){
        break;
    }

    console.log('2.', nums2[i], [i]);
}



//  continue skip condition values

const nums3 = [1, 2, -3, -4, -6, -5, 8];

for(let i = 0; i<nums3.length; i++){
    
    if( nums3[i] < 0 ){
        continue;
    }

    console.log('3.', nums3[i], [i]);
}