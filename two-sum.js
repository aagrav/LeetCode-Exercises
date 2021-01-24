// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var solutions = [];
    for(var x = 0; x<nums.length; x++) {
        var complement = nums.indexOf(target-nums[x]);
        if(complement != -1 && complement !== x) {
            return [x,complement]            
        }
    }
    
};

//One pass array O(n)