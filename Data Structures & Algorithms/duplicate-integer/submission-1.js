class Solution {
    hasDuplicate(nums ){
let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            return true
        }
        map[nums[i]] = i
    }
     return false
    }
}

