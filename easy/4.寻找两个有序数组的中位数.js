/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 * 给定两个大小为 m 和 n 的有序数组 `nums1` 和 `nums2`。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 `nums1` 和 `nums2` 不会同时为空。

示例 1:
 > nums1 = [1, 3]
 > nums2 = [2]
 > 则中位数是 2.0

示例 2:
 > nums1 = [1, 2]
 > nums2 = [3, 4]
 > 则中位数是 (2 + 3)/2 = 2.5
 */
// 运用归并排序思想，先将两个有序数组合成一个有序数组。再根据题意返回中位数。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sortArr = []
  let i = 0, j = 0
  while(i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      sortArr.push(nums1[i++])
    } else {
      sortArr.push(nums2[j++])
    }
  }
  while(i < nums1.length) {
    sortArr.push(nums1[i++])
  }
  while(j < nums2.length) {
    sortArr.push(nums2[j++])
  }
  const len = sortArr.length
  if (len % 2 === 0) {
    return (sortArr[len / 2] + sortArr[len / 2 - 1]) / 2
  } else {
    return sortArr[Math.floor(len / 2)]
  }
};

