/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 補完数 現在のループとターゲットの差
    const complement = target - nums[i];

    // ハッシュテーブルに補完数あればインデックスの配列を返す
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }

  return [];
}
// @lc code=end
