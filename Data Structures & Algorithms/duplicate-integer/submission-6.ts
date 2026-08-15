class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const setNums = new Set(nums)
        console.log(nums, nums.length, 'nums')
        console.log(setNums.size, 'set')

        return !(setNums.size === nums.length)
    }
}
