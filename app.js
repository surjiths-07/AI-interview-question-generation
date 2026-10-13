// CodeGen AI - Single Page Application Logic (Stitch 4465903677797311403)

// =============================================================================
// 1. COMPREHENSIVE PROBLEMS DATASET
// =============================================================================
const PROBLEMS_DATA = [
  {
    id: 53,
    number: "53",
    title: "Maximum Subarray",
    difficulty: "Medium",
    topics: ["Dynamic Programming", "Divide & Conquer"],
    topicCategory: "Dynamic Programming",
    company: "Amazon",
    acceptance: "50.4%",
    status: "Attempted",
    description: `Given an integer array <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return <em class="text-primary not-italic font-semibold">its sum</em>.<br/><br/>A <strong class="text-on-surface">subarray</strong> is a contiguous part of an array.`,
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] has the largest sum = 6." },
      { input: "nums = [1]", output: "1", explanation: "Single element array." },
      { input: "nums = [5,4,-1,7,8]", output: "23", explanation: "All positive values yield total sum = 23." }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    visualizer: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    visualizerHighlight: [3, 4, 5, 6],
    hints: [
      "Have you considered Kadane's algorithm? Think about iterating through the array and keeping track of the current maximum subarray ending at the current position.",
      "Keep track of current subarray sum vs resetting. At every element x, decide whether to start fresh with x or extend previous accumulated sum with current_sum + x."
    ],
    codeTemplates: {
      python: `class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        # Kadane's Algorithm implementation
        max_so_far = nums[0]
        curr_max = nums[0]
        
        for x in nums[1:]:
            curr_max = max(x, curr_max + x)
            max_so_far = max(max_so_far, curr_max)
            
        return max_so_far`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let currMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
    }
    return maxSoFar;
}`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int currMax = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currMax = Math.max(nums[i], currMax + nums[i]);
            maxSoFar = Math.max(maxSoFar, currMax);
        }
        return maxSoFar;
    }
}`,
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSoFar = nums[0];
        int currMax = nums[0];
        for (size_t i = 1; i < nums.size(); ++i) {
            currMax = std::max(nums[i], currMax + nums[i]);
            maxSoFar = std::max(maxSoFar, currMax);
        }
        return maxSoFar;
    }
};`,
      go: `func maxSubArray(nums []int) int {
    maxSoFar := nums[0]
    currMax := nums[0]
    for _, x := range nums[1:] {
        if x > currMax + x {
            currMax = x
        } else {
            currMax = currMax + x
        }
        if currMax > maxSoFar {
            maxSoFar = currMax
        }
    }
    return maxSoFar
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Mixed positive & negative",
                "input": "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
                "expected": "6"
          },
          {
                "id": 2,
                "edgeCase": "Single element",
                "input": "[1]",
                "expected": "1"
          },
          {
                "id": 3,
                "edgeCase": "All positive values",
                "input": "[5, 4, -1, 7, 8]",
                "expected": "23"
          },
          {
                "id": 4,
                "edgeCase": "All negative values",
                "input": "[-8, -3, -6, -2, -5, -4]",
                "expected": "-2"
          },
          {
                "id": 5,
                "edgeCase": "All identical values",
                "input": "[3, 3, 3, 3, 3]",
                "expected": "15"
          },
          {
                "id": 6,
                "edgeCase": "Already sorted",
                "input": "[-5, -2, 0, 1, 4, 7]",
                "expected": "12"
          },
          {
                "id": 7,
                "edgeCase": "Reverse sorted",
                "input": "[9, 6, 2, -1, -4, -8]",
                "expected": "17"
          },
          {
                "id": 8,
                "edgeCase": "Minimum constraint size",
                "input": "[-10000]",
                "expected": "-10000"
          },
          {
                "id": 9,
                "edgeCase": "Duplicate values",
                "input": "[-2, 2, -2, 2, -2, 2]",
                "expected": "2"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint size",
                "input": "[100, -50, 200, -300, 400, 500, -100, 50]",
                "expected": "900"
          }
    ]
  },
  {
    id: 1,
    number: "1",
    title: "Two Sum",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Table", "Two Pointers"],
    topicCategory: "Two Pointers",
    company: "Google",
    acceptance: "52.4%",
    status: "Solved",
    description: `Given an array of integers <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">nums</code> and an integer <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">target</code>, return indices of the two numbers such that they add up to target.`,
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9, we return [0, 1]." }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"],
    visualizer: [2, 7, 11, 15],
    visualizerHighlight: [0, 1],
    hints: ["A really brute force way is searching for all pairs.", "Can you use a Hash Map to reduce search to O(1) time?"],
    codeTemplates: {
      python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, val in enumerate(nums):
            diff = target - val
            if diff in seen:
                return [seen[diff], i]
            seen[val] = i
        return []`,
      javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.has(comp)) return [map.get(comp), i];
        map.set(nums[i], i);
    }
    return [];
}`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int comp = target - nums[i];
            if (map.containsKey(comp)) return new int[] { map.get(comp), i };
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int comp = target - nums[i];
            if (seen.count(comp)) return {seen[comp], i};
            seen[nums[i]] = i;
        }
        return {};
    }
};`,
      go: `func twoSum(nums []int, target int) []int {
    seen := make(map[int]int)
    for i, num := range nums {
        comp := target - num
        if idx, ok := seen[comp]; ok {
            return []int{idx, i}
        }
        seen[num] = i
    }
    return nil
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Standard pair",
                "input": "nums = [2, 7, 11, 15], target = 9",
                "expected": "[0, 1]"
          },
          {
                "id": 2,
                "edgeCase": "Duplicate values",
                "input": "nums = [3, 3], target = 6",
                "expected": "[0, 1]"
          },
          {
                "id": 3,
                "edgeCase": "Minimum constraint size",
                "input": "nums = [3, 2, 4], target = 6",
                "expected": "[1, 2]"
          },
          {
                "id": 4,
                "edgeCase": "All negative values",
                "input": "nums = [-3, -4, -1, -7], target = -8",
                "expected": "[0, 3]"
          },
          {
                "id": 5,
                "edgeCase": "Zero target & values",
                "input": "nums = [0, 4, 3, 0], target = 0",
                "expected": "[0, 3]"
          },
          {
                "id": 6,
                "edgeCase": "Already sorted",
                "input": "nums = [1, 2, 3, 4, 5, 6], target = 11",
                "expected": "[4, 5]"
          },
          {
                "id": 7,
                "edgeCase": "Reverse sorted",
                "input": "nums = [9, 8, 7, 5, 2], target = 10",
                "expected": "[1, 4]"
          },
          {
                "id": 8,
                "edgeCase": "All identical values",
                "input": "nums = [5, 5, 5, 5], target = 10",
                "expected": "[0, 1]"
          },
          {
                "id": 9,
                "edgeCase": "Target with mixed signs",
                "input": "nums = [-10, 20, -30, 40], target = 10",
                "expected": "[0, 1]"
          },
          {
                "id": 10,
                "edgeCase": "Large random input",
                "input": "nums = [100, 250, 430, 890, 12, 7], target = 19",
                "expected": "[4, 5]"
          }
    ]
  },
  {
    id: 20,
    number: "20",
    title: "Valid Parentheses",
    difficulty: "Easy",
    topics: ["Strings", "Stack"],
    topicCategory: "Other",
    company: "General",
    acceptance: "41.2%",
    status: "In progress",
    description: `Given a string <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">s</code> containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
    examples: [
      { input: 's = "()[]{}"', output: "true", explanation: "Every bracket is closed in proper sequence." }
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only."],
    hints: ["An open bracket must be closed by the same type of bracket.", "Use a stack to keep track of openings."],
    codeTemplates: {
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {")": "(", "}": "{", "]": "["}
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        return not stack`,
      java: `class Solution {
    public boolean isValid(String s) {
        java.util.Stack<Character> stack = new java.util.Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Simple pair",
                "input": "s = \"()\"",
                "expected": "true"
          },
          {
                "id": 2,
                "edgeCase": "Multiple bracket types",
                "input": "s = \"()[]{}\"",
                "expected": "true"
          },
          {
                "id": 3,
                "edgeCase": "Mismatched pair",
                "input": "s = \"(]\"",
                "expected": "false"
          },
          {
                "id": 4,
                "edgeCase": "Single element",
                "input": "s = \"(\"",
                "expected": "false"
          },
          {
                "id": 5,
                "edgeCase": "Empty input",
                "input": "s = \"\"",
                "expected": "true"
          },
          {
                "id": 6,
                "edgeCase": "All identical values",
                "input": "s = \"((((\"",
                "expected": "false"
          },
          {
                "id": 7,
                "edgeCase": "Deeply nested",
                "input": "s = \"{[()()]}\"",
                "expected": "true"
          },
          {
                "id": 8,
                "edgeCase": "Interleaved incorrect order",
                "input": "s = \"([)]\"",
                "expected": "false"
          },
          {
                "id": 9,
                "edgeCase": "Only closing brackets",
                "input": "s = \")))\"",
                "expected": "false"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint size",
                "input": "s = \"()()()()()()()()()()\"",
                "expected": "true"
          }
    ]
  },
  {
    id: 56,
    number: "56",
    title: "Merge Intervals",
    difficulty: "Medium",
    topics: ["Arrays", "Sorting", "Greedy"],
    topicCategory: "Greedy",
    company: "Google",
    acceptance: "47.1%",
    status: "Not started",
    description: `Given an array of <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">intervals</code> where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Intervals [1,3] and [2,6] overlap, merged to [1,6]." }
    ],
    constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2"],
    hints: ["Try sorting the intervals by their start time.", "Once sorted, iterate and check if current start is <= previous end."],
    codeTemplates: {
      python: `class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key=lambda x: x[0])
        merged = []
        for interval in intervals:
            if not merged or merged[-1][1] < interval[0]:
                merged.append(interval)
            else:
                merged[-1][1] = max(merged[-1][1], interval[1])
        return merged`,
      java: `class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        java.util.Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        java.util.List<int[]> result = new java.util.ArrayList<>();
        int[] curr = intervals[0];
        result.add(curr);
        for (int[] interval : intervals) {
            if (interval[0] <= curr[1]) {
                curr[1] = Math.max(curr[1], interval[1]);
            } else {
                curr = interval;
                result.add(curr);
            }
        }
        return result.toArray(new int[result.size()][]);
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Overlapping intervals",
                "input": "[[1,3],[2,6],[8,10],[15,18]]",
                "expected": "[[1,6],[8,10],[15,18]]"
          },
          {
                "id": 2,
                "edgeCase": "Touching boundary",
                "input": "[[1,4],[4,5]]",
                "expected": "[[1,5]]"
          },
          {
                "id": 3,
                "edgeCase": "Single element",
                "input": "[[1,4]]",
                "expected": "[[1,4]]"
          },
          {
                "id": 4,
                "edgeCase": "Already sorted non-overlapping",
                "input": "[[1,2],[3,4],[5,6]]",
                "expected": "[[1,2],[3,4],[5,6]]"
          },
          {
                "id": 5,
                "edgeCase": "Reverse sorted input",
                "input": "[[8,10],[2,6],[1,3]]",
                "expected": "[[1,6],[8,10]]"
          },
          {
                "id": 6,
                "edgeCase": "Completely enclosed intervals",
                "input": "[[1,10],[2,3],[4,5],[6,7]]",
                "expected": "[[1,10]]"
          },
          {
                "id": 7,
                "edgeCase": "All identical values",
                "input": "[[2,2],[2,2],[2,2]]",
                "expected": "[[2,2]]"
          },
          {
                "id": 8,
                "edgeCase": "Zero point intervals",
                "input": "[[0,0],[1,4]]",
                "expected": "[[0,0],[1,4]]"
          },
          {
                "id": 9,
                "edgeCase": "Duplicate values",
                "input": "[[1,3],[1,3],[2,5]]",
                "expected": "[[1,5]]"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint size",
                "input": "[[1,2],[2,3],[3,4],[4,5],[5,6]]",
                "expected": "[[1,6]]"
          }
    ]
  },
  {
    id: 76,
    number: "76",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    topics: ["Sliding Window", "Hash Table", "Two Pointers"],
    topicCategory: "Two Pointers",
    company: "Meta",
    acceptance: "42.8%",
    status: "Not started",
    description: `Given two strings <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">s</code> and <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">t</code> of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: "The minimum window substring is 'BANC'." }
    ],
    constraints: ["m == s.length, n == t.length", "1 <= m, n <= 10^5"],
    hints: ["Use a two-pointer sliding window.", "Expand right until window is valid, then contract left to minimize."],
    codeTemplates: {
      python: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        from collections import Counter
        if not t or not s: return ""
        dict_t = Counter(t)
        required = len(dict_t)
        l, r = 0, 0
        formed = 0
        window_counts = {}
        ans = float("inf"), None, None
        while r < len(s):
            char = s[r]
            window_counts[char] = window_counts.get(char, 0) + 1
            if char in dict_t and window_counts[char] == dict_t[char]:
                formed += 1
            while l <= r and formed == required:
                char = s[l]
                if r - l + 1 < ans[0]:
                    ans = (r - l + 1, l, r)
                window_counts[char] -= 1
                if char in dict_t and window_counts[char] < dict_t[char]:
                    formed -= 1
                l += 1
            r += 1
        return "" if ans[0] == float("inf") else s[ans[1] : ans[2] + 1]`,
      java: `class Solution {
    public String minWindow(String s, String t) {
        if (s.length() == 0 || t.length() == 0) return "";
        int[] target = new int[128];
        for (char c : t.toCharArray()) target[c]++;
        int left = 0, minLen = Integer.MAX_VALUE, start = 0, count = t.length();
        for (int right = 0; right < s.length(); right++) {
            if (target[s.charAt(right)]-- > 0) count--;
            while (count == 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }
                if (++target[s.charAt(left++)] > 0) count++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Standard substring",
                "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
                "expected": "\"BANC\""
          },
          {
                "id": 2,
                "edgeCase": "Single element match",
                "input": "s = \"a\", t = \"a\"",
                "expected": "\"a\""
          },
          {
                "id": 3,
                "edgeCase": "Single element mismatch",
                "input": "s = \"a\", t = \"aa\"",
                "expected": "\"\""
          },
          {
                "id": 4,
                "edgeCase": "All identical values",
                "input": "s = \"aaaaaaa\", t = \"aaa\"",
                "expected": "\"aaa\""
          },
          {
                "id": 5,
                "edgeCase": "Entire string needed",
                "input": "s = \"ab\", t = \"ba\"",
                "expected": "\"ab\""
          },
          {
                "id": 6,
                "edgeCase": "Target longer than source",
                "input": "s = \"abc\", t = \"abcd\"",
                "expected": "\"\""
          },
          {
                "id": 7,
                "edgeCase": "Duplicate values in target",
                "input": "s = \"BBAAC\", t = \"ABA\"",
                "expected": "\"BAA\""
          },
          {
                "id": 8,
                "edgeCase": "Minimum constraint size",
                "input": "s = \"z\", t = \"z\"",
                "expected": "\"z\""
          },
          {
                "id": 9,
                "edgeCase": "Reverse sorted characters",
                "input": "s = \"FEDCBA\", t = \"ABC\"",
                "expected": "\"CBA\""
          },
          {
                "id": 10,
                "edgeCase": "Large random input",
                "input": "s = \"XYZABCDEFGHIJKLMN\", t = \"LMN\"",
                "expected": "\"LMN\""
          }
    ]
  },
  {
    id: 104,
    number: "104",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topics: ["Trees", "Depth-First Search", "Divide & Conquer"],
    topicCategory: "Divide & Conquer",
    company: "Apple",
    acceptance: "74.3%",
    status: "Solved",
    description: `Given the root of a binary tree, return its maximum depth. Maximum depth is the number of nodes along the longest path from root to farthest leaf node.`,
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3", explanation: "Height from 3 -> 20 -> 15 is 3." }
    ],
    constraints: ["The number of nodes in tree is in [0, 10^4]"],
    hints: ["Consider depth-first traversal.", "Depth of node = 1 + max(depth(left), depth(right))."],
    codeTemplates: {
      python: `class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`,
      java: `class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Balanced tree",
                "input": "root = [3,9,20,null,null,15,7]",
                "expected": "3"
          },
          {
                "id": 2,
                "edgeCase": "Single element",
                "input": "root = [1]",
                "expected": "1"
          },
          {
                "id": 3,
                "edgeCase": "Empty input",
                "input": "root = []",
                "expected": "0"
          },
          {
                "id": 4,
                "edgeCase": "Left skewed tree",
                "input": "root = [1,2,null,3,null,4,null]",
                "expected": "4"
          },
          {
                "id": 5,
                "edgeCase": "Right skewed tree",
                "input": "root = [1,null,2,null,3,null,4]",
                "expected": "4"
          },
          {
                "id": 6,
                "edgeCase": "All identical values",
                "input": "root = [2,2,2,2,2]",
                "expected": "3"
          },
          {
                "id": 7,
                "edgeCase": "Already sorted levels",
                "input": "root = [1,2,3,4,5,6,7]",
                "expected": "3"
          },
          {
                "id": 8,
                "edgeCase": "Two nodes tree",
                "input": "root = [1,null,2]",
                "expected": "2"
          },
          {
                "id": 9,
                "edgeCase": "Deep asymmetric tree",
                "input": "root = [1,2,3,null,4,null,null,null,5]",
                "expected": "4"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint size",
                "input": "root = [1..1000 nodes complete tree]",
                "expected": "10"
          }
    ]
  },
  {
    id: 127,
    number: "127",
    title: "Word Ladder",
    difficulty: "Hard",
    topics: ["Graphs", "BFS"],
    topicCategory: "Other",
    company: "Amazon",
    acceptance: "38.6%",
    status: "Not started",
    description: `A transformation sequence from word beginWord to endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter. Return the number of words in the shortest transformation sequence.`,
    examples: [
      { input: 'begin = "hit", end = "cog", list = ["hot","dot","dog","lot","log","cog"]', output: "5", explanation: '"hit" -> "hot" -> "dot" -> "dog" -> "cog"' }
    ],
    constraints: ["1 <= beginWord.length <= 10"],
    hints: ["Model the words as an unweighted graph where edges connect words differing by 1 char.", "Use standard BFS to find the shortest path."],
    codeTemplates: {
      python: `class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: list[str]) -> int:
        from collections import deque
        words = set(wordList)
        if endWord not in words: return 0
        queue = deque([(beginWord, 1)])
        while queue:
            word, length = queue.popleft()
            if word == endWord: return length
            for i in range(len(word)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    next_word = word[:i] + c + word[i+1:]
                    if next_word in words:
                        words.remove(next_word)
                        queue.append((next_word, length + 1))
        return 0`,
      java: `class Solution {
    public int ladderLength(String beginWord, String endWord, java.util.List<String> wordList) {
        java.util.Set<String> set = new java.util.HashSet<>(wordList);
        if (!set.contains(endWord)) return 0;
        java.util.Queue<String> queue = new java.util.LinkedList<>();
        queue.add(beginWord);
        int level = 1;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] chars = word.toCharArray();
                for (int j = 0; j < chars.length; j++) {
                    char orig = chars[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        chars[j] = c;
                        String next = new String(chars);
                        if (next.equals(endWord)) return level + 1;
                        if (set.remove(next)) queue.add(next);
                    }
                    chars[j] = orig;
                }
            }
            level++;
        }
        return 0;
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Standard ladder path",
                "input": "begin = \"hit\", end = \"cog\", words = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
                "expected": "5"
          },
          {
                "id": 2,
                "edgeCase": "End word not in list",
                "input": "begin = \"hit\", end = \"cog\", words = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
                "expected": "0"
          },
          {
                "id": 3,
                "edgeCase": "Single step transformation",
                "input": "begin = \"a\", end = \"c\", words = [\"a\",\"b\",\"c\"]",
                "expected": "2"
          },
          {
                "id": 4,
                "edgeCase": "No possible transformation path",
                "input": "begin = \"hot\", end = \"dog\", words = [\"hot\",\"dog\"]",
                "expected": "0"
          },
          {
                "id": 5,
                "edgeCase": "Minimum constraint size",
                "input": "begin = \"ab\", end = \"ac\", words = [\"ac\"]",
                "expected": "2"
          },
          {
                "id": 6,
                "edgeCase": "Multiple parallel shortest paths",
                "input": "begin = \"red\", end = \"tax\", words = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
                "expected": "4"
          },
          {
                "id": 7,
                "edgeCase": "Duplicate values in dictionary",
                "input": "begin = \"qa\", end = \"sq\", words = [\"si\",\"go\",\"se\",\"cm\",\"so\",\"ph\",\"mt\",\"sq\"]",
                "expected": "0"
          },
          {
                "id": 8,
                "edgeCase": "All identical values",
                "input": "begin = \"aaa\", end = \"aba\", words = [\"aba\"]",
                "expected": "2"
          },
          {
                "id": 9,
                "edgeCase": "Long transformation chain",
                "input": "begin = \"cold\", end = \"warm\", words = [\"cord\",\"card\",\"ward\",\"warm\"]",
                "expected": "5"
          },
          {
                "id": 10,
                "edgeCase": "Large word list",
                "input": "begin = \"sand\", end = \"acne\", words = [50 words list]",
                "expected": "11"
          }
    ]
  },
  {
    id: 146,
    number: "146",
    title: "LRU Cache",
    difficulty: "Hard",
    topics: ["Design", "Linked List"],
    topicCategory: "Other",
    company: "General",
    acceptance: "42.1%",
    status: "Not started",
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement get(key) and put(key, value) in O(1) average time complexity.`,
    examples: [
      { input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)', output: '[null,null,null,1,null,-1]', explanation: 'Evicts key 2 when inserting key 3.' }
    ],
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4"],
    hints: ["Use a Doubly Linked List paired with a Hash Map for O(1) removal and insertion."],
    codeTemplates: {
      python: `class Node:
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head, self.tail = Node(), Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._insert(node)
            return node.val
        return -1`,
      java: `class LRUCache {
    class Node {
        int key, val;
        Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }
    private final int capacity;
    private final java.util.Map<Integer, Node> map = new java.util.HashMap<>();
    private final Node head = new Node(0, 0), tail = new Node(0, 0);

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        remove(node);
        insert(node);
        return node.val;
    }
    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        if (map.size() == capacity) {
            map.remove(tail.prev.key);
            remove(tail.prev);
        }
        Node node = new Node(key, value);
        insert(node);
        map.put(key, node);
    }
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    private void insert(Node node) {
        node.next = head.next;
        node.next.prev = node;
        head.next = node;
        node.prev = head;
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Basic get & put eviction",
                "input": "cap = 2, put(1,1), put(2,2), get(1), put(3,3), get(2)",
                "expected": "[null, null, null, 1, null, -1]"
          },
          {
                "id": 2,
                "edgeCase": "Single element capacity",
                "input": "cap = 1, put(2,1), get(2), put(3,2), get(2), get(3)",
                "expected": "[null, null, 1, null, -1, 2]"
          },
          {
                "id": 3,
                "edgeCase": "Update existing key",
                "input": "cap = 2, put(1,1), put(1,10), get(1)",
                "expected": "[null, null, null, 10]"
          },
          {
                "id": 4,
                "edgeCase": "Evict oldest untouched key",
                "input": "cap = 2, put(1,1), put(2,2), put(3,3), get(1)",
                "expected": "[null, null, null, null, -1]"
          },
          {
                "id": 5,
                "edgeCase": "Frequent accesses renew key freshness",
                "input": "cap = 2, put(1,1), put(2,2), get(1), put(3,3), get(1), get(3)",
                "expected": "[null, null, null, 1, null, 1, 3]"
          },
          {
                "id": 6,
                "edgeCase": "Empty get queries",
                "input": "cap = 2, get(99)",
                "expected": "[-1]"
          },
          {
                "id": 7,
                "edgeCase": "All identical keys updated",
                "input": "cap = 3, put(5,1), put(5,2), put(5,3), get(5)",
                "expected": "[null, null, null, null, 3]"
          },
          {
                "id": 8,
                "edgeCase": "Minimum constraint size",
                "input": "cap = 1, get(1)",
                "expected": "[-1]"
          },
          {
                "id": 9,
                "edgeCase": "Repeated get calls on single key",
                "input": "cap = 2, put(1,5), get(1), get(1), get(1)",
                "expected": "[null, null, 5, 5, 5]"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint capacity",
                "input": "cap = 3000, operations = 1000 items",
                "expected": "All operations valid O(1)"
          }
    ]
  },
  {
    id: 200,
    number: "200",
    title: "Number of Islands",
    difficulty: "Medium",
    topics: ["Graphs", "Backtracking", "BFS/DFS"],
    topicCategory: "Backtracking",
    company: "Meta",
    acceptance: "58.2%",
    status: "Saved",
    description: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.`,
    examples: [
      { input: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', output: "2", explanation: "2 distinct islands." }
    ],
    constraints: ["m == grid.length, n == grid[i].length", "1 <= m, n <= 300"],
    hints: ["Iterate through each cell.", "When you hit '1', increment island count and DFS/BFS to sink connected lands to '0'."],
    codeTemplates: {
      python: `class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        if not grid: return 0
        rows, cols = len(grid), len(grid[0])
        count = 0
        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
                return
            grid[r][c] = '0'
            dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    count += 1
                    dfs(r, c)
        return count`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0;
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    dfs(grid, r, c);
                }
            }
        }
        return count;
    }
    private void dfs(char[][] grid, int r, int c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] != '1') return;
        grid[r][c] = '0';
        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Multiple separated islands",
                "input": "[[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
                "expected": "2"
          },
          {
                "id": 2,
                "edgeCase": "Single large contiguous island",
                "input": "[[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"1\",\"1\"]]",
                "expected": "1"
          },
          {
                "id": 3,
                "edgeCase": "All water (empty)",
                "input": "[[\"0\",\"0\"],[\"0\",\"0\"]]",
                "expected": "0"
          },
          {
                "id": 4,
                "edgeCase": "All land (single island)",
                "input": "[[\"1\",\"1\"],[\"1\",\"1\"]]",
                "expected": "1"
          },
          {
                "id": 5,
                "edgeCase": "Single element land",
                "input": "[[\"1\"]]",
                "expected": "1"
          },
          {
                "id": 6,
                "edgeCase": "Single element water",
                "input": "[[\"0\"]]",
                "expected": "0"
          },
          {
                "id": 7,
                "edgeCase": "Diagonal islands (non-adjacent)",
                "input": "[[\"1\",\"0\"],[\"0\",\"1\"]]",
                "expected": "2"
          },
          {
                "id": 8,
                "edgeCase": "Checkerboard pattern",
                "input": "[[\"1\",\"0\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
                "expected": "5"
          },
          {
                "id": 9,
                "edgeCase": "Single row grid",
                "input": "[[\"1\",\"0\",\"1\",\"1\",\"0\",\"1\"]]",
                "expected": "3"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint size grid",
                "input": "grid = 300x300 labyrinth",
                "expected": "42"
          }
    ]
  },
  {
    id: 236,
    number: "236",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    topics: ["Binary Tree", "Recursion", "Divide & Conquer"],
    topicCategory: "Divide & Conquer",
    company: "General",
    acceptance: "61.5%",
    status: "Not started",
    description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.`,
    examples: [
      { input: "root = [3,5,1,6,2,0,8], p = 5, q = 1", output: "3", explanation: "LCA of 5 and 1 is 3." }
    ],
    constraints: ["The number of nodes in tree is in range [2, 10^5]."],
    hints: ["Recursively search left and right subtrees.", "If root matches p or q, or both subtrees return non-null, root is LCA."],
    codeTemplates: {
      python: `class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == p or root == q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if left and right:
            return root
        return left if left else right`,
      java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null) return root;
        return left != null ? left : right;
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Ancestor in left and right branches",
                "input": "root = [3,5,1,6,2,0,8], p = 5, q = 1",
                "expected": "3"
          },
          {
                "id": 2,
                "edgeCase": "One node is ancestor of the other",
                "input": "root = [3,5,1,6,2,0,8], p = 5, q = 4",
                "expected": "5"
          },
          {
                "id": 3,
                "edgeCase": "Root is one of the target nodes",
                "input": "root = [1,2], p = 1, q = 2",
                "expected": "1"
          },
          {
                "id": 4,
                "edgeCase": "Nodes are sibling leaves",
                "input": "root = [1,2,3], p = 2, q = 3",
                "expected": "1"
          },
          {
                "id": 5,
                "edgeCase": "Minimum constraint size",
                "input": "root = [1,2], p = 2, q = 1",
                "expected": "1"
          },
          {
                "id": 6,
                "edgeCase": "Deep left branch descendants",
                "input": "root = [1,2,null,3,null,4,null], p = 3, q = 4",
                "expected": "3"
          },
          {
                "id": 7,
                "edgeCase": "Deep right branch descendants",
                "input": "root = [1,null,2,null,3,null,4], p = 2, q = 4",
                "expected": "2"
          },
          {
                "id": 8,
                "edgeCase": "All negative values in tree",
                "input": "root = [-1,-2,-3], p = -2, q = -3",
                "expected": "-1"
          },
          {
                "id": 9,
                "edgeCase": "Duplicate values in keys",
                "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 7, q = 8",
                "expected": "3"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint tree depth",
                "input": "root = 10^5 nodes, p = leaf_1, q = leaf_2",
                "expected": "LCA node index"
          }
    ]
  },
  {
    id: 322,
    number: "322",
    title: "Coin Change",
    difficulty: "Medium",
    topics: ["Dynamic Programming", "BFS"],
    topicCategory: "Dynamic Programming",
    company: "General",
    acceptance: "44.2%",
    status: "Not started",
    description: `You are given an integer array <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">coins</code> and an integer <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">amount</code>. Return the fewest number of coins that you need to make up that amount.`,
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1." }
    ],
    constraints: ["1 <= coins.length <= 12", "0 <= amount <= 10^4"],
    hints: ["Use dynamic programming where dp[i] is minimum coins to make amount i.", "dp[i] = min(dp[i - c] + 1) for all c in coins."],
    codeTemplates: {
      python: `class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] = min(dp[x], dp[x - coin] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        java.util.Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Standard optimal greedy failure",
                "input": "coins = [1, 2, 5], amount = 11",
                "expected": "3"
          },
          {
                "id": 2,
                "edgeCase": "Impossible amount",
                "input": "coins = [2], amount = 3",
                "expected": "-1"
          },
          {
                "id": 3,
                "edgeCase": "Zero amount required",
                "input": "coins = [1], amount = 0",
                "expected": "0"
          },
          {
                "id": 4,
                "edgeCase": "Single coin matches amount",
                "input": "coins = [5], amount = 5",
                "expected": "1"
          },
          {
                "id": 5,
                "edgeCase": "Single element coin array",
                "input": "coins = [1], amount = 100",
                "expected": "100"
          },
          {
                "id": 6,
                "edgeCase": "All identical coin values",
                "input": "coins = [2, 2, 2], amount = 6",
                "expected": "3"
          },
          {
                "id": 7,
                "edgeCase": "Reverse sorted coin denominations",
                "input": "coins = [25, 10, 5, 1], amount = 41",
                "expected": "4"
          },
          {
                "id": 8,
                "edgeCase": "Already sorted coin denominations",
                "input": "coins = [1, 5, 10, 25], amount = 30",
                "expected": "2"
          },
          {
                "id": 9,
                "edgeCase": "Large coin with small amount",
                "input": "coins = [10, 20, 50], amount = 5",
                "expected": "-1"
          },
          {
                "id": 10,
                "edgeCase": "Maximum constraint size",
                "input": "coins = [1, 7, 10], amount = 10000",
                "expected": "1000"
          }
    ]
  },
  {
    id: 175,
    number: "175",
    title: "Combine Two Tables",
    difficulty: "Easy",
    topics: ["Database", "SQL"],
    topicCategory: "Other",
    company: "Netflix",
    acceptance: "68.9%",
    status: "Solved",
    description: `Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present, report null instead.`,
    examples: [
      { input: "Person table + Address table", output: "Joined rows", explanation: "LEFT JOIN on personId." }
    ],
    constraints: ["personId is the primary key."],
    hints: ["Use a LEFT OUTER JOIN so that persons with no address are still included."],
    codeTemplates: {
      python: `# Write your MySQL query statement below:
SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a ON p.personId = a.personId;`,
      java: `// SQL query solution
/*
SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a ON p.personId = a.personId;
*/
class Solution {
    public String getQuery() {
        return "SELECT p.firstName, p.lastName, a.city, a.state FROM Person p LEFT JOIN Address a ON p.personId = a.personId;";
    }
}`
    },
    testCases: [
          {
                "id": 1,
                "edgeCase": "Matching address row present",
                "input": "Person(1, 'Allen', 'Wang'), Address(1, 1, 'NYC', 'NY')",
                "expected": "['Allen', 'Wang', 'NYC', 'NY']"
          },
          {
                "id": 2,
                "edgeCase": "Missing address row (NULL state)",
                "input": "Person(2, 'Bob', 'Alice'), Address(empty)",
                "expected": "['Bob', 'Alice', null, null]"
          },
          {
                "id": 3,
                "edgeCase": "Empty input tables",
                "input": "Person(empty), Address(empty)",
                "expected": "[]"
          },
          {
                "id": 4,
                "edgeCase": "Single element person table",
                "input": "Person(1, 'John', 'Doe'), Address(1, 1, 'Chicago', 'IL')",
                "expected": "['John', 'Doe', 'Chicago', 'IL']"
          },
          {
                "id": 5,
                "edgeCase": "All identical values in city/state",
                "input": "Person(1, 'A', 'B'), Person(2, 'C', 'D'), Address for both in ('Austin', 'TX')",
                "expected": "2 rows matched"
          },
          {
                "id": 6,
                "edgeCase": "Duplicate values in person names",
                "input": "Person(1, 'John', 'Smith'), Person(2, 'John', 'Smith')",
                "expected": "2 separate rows returned"
          },
          {
                "id": 7,
                "edgeCase": "Orphaned addresses without person",
                "input": "Person(1, 'Amy', 'Li'), Address(99, 99, 'LA', 'CA')",
                "expected": "Address ignored, NULL for Amy"
          },
          {
                "id": 8,
                "edgeCase": "Minimum constraint size",
                "input": "Person(1, 'A', 'B'), Address(empty)",
                "expected": "['A', 'B', null, null]"
          },
          {
                "id": 9,
                "edgeCase": "Reverse sorted person IDs",
                "input": "Person(10, 'Z', 'Y'), Person(5, 'M', 'N')",
                "expected": "Matched rows preserving person rows"
          },
          {
                "id": 10,
                "edgeCase": "Large random input tables",
                "input": "Person(500 records), Address(250 records)",
                "expected": "500 records with matched and null addresses"
          }
    ]
  },
  {
    id: 1001,
    number: "C-101",
    title: "What is a race condition and how do mutexes prevent it?",
    questionType: "Conceptual",
    difficulty: "Medium",
    topics: ["Operating Systems", "Concurrency", "Synchronization"],
    topicCategory: "Other",
    company: "Google",
    acceptance: "62.5%",
    status: "Not started",
    description: `Explain what a <strong class="text-on-surface">race condition</strong> is in concurrent programming, and how mutual exclusion locks (<strong class="text-primary">mutexes</strong>) are used to prevent them.<br/><br/>
Your answer should address:
<ul class="list-disc pl-5 space-y-1.5 mt-2 text-on-surface-variant font-body-md text-sm">
  <li>Definition of a race condition and what constitutes a <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">critical section</code>.</li>
  <li>How hardware primitives (e.g., atomic Test-and-Set, Compare-and-Swap) support mutex locks.</li>
  <li>Potential pitfalls when using mutexes (deadlock, priority inversion, lock contention) and how to mitigate them.</li>
  <li>Key differences between a mutex and a binary semaphore.</li>
</ul>`,
    modelAnswer: `### 1. Race Conditions & Critical Sections
A **race condition** occurs when two or more concurrent execution threads access shared mutable data simultaneously and at least one access is a write, causing the final execution outcome to depend unpredictably on the arbitrary interleaving of thread execution.

The segment of program code accessing the shared mutable resource is termed the **critical section**. To maintain data consistency, any synchronization solution must satisfy three requirements:
* **Mutual Exclusion**: At most one thread executes inside the critical section at any single instant.
* **Progress**: If no thread is inside the critical section and several request entry, the selection cannot be postponed indefinitely.
* **Bounded Waiting**: There must exist a bound on the number of times other threads enter after a given thread requests entry (avoiding starvation).

---

### 2. How Mutexes Prevent Race Conditions
A **mutex** (mutual exclusion lock) provides atomic ownership over a resource:
* **Acquisition (\`lock()\`)**: A thread attempts to take the lock. If available, ownership is granted and the gate closes. If unavailable, the requesting thread blocks (yielding CPU time slices) or spins until the holding thread releases it.
* **Release (\`unlock()\`)**: Upon exiting the critical section, the holding thread releases ownership, waking up one or more waiting threads.

Hardware enforces this atomicity using **atomic instructions** (such as Compare-And-Swap (\`CAS\`) or Test-And-Set) alongside memory barriers:
\`\`\`c
// Atomic spinlock acquisition pattern using hardware CAS
void acquire(atomic_int *lock) {
    int expected = 0;
    while (!atomic_compare_exchange_weak(lock, &expected, 1)) {
        expected = 0;
        // Spin or yield via Linux futex sys_futex()
    }
}

void release(atomic_int *lock) {
    atomic_store_explicit(lock, 0, memory_order_release);
}
\`\`\`

---

### 3. Common Concurrency Pitfalls
* **Deadlock**: Two or more threads are permanently blocked, each holding a lock the other requires. *Mitigation:* Global lock hierarchy ordering, or \`try_lock()\` with exponential backoff.
* **Priority Inversion**: A low-priority thread holds a lock required by a high-priority thread, but is preempted by medium-priority threads. *Mitigation:* Priority Inheritance Protocol.
* **Lock Contention**: Excessive threads competing for the same lock degrading throughput. *Mitigation:* Striped/fine-grained locking, lock-free queues, or read-write locks (\`shared_mutex\`).

---

### 4. Mutex vs. Binary Semaphore
| Dimension | Mutex | Binary Semaphore |
| :--- | :--- | :--- |
| **Ownership** | Strict ownership: Only the thread that locked can unlock. | No ownership: Any thread can post/signal to wake up another. |
| **Primary Intent** | Mutual exclusion around critical state. | Signaling, inter-thread synchronization, or event notification. |
| **Reentrancy** | Can be configured as recursive (\`recursive_mutex\`). | Non-reentrant; calling wait twice in the same thread deadlocks. |`
  },
  {
    id: 1002,
    number: "C-102",
    title: "Explain the bias-variance tradeoff",
    questionType: "Conceptual",
    difficulty: "Easy",
    topics: ["Machine Learning", "Supervised Learning", "Model Evaluation"],
    topicCategory: "Other",
    company: "Meta",
    acceptance: "74.1%",
    status: "Not started",
    description: `Explain the fundamental <strong class="text-on-surface">bias-variance tradeoff</strong> in supervised machine learning.<br/><br/>
Your answer should address:
<ul class="list-disc pl-5 space-y-1.5 mt-2 text-on-surface-variant font-body-md text-sm">
  <li>Mathematical decomposition of the Expected Mean Squared Error (MSE).</li>
  <li>The relationship between model complexity, high bias (<em class="text-primary not-italic font-semibold">underfitting</em>), and high variance (<em class="text-secondary not-italic font-semibold">overfitting</em>).</li>
  <li>Diagnostic indicators (training error vs. validation error curves).</li>
  <li>Concrete techniques to reduce bias vs. techniques to reduce variance.</li>
</ul>`,
    modelAnswer: `### 1. Mathematical Error Decomposition
In supervised learning with continuous target $y = f(x) + \\epsilon$ where $\\mathbb{E}[\\epsilon] = 0$ and $\\text{Var}(\\epsilon) = \\sigma^2$, the expected generalization error of a model $\\hat{f}(x)$ at point $x$ decomposes into three components:

$$\\mathbb{E}\\big[(y - \\hat{f}(x))^2\\big] = \\underbrace{\\text{Bias}[\\hat{f}(x)]^2}_{\\text{Model Assumptions}} + \\underbrace{\\text{Var}[\\hat{f}(x)]}_{\\text{Sensitivity to Data}} + \\underbrace{\\sigma^2}_{\\text{Irreducible Noise}}$$

Where:
* **Bias**: The difference between the expected prediction of our model and the correct true value: $\\text{Bias}[\\hat{f}(x)] = \\mathbb{E}[\\hat{f}(x)] - f(x)$.
* **Variance**: The variability of a model prediction for a given data point across different training sets: $\\text{Var}[\\hat{f}(x)] = \\mathbb{E}\\big[(\\hat{f}(x) - \\mathbb{E}[\\hat{f}(x)])^2\\big]$.
* **Irreducible Error ($\\\\sigma^2$)**: Unavoidable noise inherent in the data collection/measurement process.

---

### 2. Underfitting vs. Overfitting
* **High Bias (Underfitting)**:
  * The model makes strong, erroneous assumptions about the data structure (e.g., fitting a linear model to a quadratic dataset).
  * High training error **and** high test/validation error.
* **High Variance (Overfitting)**:
  * The model is excessively flexible and memorizes noise and statistical artifacts in the training data (e.g., unpruned deep decision trees).
  * Very low training error, but high/diverging test error.
* **Optimal Model Complexity**: Balances both components to minimize total expected test error.

---

### 3. Practical Remedies
* **Techniques to Reduce Bias (Combat Underfitting)**:
  * Increase model capacity (e.g., deeper neural networks, higher-degree polynomial features).
  * Add domain-specific engineered features or reduce feature filtering.
  * Decrease regularization penalties (lower $\\lambda$ in Ridge/Lasso).
* **Techniques to Reduce Variance (Combat Overfitting)**:
  * Gather additional training samples to generalize over the underlying distribution.
  * Regularization: Apply $L_1$ (Lasso), $L_2$ (Ridge/Weight Decay), or Dropout.
  * Ensemble methods: **Bagging** (Random Forests) explicitly reduces the variance of high-variance estimators by averaging multiple decorrelated bootstrap estimators.
  * Feature selection and dimensionality reduction (PCA, recursive feature elimination).`
  },
  {
    id: 1003,
    number: "C-103",
    title: "Virtual Memory, Paging, and Page Fault Handling",
    questionType: "Conceptual",
    difficulty: "Hard",
    topics: ["Operating Systems", "Memory Management", "Virtual Memory"],
    topicCategory: "Other",
    company: "Apple",
    acceptance: "48.3%",
    status: "Not started",
    description: `Explain how operating systems implement <strong class="text-on-surface">virtual memory</strong> via paging, and walk through the complete hardware and kernel lifecycle when a <strong class="text-primary">page fault</strong> occurs.<br/><br/>
Your answer should address:
<ul class="list-disc pl-5 space-y-1.5 mt-2 text-on-surface-variant font-body-md text-sm">
  <li>Virtual address translation: virtual page numbers (VPN), physical frame numbers (PFN), and the role of the MMU &amp; TLB.</li>
  <li>Multi-level page tables and spatial memory efficiency.</li>
  <li>Step-by-step exception handling pipeline when a page fault trap occurs.</li>
  <li>Page replacement policies (LRU, Clock/Second Chance) and thrashing conditions.</li>
</ul>`,
    modelAnswer: `### 1. Architectural Foundations of Paging
Virtual memory provides each process with an isolated, contiguous address space while mapping pages to arbitrary physical frames in RAM:
* A virtual address is partitioned into:
  $$\\text{Virtual Address} = [\\text{Virtual Page Number (VPN)} \\mid \\text{Page Offset}]$$
* The hardware **Memory Management Unit (MMU)** leverages a **Translation Lookaside Buffer (TLB)** (a high-speed associative hardware cache) to accelerate VPN $\\to$ PFN translation.
* **TLB Hit**: The physical address is constructed immediately in hardware: $[\\text{PFN} \\mid \\text{Offset}]$.
* **TLB Miss**: The MMU walks the hierarchical **Multi-Level Page Table** (e.g., PML4 $\\to$ PDP $\\to$ PD $\\to$ PT in x86-64) to locate the Page Table Entry (PTE).

---

### 2. Complete Page Fault Lifecycle
When an instruction accesses a virtual address whose PTE has its \`Present\` bit set to $0$, the CPU triggers a **Page Fault Exception (Trap #14 on x86)**:

1. **Hardware Exception**: The CPU pushes the program counter (\`RIP\`), flags, and error code to the kernel stack, saving the faulting virtual address in register \`CR2\`.
2. **Kernel Dispatch**: Control vectors into the kernel's architecture-specific fault handler (\`do_page_fault()\`).
3. **Address Validation**:
   * Kernel checks if the address falls within an allocated Virtual Memory Area (\`vm_area_struct\`).
   * *If invalid or permission violation:* kernel issues a \`SIGSEGV\` (Segmentation Fault).
   * *If valid:* legitimate demand-paging fault.
4. **Physical Frame Allocation**:
   * Kernel searches the free frame list. If memory is exhausted, the **Page Replacement Algorithm** (Clock/LRU) picks a victim frame to evict.
   * If the victim frame is marked **dirty**, its content is asynchronously written to disk/swap.
5. **Disk I/O / Backing Store Fetch**:
   * Kernel issues an I/O request to load the page from disk into the allocated frame.
   * The faulting thread transitions to the **Blocked / Waiting** state, allowing other processes to utilize the CPU.
6. **Update Page Table & TLB**:
   * Once disk read completes via interrupt, kernel updates the PTE with the newly allocated PFN, sets \`Present = 1\`, and clears dirty/access flags.
7. **Thread Resumed & Instruction Restart**:
   * The thread is returned to the **Ready** queue.
   * When scheduled, execution resumes by re-executing the identical instruction that previously faulted.

---

### 3. Thrashing & Working Set
* **Thrashing** occurs when the collective working sets of all active processes exceed physical RAM capacity, causing the operating system to spend virtually all cycles executing disk paging I/O rather than application code.
* **Remedies**: Working set estimation algorithms, dynamic page fault frequency (PFF) controls, or temporarily swapping out low-priority processes.`
  },
  {
    id: 1004,
    number: "C-104",
    title: "Self-Attention Mechanism and Transformer Architecture",
    questionType: "Conceptual",
    difficulty: "Medium",
    topics: ["Machine Learning", "Deep Learning", "Transformers", "NLP"],
    topicCategory: "Other",
    company: "Google",
    acceptance: "56.0%",
    status: "Not started",
    description: `Explain the <strong class="text-on-surface">Scaled Dot-Product Self-Attention</strong> mechanism at the core of the Transformer architecture.<br/><br/>
Your answer should address:
<ul class="list-disc pl-5 space-y-1.5 mt-2 text-on-surface-variant font-body-md text-sm">
  <li>Linear projections for Queries ($Q$), Keys ($K$), and Values ($V$).</li>
  <li>The mathematical formulation: $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$.</li>
  <li>Why the scaling factor $\\frac{1}{\\sqrt{d_k}}$ is essential.</li>
  <li>The motivation and mechanics of Multi-Head Attention (MHA).</li>
</ul>`,
    modelAnswer: `### 1. Conceptual Intuition: Queries, Keys, and Values
Self-attention maps input sequence vectors $X \\in \\mathbb{R}^{N \\times d_{\\text{model}}}$ into rich contextual representations by evaluating pairwise token interactions in parallel.
Trained linear projection matrices $W_Q, W_K, W_V \\in \\mathbb{R}^{d_{\\text{model}} \\times d_k}$ yield three matrices:
* **Query ($Q = X W_Q$)**: What each token seeks to discover or query from other positions.
* **Key ($K = X W_K$)**: What each token advertises or offers for matching.
* **Value ($V = X W_V$)**: The substantive contextual content to extract if a match occurs.

---

### 2. Mathematical Formulation
$$\\text{Attention}(Q, K, V) = \\text{Softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$

* **Raw Similarity Matrix ($QK^T$)**: Computes dot products across all Query and Key vectors, generating an $N \\times N$ matrix where position $(i, j)$ reflects raw affinity between token $i$ and token $j$.
* **Softmax Normalization**: Normalizes each row into a probability distribution summing to $1$, representing attention weights.
* **Weighted Value Aggregation**: Multiplies weights against $V$, synthesizing a customized contextual vector for each sequence position.

---

### 3. Purpose of the $\\\\frac{1}{\\\\sqrt{d_k}}$ Scaling Factor
Assuming components of $q$ and $k$ are independent random variables with zero mean and variance $1$:
* The dot product $q \\cdot k = \\sum_{i=1}^{d_k} q_i k_i$ has mean $0$ and variance $\\mathbf{d_k}$.
* For large values of $d_k$, dot products grow substantially in magnitude, pushing the Softmax function into saturation regions where gradients become vanishingly tiny (derivatives approach $0$).
* Dividing by $\\sqrt{d_k}$ rescales the variance back to $1.0$, preventing gradient vanishing during backpropagation.

---

### 4. Multi-Head Attention (MHA)
Instead of applying a single attention function, Multi-Head Attention projects $Q, K, V$ into $h$ distinct subspaces ($d_k = d_{\\text{model}} / h$):
$$\\text{MHA}(Q, K, V) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h) W_O$$

**Why MHA is vital**: A single head forces an average attention distribution across diverse relationships. Multi-Head Attention allows the model to simultaneously attend to information from different representation subspaces (e.g., syntactic grammar, coreference resolution, and semantic relationships) concurrently.`
  },
  {
    id: 1005,
    number: "C-105",
    title: "Process vs Thread and Context Switching Overhead",
    questionType: "Conceptual",
    difficulty: "Medium",
    topics: ["Operating Systems", "Processes", "Concurrency"],
    topicCategory: "Other",
    company: "Amazon",
    acceptance: "68.2%",
    status: "Not started",
    description: `Compare and contrast a <strong class="text-on-surface">process</strong> versus a <strong class="text-primary">thread</strong> in modern operating systems, detailing execution resources, memory sharing, and context-switching overhead.<br/><br/>
Your answer should address:
<ul class="list-disc pl-5 space-y-1.5 mt-2 text-on-surface-variant font-body-md text-sm">
  <li>Resource ownership: Process Control Block (PCB) vs. Thread Control Block (TCB).</li>
  <li>Virtual memory space: what is shared vs. what is private to each thread.</li>
  <li>Step-by-step cost analysis of a process context switch vs. a thread context switch.</li>
  <li>Inter-Process Communication (IPC) vs. thread synchronization tradeoffs.</li>
</ul>`,
    modelAnswer: `### 1. Core Differences & Resource Allocation
* **Process**: An executing program instance that owns private virtual memory, file descriptors, credentials, and system resources. Managed in the kernel via a **Process Control Block (PCB)**.
* **Thread**: The smallest schedulable execution unit (*lightweight process*). Multiple threads run within the boundary of a single parent process, sharing address space and system handles. Managed via a **Thread Control Block (TCB)**.

| Resource | Shared Across Threads of Process | Private Per Thread |
| :--- | :--- | :--- |
| **Address Space** | Code/Text, Data, Heap, BSS | None |
| **Execution State** | - | Program Counter (PC / RIP), General Purpose Registers |
| **Stack** | - | Call Stack & Local Variables |
| **OS Handles** | Open Files, Sockets, Signals, PID | Thread ID (TID), Thread-Local Storage (TLS) |

---

### 2. Context Switching Cost Analysis
A **context switch** freezes execution state of one entity and restores another:

#### A. Intra-Process Thread Context Switch (Low Overhead):
1. Save CPU registers (\`RSP\`, \`RIP\`, arithmetic registers) into the current TCB.
2. Update thread state in kernel scheduler (\`Running\` $\\to$ \`Ready\`).
3. Load registers from target TCB.
4. **Crucial Advantage**: The virtual address space remains identical. **No TLB invalidation occurs**, and L1/L2 hardware CPU caches remain warm.

#### B. Inter-Process Context Switch (High Overhead):
1. Save complete architectural register context into the active PCB.
2. **Switch Page Directory**: Reprogram the base page directory pointer register (e.g., \`CR3\` on x86).
3. **TLB Invalidation**: Switching \`CR3\` invalidates non-global TLB entries (unless PCID tags are used).
4. **Cache Miss Overhead**: Ensuing memory accesses suffer cache misses until L1/L2/L3 caches adapt to the new address space.
5. Restore registers from the incoming process PCB.

---

### 3. Isolation & Communication Tradeoffs
* **Processes (Fault Isolation & IPC)**: Robust isolation prevents memory corruption in one process from impacting others. Cross-process communication requires kernel IPC primitives (pipes, Unix domain sockets, shared memory with semaphores).
* **Threads (Speed vs. Safety)**: Near-instant communication via shared heap, but a single segmentation fault, wild pointer, or memory corruption in any thread crashes the entire application.`
  }
];

// Baseline metadata enrichment for source sites & scraping timestamps
const BASE_SITES = ["LeetCode", "HackerRank", "GeeksforGeeks", "InterviewBit", "Codeforces"];

// Task 2 Company Tagging: Exactly 5 specified companies or General
const VALID_COMPANIES = new Set([
  "Google",
  "Meta",
  "Amazon",
  "Apple",
  "Netflix",
  "General"
]);

// Task 1 Taxonomy: Exactly 5 algorithm categories + Other
const VALID_TAXONOMY_CATEGORIES = new Set([
  "Dynamic Programming",
  "Backtracking",
  "Greedy",
  "Divide & Conquer",
  "Two Pointers"
]);

PROBLEMS_DATA.forEach((p, idx) => {
  // Ensure questionType is set (default "Programming" for existing coding problems)
  if (!p.questionType) {
    p.questionType = "Programming";
  }
  // Normalize topicCategory strictly to 5 taxonomy values or Other
  if (!VALID_TAXONOMY_CATEGORIES.has(p.topicCategory)) {
    p.topicCategory = "Other";
  }
  // Normalize company strictly to 5 specified companies or General
  if (!VALID_COMPANIES.has(p.company)) {
    p.company = "General";
  }
  // Ensure sourceSite is assigned (e.g. LeetCode, HackerRank, GeeksforGeeks, InterviewBit, Codeforces)
  if (!p.sourceSite) {
    p.sourceSite = BASE_SITES[idx % BASE_SITES.length];
  }
  // Ensure all seeded test cases are verified: true
  if (p.testCases) {
    p.testCases.forEach(tc => {
      if (tc.verified === undefined) {
        tc.verified = true;
      }
    });
  }
  if (!p.addedAt) {
    if (idx === 0 || idx === 1) {
      // 2 newly added questions from background sync
      p.addedAt = new Date(Date.now() - (3 + idx * 0.2) * 3600 * 1000).toISOString();
      p.isNew = true;
    } else {
      p.addedAt = new Date(Date.now() - (24 + idx * 5) * 3600 * 1000).toISOString();
      p.isNew = false;
    }
  }
});

// Company Badge Generator with consistent, accessible color styling
function getCompanyBadge(company) {
  const comp = company || "General";
  let colorClasses = "";

  switch (comp) {
    case "Google":
      // Vibrant blue badge
      colorClasses = "bg-blue-500/15 text-blue-300 border border-blue-500/30";
      break;
    case "Meta":
      // Vibrant sky/cyan badge
      colorClasses = "bg-sky-500/15 text-sky-300 border border-sky-500/30";
      break;
    case "Amazon":
      // Vibrant amber/orange badge
      colorClasses = "bg-amber-500/15 text-amber-300 border border-amber-500/30";
      break;
    case "Apple":
      // Elegant silver/zinc badge
      colorClasses = "bg-zinc-500/15 text-zinc-200 border border-zinc-500/30";
      break;
    case "Netflix":
      // Distinct red/crimson badge
      colorClasses = "bg-red-500/15 text-red-300 border border-red-500/30";
      break;
    case "General":
    default:
      // Neutral gray badge for company-agnostic questions
      colorClasses = "bg-surface-container-high text-on-surface-variant/80 border border-surface-container-highest";
      break;
  }

  return `
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-semibold tracking-wide ${colorClasses}">
      ${comp}
    </span>
  `;
}

// Category Badge Generator with curated, accessible colors
function getCategoryBadge(category) {
  const cat = category || "Other";
  let colorClasses = "";
  let icon = "";

  switch (cat) {
    case "Dynamic Programming":
      colorClasses = "bg-purple-500/15 text-purple-300 border border-purple-500/30";
      icon = "data_object";
      break;
    case "Backtracking":
      colorClasses = "bg-amber-500/15 text-amber-300 border border-amber-500/30";
      icon = "alt_route";
      break;
    case "Greedy":
      colorClasses = "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30";
      icon = "trending_up";
      break;
    case "Divide & Conquer":
      colorClasses = "bg-sky-500/15 text-sky-300 border border-sky-500/30";
      icon = "call_split";
      break;
    case "Two Pointers":
      colorClasses = "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30";
      icon = "compare_arrows";
      break;
    case "Other":
    default:
      colorClasses = "bg-slate-500/15 text-slate-300 border border-slate-500/30";
      icon = "widgets";
      break;
  }

  return `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-xs font-semibold tracking-wide ${colorClasses} shadow-xs">
      <span class="material-symbols-outlined text-[14px]">${icon}</span>
      <span>${cat}</span>
    </span>
  `;
}

// Model Answer Markdown to Accessible HTML Formatter
function renderModelAnswerMarkdown(md) {
  if (!md) return "";

  // 1. Process code blocks ```lang ... ```
  let html = md.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const langDisplay = lang || "code";
    return `
      <div class="my-4 rounded-lg overflow-hidden border border-surface-container-high bg-[#060e20] shadow-sm">
        <div class="px-3.5 py-1.5 bg-surface-container text-[11px] text-on-surface-variant font-mono uppercase tracking-wider flex items-center justify-between border-b border-surface-container-high/60">
          <span>${langDisplay}</span>
          <span class="text-[10px] text-outline">Code Preview</span>
        </div>
        <pre class="p-4 font-mono text-[13px] leading-relaxed text-secondary overflow-x-auto selection:bg-primary-container"><code>${escapedCode.trim()}</code></pre>
      </div>
    `;
  });

  // 2. Process markdown tables
  html = html.replace(/((?:\|[^\n]+\|\n?)+)/g, (match) => {
    const lines = match.trim().split("\n");
    if (lines.length < 2) return match;
    const headerLine = lines[0];
    const separatorLine = lines[1];
    if (!separatorLine.includes("---")) return match;

    const headers = headerLine.split("|").slice(1, -1).map(h => h.trim());
    const headerHtml = `
      <thead class="bg-surface-container text-on-surface-variant font-label-sm text-xs uppercase tracking-wider border-b border-surface-container-high">
        <tr>${headers.map(h => `<th class="py-2.5 px-4 font-semibold">${h}</th>`).join("")}</tr>
      </thead>
    `;

    const bodyRows = lines.slice(2).map(row => {
      const cells = row.split("|").slice(1, -1).map(c => c.trim());
      return `
        <tr class="hover:bg-surface-container/40 border-b border-surface-container/60 transition-colors">
          ${cells.map(c => `<td class="py-2.5 px-4 font-body-md text-xs text-on-surface">${c}</td>`).join("")}
        </tr>
      `;
    }).join("");

    return `
      <div class="my-4 overflow-x-auto rounded-lg border border-surface-container-high shadow-xs">
        <table class="w-full text-left border-collapse bg-surface-container-low">
          ${headerHtml}
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
    `;
  });

  // 3. Process Section Headings (### and ##)
  html = html.replace(/^### (.*$)/gim, '<h3 class="font-headline-sm text-base md:text-lg font-bold text-on-surface mt-6 mb-2.5 flex items-center gap-2"><span class="w-1.5 h-4 rounded bg-primary"></span><span>$1</span></h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="font-headline-md text-lg md:text-xl font-bold text-on-surface mt-6 mb-3 flex items-center gap-2"><span class="w-2 h-5 rounded bg-secondary"></span><span>$1</span></h2>');

  // 4. Horizontal rules
  html = html.replace(/^---$/gim, '<hr class="my-5 border-surface-container-high/60" />');

  // 5. Math display blocks ($$...$$) and inline math ($...$)
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, '<div class="my-3 p-3 rounded-lg bg-surface-container/50 border border-surface-container-high/60 text-center font-mono text-primary text-xs md:text-sm overflow-x-auto">$1</div>');
  html = html.replace(/\$([^\$\n]+)\$/g, '<span class="font-mono text-primary font-semibold text-xs px-1 bg-surface-container rounded">$1</span>');

  // 6. Bold & Inline Code
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-on-surface font-semibold">$1</strong>');
  html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono text-xs">$1</code>');

  // 7. Bullet lists
  html = html.replace(/^\* (.*$)/gim, '<li class="flex items-start gap-2 text-on-surface-variant my-1.5"><span class="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span><span>$1</span></li>');
  html = html.replace(/(<li.*<\/li>\s*)+/g, '<ul class="my-2.5 pl-1 space-y-1">$&</ul>');

  // 8. Paragraphs
  html = html.split("\n\n").map(p => {
    p = p.trim();
    if (!p) return "";
    if (p.startsWith("<div") || p.startsWith("<h") || p.startsWith("<hr") || p.startsWith("<ul") || p.startsWith("<table")) {
      return p;
    }
    return `<p class="my-2 text-on-surface leading-relaxed">${p}</p>`;
  }).join("\n");

  return html;
}

// Active State in the application
const AppState = {
  currentView: "problems",
  activeProblem: PROBLEMS_DATA.find(p => p.id === 53),
  searchQuery: "",
  selectedTopic: "All",
  selectedCompany: "All",
  selectedDifficulty: "All",
  selectedStatus: "All",
  selectedQuestionType: "All",
  selectedProblemIds: new Set(),
  filterOnlyNew: false,
  editorLanguage: "python",
  isTimerRunning: true,
  timerSeconds: 14 * 60 + 32, // 14:32 initial
  timerInterval: null,
  submissionVerdict: "accepted",
  isBookmarked: false
};

// =============================================================================
// 1B. AUTHENTICATION & USER PROFILE LAYER
// =============================================================================
const AUTH_TOKEN_KEY = "codegen_auth_token";
const AUTH_USER_KEY = "codegen_auth_user";

let inMemoryAuthToken = null;
let inMemoryCurrentUser = null;

/**
 * Returns the current auth token from memory, localStorage, or cookie.
 */
function getAuthToken() {
  if (inMemoryAuthToken) return inMemoryAuthToken;
  try {
    const stored = localStorage.getItem(AUTH_TOKEN_KEY) || localStorage.getItem("auth_token") || localStorage.getItem("token");
    if (stored) {
      inMemoryAuthToken = stored;
      return stored;
    }
    const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + AUTH_TOKEN_KEY + '=([^;]*)'));
    if (match) {
      inMemoryAuthToken = decodeURIComponent(match[1]);
      return inMemoryAuthToken;
    }
  } catch (_) {}
  return null;
}

/**
 * Checks whether there is an active authenticated session.
 */
function isAuthenticated() {
  return Boolean(getAuthToken());
}

/**
 * Returns the current authenticated user's profile with `userId`, `email`, and `role` ("admin" | "user").
 * Returns `null` if the user is logged out (no valid auth token).
 */
function getCurrentUser() {
  if (!isAuthenticated()) {
    inMemoryCurrentUser = null;
    return null;
  }

  if (inMemoryCurrentUser) return inMemoryCurrentUser;

  let role = null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramRole = urlParams.get("role");
    if (paramRole) {
      const q = paramRole.trim().toLowerCase();
      if (q === "admin" || q === "true") role = "admin";
      else if (q === "user" || q === "false" || q === "regular") role = "user";
    }
  } catch (_) {}

  if (!role) {
    try {
      const storedRole = localStorage.getItem("codegen_user_role");
      if (storedRole === "admin" || storedRole === "user") role = storedRole;
    } catch (_) {}
  }

  try {
    const storedUserJson = localStorage.getItem(AUTH_USER_KEY);
    if (storedUserJson) {
      const parsed = JSON.parse(storedUserJson);
      if (parsed && parsed.email) {
        if (role) parsed.role = role;
        inMemoryCurrentUser = parsed;
        return inMemoryCurrentUser;
      }
    }
  } catch (_) {}

  if (!role) role = "admin";
  const user = {
    userId: "usr_9482_alex",
    name: "Alex Mercer",
    email: "alex.mercer@example.com",
    role: role,
    avatar: "AM",
    targetRole: role === "admin" ? "Platform Administrator" : "Software Engineer Candidate",
    level: "L4"
  };
  inMemoryCurrentUser = user;
  try {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  } catch (_) {}
  return user;
}

/**
 * Toggle or set the active user role ("admin" | "user").
 */
function setCurrentUserRole(newRole) {
  const normalized = (newRole || "").toLowerCase().trim();
  const validRole = normalized === "admin" ? "admin" : "user";

  try {
    localStorage.setItem("codegen_user_role", validRole);
  } catch (_) {}

  try {
    const url = new URL(window.location.href);
    url.searchParams.set("role", validRole);
    window.history.replaceState({}, "", url.toString());
  } catch (_) {}

  if (inMemoryCurrentUser) {
    inMemoryCurrentUser.role = validRole;
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(inMemoryCurrentUser));
    } catch (_) {}
  }

  updateAuthStateUI();
  applyRoleGating();

  showToast(`Switched user role to "${validRole}".`, "admin_panel_settings");
  announce(`User role switched to ${validRole}`);
}

/**
 * Authenticates user, stores token and user in storage, updates UI, and navigates into app.
 */
function login(credentials) {
  const { email = "alex.mercer@example.com", name = "", role = "admin" } = credentials || {};
  const token = "cga_token_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now().toString(36);

  let initials = "AM";
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/);
    initials = parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
  } else if (email) {
    const localPart = email.split("@")[0].replace(/[^a-zA-Z]/g, "");
    initials = (localPart.slice(0, 2) || "AM").toUpperCase();
  }

  const displayName = (name && name.trim()) ? name.trim() : email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  const user = {
    userId: "usr_" + Math.random().toString(36).substring(2, 8),
    name: displayName,
    email: email.trim(),
    role: role === "admin" ? "admin" : "user",
    avatar: initials,
    targetRole: role === "admin" ? "Platform Administrator" : "Software Engineer Candidate",
    level: "L4"
  };

  inMemoryAuthToken = token;
  inMemoryCurrentUser = user;

  try {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    localStorage.setItem("codegen_user_role", user.role);
    document.cookie = `${AUTH_TOKEN_KEY}=${encodeURIComponent(token)}; path=/; max-age=86400; SameSite=Lax`;
  } catch (_) {}

  updateAuthStateUI();
  navigateTo("problems");

  showToast(`Welcome back, ${user.name}!`, "verified_user");
  announce(`Signed in as ${user.email}`);
}

/**
 * Logs out user: deletes stored token, clears in-memory user cache, calls backend endpoint if available, and redirects to login screen.
 */
async function logout(options = {}) {
  const { reason = null, callBackend = true } = options;
  const currentToken = getAuthToken();

  // Call backend logout / token blacklist endpoint if available
  if (callBackend && currentToken) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1000);
      await originalFetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${currentToken}`
        },
        body: JSON.stringify({ token: currentToken }),
        signal: controller.signal
      }).catch(() => {});
      clearTimeout(timeoutId);
    } catch (_) {}
  }

  // Delete stored auth token and cached user from localStorage, cookies, sessionStorage
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem("token");
    localStorage.removeItem("auth_token");
    localStorage.removeItem(AUTH_USER_KEY);
    document.cookie = `${AUTH_TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
  } catch (_) {}

  // Clear in-memory cached user data
  inMemoryAuthToken = null;
  inMemoryCurrentUser = null;

  // Close avatar dropdown if open
  closeAvatarDropdown();

  // Update UI auth state to Logged Out
  updateAuthStateUI();

  // Redirect to login screen
  navigateTo("login");

  if (reason) {
    showToast(reason, "info");
  } else {
    showToast("Logged out successfully.", "logout");
  }
  announce("Logged out. Redirected to login screen.");
}

/**
 * Handles expired or invalid tokens (e.g. 401 response from any API).
 */
function handleUnauthorizedSession(message = "Session expired or invalid token (401). Please log in again.") {
  if (!isAuthenticated()) {
    navigateTo("login");
    return;
  }
  logout({ reason: message, callBackend: false });
  const banner = document.getElementById("auth-error-banner");
  const bannerText = document.getElementById("auth-error-banner-text");
  if (banner && bannerText) {
    bannerText.textContent = "Your session has expired (401). Please log in again.";
    banner.classList.remove("hidden");
  }
}

// Global fetch interceptor to catch any 401 Unauthorized API response
const originalFetch = window.fetch;
window.fetch = async function(...args) {
  try {
    const token = getAuthToken();
    if (token && args[1] && typeof args[1] === "object") {
      args[1].headers = args[1].headers || {};
      if (!args[1].headers["Authorization"] && !args[1].headers["authorization"]) {
        if (typeof args[1].headers.set === "function") {
          args[1].headers.set("Authorization", `Bearer ${token}`);
        } else {
          args[1].headers["Authorization"] = `Bearer ${token}`;
        }
      }
    }

    const response = await originalFetch.apply(this, args);
    if (response && response.status === 401) {
      handleUnauthorizedSession("Session expired or token invalid (401). Please log in again.");
    }
    return response;
  } catch (err) {
    throw err;
  }
};

// Simulation helper for developer & automated testing
window.simulate401 = () => {
  handleUnauthorizedSession("Simulated 401 Unauthorized response: logging out user.");
};

// Expose on window for easy developer & console testing
window.getCurrentUser = getCurrentUser;
window.setCurrentUserRole = setCurrentUserRole;
window.getAuthToken = getAuthToken;
window.isAuthenticated = isAuthenticated;
window.login = login;
window.logout = logout;
window.handleUnauthorizedSession = handleUnauthorizedSession;

/**
 * Updates UI header & mobile navigation based on authentication status.
 * - Logged out: show "Log in" and "Create account" buttons instead of avatar, hide app content behind login screen.
 * - Logged in: show avatar dropdown with email + Log out. Do not show Log in / Create account buttons.
 */
function updateAuthStateUI() {
  const isAuth = isAuthenticated();
  const user = getCurrentUser();

  const loggedOutHeader = document.getElementById("header-auth-logged-out");
  const loggedInHeader = document.getElementById("header-auth-logged-in");
  const desktopNav = document.getElementById("desktop-nav");
  const searchBtn = document.getElementById("btn-search-trigger");
  const devRoleBtn = document.getElementById("btn-dev-role-toggle");

  const mobileLoggedIn = document.getElementById("mobile-auth-logged-in");
  const mobileLoggedOut = document.getElementById("mobile-auth-logged-out");

  if (isAuth && user) {
    // LOGGED IN
    if (loggedOutHeader) {
      loggedOutHeader.classList.add("hidden");
      loggedOutHeader.style.display = "none";
    }
    if (loggedInHeader) {
      loggedInHeader.classList.remove("hidden");
      loggedInHeader.style.display = "flex";
    }
    if (desktopNav) {
      desktopNav.style.display = "";
    }
    if (searchBtn) {
      searchBtn.style.display = "";
    }
    if (devRoleBtn) {
      devRoleBtn.style.display = "";
    }

    // Avatar initials and dropdown content
    const avatarInitials = document.getElementById("header-avatar-initials");
    const dropdownAvatarBadge = document.getElementById("dropdown-avatar-badge");
    const dropdownUserName = document.getElementById("dropdown-user-name");
    const dropdownUserEmail = document.getElementById("dropdown-user-email");
    const dropdownUserRole = document.getElementById("dropdown-user-role-badge");

    const initials = user.avatar || "AM";
    if (avatarInitials) avatarInitials.textContent = initials;
    if (dropdownAvatarBadge) dropdownAvatarBadge.textContent = initials;
    if (dropdownUserName) dropdownUserName.textContent = user.name || "User";
    if (dropdownUserEmail) {
      dropdownUserEmail.textContent = user.email || "alex.mercer@example.com";
      dropdownUserEmail.title = user.email || "alex.mercer@example.com";
    }
    if (dropdownUserRole) {
      dropdownUserRole.textContent = (user.role || "user").toUpperCase();
      dropdownUserRole.className = `px-2 py-0.5 rounded font-mono text-[10px] uppercase font-bold ${
        user.role === "admin" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
      }`;
    }

    // Mobile drawer auth section
    if (mobileLoggedIn) mobileLoggedIn.classList.remove("hidden");
    if (mobileLoggedOut) mobileLoggedOut.classList.add("hidden");
    const mobileAvatarBadge = document.getElementById("mobile-avatar-badge");
    const mobileUserName = document.getElementById("mobile-user-name");
    const mobileUserEmail = document.getElementById("mobile-user-email");
    if (mobileAvatarBadge) mobileAvatarBadge.textContent = initials;
    if (mobileUserName) mobileUserName.textContent = user.name || "User";
    if (mobileUserEmail) mobileUserEmail.textContent = user.email || "alex.mercer@example.com";

    applyRoleGating();
  } else {
    // LOGGED OUT
    if (loggedOutHeader) {
      loggedOutHeader.classList.remove("hidden");
      loggedOutHeader.style.display = "flex";
    }
    if (loggedInHeader) {
      loggedInHeader.classList.add("hidden");
      loggedInHeader.style.display = "none";
    }
    if (desktopNav) {
      desktopNav.style.display = "none";
    }
    if (searchBtn) {
      searchBtn.style.display = "none";
    }
    if (devRoleBtn) {
      devRoleBtn.style.display = "none";
    }
    const syncBtn = document.getElementById("btn-open-sync-status");
    if (syncBtn) {
      syncBtn.style.display = "none";
      syncBtn.classList.add("hidden");
    }

    // Mobile drawer auth section
    if (mobileLoggedIn) mobileLoggedIn.classList.add("hidden");
    if (mobileLoggedOut) mobileLoggedOut.classList.remove("hidden");
  }
}

/**
 * Updates all Dev Role indicators and toggle button texts in the UI.
 */
function updateDevRoleUI(user) {
  const isAdmin = Boolean(user && user.role === "admin");
  const roleDisplay = isAdmin ? "ADMIN" : "USER";
  const targetRole = isAdmin ? "user" : "admin";

  // Desktop Header Dev Switcher
  const devLabel = document.getElementById("dev-role-label");
  const devDot = document.getElementById("dev-role-indicator");
  const devBtn = document.getElementById("btn-dev-role-toggle");
  if (devLabel) devLabel.textContent = roleDisplay;
  if (devDot) {
    devDot.className = `w-2 h-2 rounded-full ${isAdmin ? "bg-primary" : "bg-amber-400"}`;
  }
  if (devBtn) {
    devBtn.style.display = user ? "" : "none";
    devBtn.setAttribute("aria-label", `Current role: ${roleDisplay}. Click to switch to ${targetRole}`);
    devBtn.title = `Current role: ${roleDisplay}. Click to switch to ${targetRole} for GET /api/me testing`;
  }

  // Mobile Drawer Role Switcher
  const mobileDot = document.getElementById("mobile-dev-role-dot");
  const mobileText = document.getElementById("mobile-dev-role-text");
  if (mobileText) mobileText.textContent = roleDisplay;
  if (mobileDot) {
    mobileDot.className = `w-1.5 h-1.5 rounded-full ${isAdmin ? "bg-primary" : "bg-amber-400"}`;
  }

  // Dashboard Profile Hero Role Badge & Toggle
  const dashBadge = document.getElementById("dashboard-user-role-badge");
  const dashBtn = document.getElementById("btn-dashboard-toggle-role");
  if (dashBadge) {
    dashBadge.textContent = `ROLE: ${roleDisplay}`;
    dashBadge.className = `font-label-sm text-label-sm px-2 py-0.5 rounded font-mono tracking-wide uppercase ${
      isAdmin ? "bg-primary/20 text-primary" : "bg-amber-400/20 text-amber-300"
    }`;
  }
  if (dashBtn) {
    dashBtn.textContent = `Switch to ${targetRole.charAt(0).toUpperCase() + targetRole.slice(1)}`;
  }
}

/**
 * Gate Sync Status UI elements based on current user's role:
 */
function applyRoleGating() {
  const currentUser = getCurrentUser();
  const isAdmin = Boolean(currentUser && currentUser.role === "admin");

  // 1. Desktop Header Sync Launcher
  const btnOpen = document.getElementById("btn-open-sync-status");
  if (btnOpen) {
    if (isAdmin) {
      btnOpen.style.display = "";
      btnOpen.classList.remove("hidden");
      btnOpen.removeAttribute("aria-hidden");
    } else {
      btnOpen.style.display = "none";
      btnOpen.classList.add("hidden");
      btnOpen.setAttribute("aria-hidden", "true");
    }
  }

  // 2. Mobile Drawer Sync Launcher
  const btnMobileOpen = document.getElementById("btn-mobile-sync-status");
  const mobileSyncWrapper = document.getElementById("mobile-sync-wrapper");
  if (btnMobileOpen) {
    if (isAdmin) {
      btnMobileOpen.style.display = "";
      btnMobileOpen.classList.remove("hidden");
      btnMobileOpen.removeAttribute("aria-hidden");
      if (mobileSyncWrapper) mobileSyncWrapper.style.display = "";
    } else {
      btnMobileOpen.style.display = "none";
      btnMobileOpen.classList.add("hidden");
      btnMobileOpen.setAttribute("aria-hidden", "true");
      if (mobileSyncWrapper) mobileSyncWrapper.style.display = "none";
    }
  }

  // 3. Modal Direct-Access Controls ("Sync now" and entire sync history log)
  const btnManualSync = document.getElementById("btn-manual-sync");
  const syncHistorySection = document.getElementById("sync-history-section");
  const syncProgressBox = document.getElementById("sync-progress-box");
  const restrictedNotice = document.getElementById("sync-admin-restricted-notice");

  if (btnManualSync) {
    if (isAdmin) {
      btnManualSync.style.display = "";
      btnManualSync.classList.remove("hidden");
      btnManualSync.removeAttribute("aria-hidden");
    } else {
      btnManualSync.style.display = "none";
      btnManualSync.classList.add("hidden");
      btnManualSync.setAttribute("aria-hidden", "true");
    }
  }

  if (syncHistorySection) {
    if (isAdmin) {
      syncHistorySection.style.display = "";
      syncHistorySection.classList.remove("hidden");
      syncHistorySection.removeAttribute("aria-hidden");
    } else {
      syncHistorySection.style.display = "none";
      syncHistorySection.classList.add("hidden");
      syncHistorySection.setAttribute("aria-hidden", "true");
    }
  }

  if (syncProgressBox && !isAdmin) {
    syncProgressBox.classList.add("hidden");
  }

  if (restrictedNotice) {
    if (isAdmin) {
      restrictedNotice.classList.add("hidden");
      restrictedNotice.style.display = "none";
    } else {
      restrictedNotice.classList.remove("hidden");
      restrictedNotice.style.display = "flex";
    }
  }

  // 4. Update Dev Role UI Badges & Buttons across the app
  updateDevRoleUI(currentUser);

  // 5. If modal panel render function is available and modal is open, re-render
  if (typeof window.renderSyncPanelContent === "function") {
    window.renderSyncPanelContent();
  }
}

/**
 * Event wiring for dev role switcher buttons
 */
function initUserAuth() {
  const toggleBtn = document.getElementById("btn-dev-role-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = getCurrentUser();
      if (current) {
        setCurrentUserRole(current.role === "admin" ? "user" : "admin");
      }
    });
  }

  const mobileToggleBtn = document.getElementById("btn-mobile-role-toggle");
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", () => {
      const current = getCurrentUser();
      if (current) {
        setCurrentUserRole(current.role === "admin" ? "user" : "admin");
      }
    });
  }

  const dashToggleBtn = document.getElementById("btn-dashboard-toggle-role");
  if (dashToggleBtn) {
    dashToggleBtn.addEventListener("click", () => {
      const current = getCurrentUser();
      if (current) {
        setCurrentUserRole(current.role === "admin" ? "user" : "admin");
      }
    });
  }

  applyRoleGating();
}

/**
 * Avatar dropdown open / close / toggle helpers
 */
function openAvatarDropdown() {
  const dropdown = document.getElementById("user-avatar-dropdown");
  const avatarBtn = document.getElementById("btn-user-avatar");
  const caret = document.getElementById("header-avatar-caret");
  if (!dropdown) return;
  dropdown.classList.remove("hidden");
  if (avatarBtn) avatarBtn.setAttribute("aria-expanded", "true");
  if (caret) caret.style.transform = "rotate(180deg)";
}

function closeAvatarDropdown() {
  const dropdown = document.getElementById("user-avatar-dropdown");
  const avatarBtn = document.getElementById("btn-user-avatar");
  const caret = document.getElementById("header-avatar-caret");
  if (!dropdown) return;
  dropdown.classList.add("hidden");
  if (avatarBtn) avatarBtn.setAttribute("aria-expanded", "false");
  if (caret) caret.style.transform = "";
}

window.openAvatarDropdown = openAvatarDropdown;
window.closeAvatarDropdown = closeAvatarDropdown;

/**
 * Initializes User Avatar dropdown interactions (toggle, outside click, ESC, logout click)
 */
function initAvatarDropdown() {
  const avatarBtn = document.getElementById("btn-user-avatar");
  const dropdown = document.getElementById("user-avatar-dropdown");
  const logoutBtn = document.getElementById("btn-dropdown-logout");
  const mobileLogoutBtn = document.getElementById("btn-mobile-logout");

  if (avatarBtn) {
    avatarBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!dropdown) return;
      if (dropdown.classList.contains("hidden")) {
        openAvatarDropdown();
      } else {
        closeAvatarDropdown();
      }
    });
  }

  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    const container = document.getElementById("header-auth-logged-in");
    if (container && !container.contains(e.target)) {
      closeAvatarDropdown();
    }
  });

  // Close dropdown on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dropdown && !dropdown.classList.contains("hidden")) {
      closeAvatarDropdown();
      if (avatarBtn) avatarBtn.focus();
    }
  });

  // Log out button in desktop dropdown
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await logout();
    });
  }

  // Log out button in mobile drawer
  if (mobileLogoutBtn) {
    mobileLogoutBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await logout();
      closeMobileDrawer();
    });
  }
}

/**
 * Initializes Login and Register form, demo login shortcuts, and password toggle
 */
function initAuthForm() {
  const form = document.getElementById("auth-form");
  const tabLogin = document.getElementById("tab-auth-login");
  const tabRegister = document.getElementById("tab-auth-register");
  const nameGroup = document.getElementById("auth-name-group");
  const nameInput = document.getElementById("auth-input-name");
  const emailInput = document.getElementById("auth-input-email");
  const passwordInput = document.getElementById("auth-input-password");
  const submitBtn = document.getElementById("btn-auth-submit");
  const submitLabel = document.getElementById("auth-submit-label");
  const submitSpinner = document.getElementById("auth-submit-spinner");
  const errorBanner = document.getElementById("auth-error-banner");
  const errorBannerText = document.getElementById("auth-error-banner-text");
  const authTitle = document.getElementById("auth-main-title");
  const togglePassBtn = document.getElementById("btn-toggle-password-visibility");
  const passIcon = document.getElementById("icon-toggle-password");

  const btnHeaderLogin = document.getElementById("btn-header-login");
  const btnHeaderRegister = document.getElementById("btn-header-register");
  const btnMobileLogin = document.getElementById("btn-mobile-login");
  const btnMobileRegister = document.getElementById("btn-mobile-register");

  const quickAdmin = document.getElementById("btn-quick-login-admin");
  const quickUser = document.getElementById("btn-quick-login-user");

  function setMode(registerMode) {
    if (errorBanner) errorBanner.classList.add("hidden");
    if (registerMode) {
      if (tabRegister) {
        tabRegister.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-on-surface bg-surface-container-high shadow-sm transition-all text-center cursor-pointer";
        tabRegister.setAttribute("aria-selected", "true");
      }
      if (tabLogin) {
        tabLogin.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface transition-all text-center cursor-pointer";
        tabLogin.setAttribute("aria-selected", "false");
      }
      if (nameGroup) nameGroup.classList.remove("hidden");
      if (authTitle) authTitle.textContent = "Create your CodeGen account";
      if (submitLabel) submitLabel.textContent = "Create account";
    } else {
      if (tabLogin) {
        tabLogin.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-on-surface bg-surface-container-high shadow-sm transition-all text-center cursor-pointer";
        tabLogin.setAttribute("aria-selected", "true");
      }
      if (tabRegister) {
        tabRegister.className = "flex-1 py-1.5 px-3 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface transition-all text-center cursor-pointer";
        tabRegister.setAttribute("aria-selected", "false");
      }
      if (nameGroup) nameGroup.classList.add("hidden");
      if (authTitle) authTitle.textContent = "Sign in to CodeGen AI";
      if (submitLabel) submitLabel.textContent = "Log in";
    }
  }

  if (tabLogin) tabLogin.addEventListener("click", () => setMode(false));
  if (tabRegister) tabRegister.addEventListener("click", () => setMode(true));

  if (btnHeaderLogin) {
    btnHeaderLogin.addEventListener("click", () => {
      navigateTo("login");
      setMode(false);
    });
  }
  if (btnHeaderRegister) {
    btnHeaderRegister.addEventListener("click", () => {
      navigateTo("login");
      setMode(true);
    });
  }
  if (btnMobileLogin) {
    btnMobileLogin.addEventListener("click", () => {
      navigateTo("login");
      setMode(false);
      closeMobileDrawer();
    });
  }
  if (btnMobileRegister) {
    btnMobileRegister.addEventListener("click", () => {
      navigateTo("login");
      setMode(true);
      closeMobileDrawer();
    });
  }

  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener("click", () => {
      const isPass = passwordInput.getAttribute("type") === "password";
      passwordInput.setAttribute("type", isPass ? "text" : "password");
      if (passIcon) passIcon.textContent = isPass ? "visibility_off" : "visibility";
    });
  }

  if (quickAdmin) {
    quickAdmin.addEventListener("click", () => {
      login({
        email: "alex.mercer@example.com",
        name: "Alex Mercer",
        role: "admin"
      });
    });
  }
  if (quickUser) {
    quickUser.addEventListener("click", () => {
      login({
        email: "jordan.lee@example.com",
        name: "Jordan Lee",
        role: "user"
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (emailInput && emailInput.value ? emailInput.value.trim() : "");
      const password = (passwordInput && passwordInput.value ? passwordInput.value.trim() : "");
      const name = (nameInput && nameInput.value ? nameInput.value.trim() : "");

      if (!email || !email.includes("@")) {
        if (errorBanner && errorBannerText) {
          errorBannerText.textContent = "Please enter a valid email address.";
          errorBanner.classList.remove("hidden");
        }
        if (emailInput) emailInput.focus();
        return;
      }

      if (!password || password.length < 4) {
        if (errorBanner && errorBannerText) {
          errorBannerText.textContent = "Please enter a password (min 4 characters).";
          errorBanner.classList.remove("hidden");
        }
        if (passwordInput) passwordInput.focus();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (submitSpinner) submitSpinner.classList.remove("hidden");

      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (submitSpinner) submitSpinner.classList.add("hidden");

        const role = email.toLowerCase().includes("admin") ? "admin" : (localStorage.getItem("codegen_user_role") || "admin");
        login({
          email,
          name: name || (email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, l => l.toUpperCase())),
          role
        });
      }, 300);
    });
  }
}

// =============================================================================
// 2. DOM INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initUserAuth();
  initAvatarDropdown();
  initAuthForm();
  initRouter();
  initProblemsCatalog();
  initSolveWorkspace();
  initSubmissionResults();
  initDashboard();
  initSyncStatus();
  initQuickSearch();
  initDailyTimer();
  checkForBackgroundUpdates();
  updateAuthStateUI();
});

// =============================================================================
// 3. SINGLE PAGE ROUTER & NOTIFICATION TOAST
// =============================================================================
function announce(message) {
  const el = document.getElementById("aria-announcer");
  if (el) el.textContent = message;
}

function showToast(message, icon = "check_circle") {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  const iconEl = document.getElementById("toast-icon");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.add("show");
  announce(message);

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function navigateTo(viewId) {
  const isAuth = isAuthenticated();

  // Route protection: If logged out, only login view is accessible.
  // All Problems/Workspace/Results/Dashboard content remains hidden behind login.
  if (!isAuth && viewId !== "login") {
    viewId = "login";
  } else if (isAuth && viewId === "login") {
    viewId = "problems";
  }

  const views = {
    login: document.getElementById("view-login"),
    problems: document.getElementById("view-problems"),
    solve: document.getElementById("view-solve"),
    submission: document.getElementById("view-submission"),
    dashboard: document.getElementById("view-dashboard")
  };

  if (!views[viewId]) viewId = isAuth ? "problems" : "login";
  AppState.currentView = viewId;

  // Toggle active view classes
  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === viewId) {
        views[key].classList.add("active");
      } else {
        views[key].classList.remove("active");
      }
    }
  });

  // Update desktop header tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    const target = tab.getAttribute("data-nav");
    if (target === viewId) {
      tab.className = "nav-tab px-3.5 py-1.5 rounded-lg text-on-surface bg-surface-container font-medium transition-all flex items-center gap-1.5";
    } else {
      tab.className = "nav-tab px-3.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-1.5";
    }
  });

  // Update mobile drawer buttons
  document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
    const target = btn.getAttribute("data-nav");
    if (target === viewId) {
      btn.className = "mobile-nav-btn text-left px-3 py-2 rounded-lg text-on-surface bg-surface-container flex items-center gap-2";
    } else {
      btn.className = "mobile-nav-btn text-left px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface flex items-center gap-2";
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.location.hash = viewId;
  announce(`Switched to ${viewId} screen`);
  if (viewId === "problems") {
    updateSelectionUI();
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("mobile-backdrop");
  const panel = document.getElementById("mobile-panel");
  if (!drawer || !backdrop || !panel) return;
  backdrop.classList.add("opacity-0");
  panel.classList.add("translate-x-full");
  setTimeout(() => {
    drawer.classList.add("hidden");
  }, 200);
}

function openMobileDrawer() {
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("mobile-backdrop");
  const panel = document.getElementById("mobile-panel");
  if (!drawer || !backdrop || !panel) return;
  drawer.classList.remove("hidden");
  requestAnimationFrame(() => {
    backdrop.classList.remove("opacity-0");
    panel.classList.remove("translate-x-full");
  });
}

function initRouter() {
  // Global click delegator for elements with [data-nav]
  document.addEventListener("click", e => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      e.preventDefault();
      const targetView = navBtn.getAttribute("data-nav");
      if (!isAuthenticated() && targetView !== "login") {
        navigateTo("login");
        showToast("Please log in to access this screen.", "lock");
      } else {
        navigateTo(targetView);
      }
      closeMobileDrawer();
    }
  });

  // Check initial hash & auth state
  const isAuth = isAuthenticated();
  const initialHash = window.location.hash.replace("#", "");
  if (!isAuth) {
    navigateTo("login");
  } else if (["problems", "solve", "submission", "dashboard"].includes(initialHash)) {
    navigateTo(initialHash);
  } else {
    navigateTo("problems");
  }

  // Mobile Drawer toggling
  const btnMobile = document.getElementById("btn-mobile-menu");
  const btnCloseMobile = document.getElementById("btn-close-mobile");
  const backdrop = document.getElementById("mobile-backdrop");

  if (btnMobile) btnMobile.addEventListener("click", openMobileDrawer);
  if (btnCloseMobile) btnCloseMobile.addEventListener("click", closeMobileDrawer);
  if (backdrop) backdrop.addEventListener("click", closeMobileDrawer);
}

// =============================================================================
// 4. PROBLEMS CATALOG (Filtering, Searching & Rendering)
// =============================================================================
function getFilteredProblems() {
  const query = AppState.searchQuery.toLowerCase().trim();
  const selectedTopic = AppState.selectedTopic;
  const selectedCompany = AppState.selectedCompany;
  const selectedDiff = AppState.selectedDifficulty;
  const selectedStatus = AppState.selectedStatus;
  const selectedType = AppState.selectedQuestionType || "All";

  return PROBLEMS_DATA.filter(p => {
    // If filterOnlyNew is active, filter only new questions
    if (AppState.filterOnlyNew) {
      const isNewQuestion = p.isNew || (p.addedAt && (Date.now() - new Date(p.addedAt).getTime()) < 24 * 3600 * 1000);
      if (!isNewQuestion) return false;
    }

    // Question Type match ("Programming" / "Conceptual" / "All")
    const matchesType = selectedType === "All" || (p.questionType || "Programming") === selectedType;

    // Search query match (number, title, topic, company, or sourceSite)
    const matchesQuery = !query ||
      p.number.includes(query) ||
      p.title.toLowerCase().includes(query) ||
      (p.sourceSite && p.sourceSite.toLowerCase().includes(query)) ||
      (p.company && p.company.toLowerCase().includes(query)) ||
      p.topics.some(t => t.toLowerCase().includes(query));

    // Category match (exact match against 5 taxonomy categories or Other)
    const matchesTopic = selectedTopic === "All" || p.topicCategory === selectedTopic;

    // Company match (exact match against 5 companies or General)
    const matchesCompany = selectedCompany === "All" || p.company === selectedCompany;

    // Difficulty match
    const matchesDiff = selectedDiff === "All" || p.difficulty === selectedDiff;

    // Status match
    const matchesStatus = selectedStatus === "All" || p.status === selectedStatus;

    return matchesType && matchesQuery && matchesTopic && matchesCompany && matchesDiff && matchesStatus;
  });
}

function updateSelectionUI() {
  const bar = document.getElementById("selection-action-bar");
  const countText = document.getElementById("selection-count-text");
  const selectAll = document.getElementById("select-all-problems");

  const count = AppState.selectedProblemIds.size;

  // Update floating action bar visibility & count text
  if (bar && countText) {
    if (count > 0 && AppState.currentView === "problems") {
      countText.textContent = `${count} ${count === 1 ? "question" : "questions"} selected`;
      bar.classList.add("show");
    } else {
      bar.classList.remove("show");
    }
  }

  // Update table header select-all checkbox based on currently visible/filtered rows
  if (selectAll) {
    const filtered = getFilteredProblems();
    if (filtered.length === 0) {
      selectAll.checked = false;
      selectAll.indeterminate = false;
      selectAll.disabled = true;
    } else {
      selectAll.disabled = false;
      const selectedVisibleCount = filtered.filter(p => AppState.selectedProblemIds.has(p.id)).length;
      if (selectedVisibleCount === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
      } else if (selectedVisibleCount === filtered.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
      } else {
        selectAll.checked = false;
        selectAll.indeterminate = true;
      }
    }
  }
}

function downloadSelectedProblemsJSON() {
  const count = AppState.selectedProblemIds.size;
  if (count === 0) {
    showToast("No questions selected", "info");
    return;
  }

  // Build JSON array containing only selected problems' full data in dataset order
  const selected = PROBLEMS_DATA.filter(p => AppState.selectedProblemIds.has(p.id));

  const exportArray = selected.map(p => ({
    title: p.title,
    questionType: p.questionType || (p.codeTemplates ? "Programming" : "Conceptual"),
    difficulty: p.difficulty,
    topicCategory: p.topicCategory,
    company: p.company,
    description: p.description,
    ...(p.modelAnswer ? { modelAnswer: p.modelAnswer } : {}),
    examples: p.examples || [],
    constraints: p.constraints || [],
    testCases: p.testCases || [],
    codeTemplates: {
      python: p.codeTemplates?.python || "",
      java: p.codeTemplates?.java || ""
    }
  }));

  // Expose on window for easy verification/testing
  window.lastExportedJSON = exportArray;

  const jsonStr = JSON.stringify(exportArray, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const filename = `codegen-ai-export-${Date.now()}.json`;
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  showToast(`Downloaded ${exportArray.length} question${exportArray.length === 1 ? '' : 's'}`, "download_done");
  announce(`Downloaded ${exportArray.length} selected questions to ${filename}`);
}

function renderProblemsTable() {
  const tbody = document.getElementById("problem-rows");
  const countEl = document.getElementById("table-count");
  if (!tbody) return;

  const filtered = getFilteredProblems();

  // Update Question Type Toggle counts
  const progCount = PROBLEMS_DATA.filter(p => (p.questionType || "Programming") === "Programming").length;
  const concCount = PROBLEMS_DATA.filter(p => p.questionType === "Conceptual").length;
  const progCountEl = document.getElementById("count-qtype-programming");
  const concCountEl = document.getElementById("count-qtype-conceptual");
  const allCountEl = document.getElementById("count-qtype-all");
  if (progCountEl) progCountEl.textContent = progCount;
  if (concCountEl) concCountEl.textContent = concCount;
  if (allCountEl) allCountEl.textContent = PROBLEMS_DATA.length;

  // Toggle active 'New Questions' filter banner
  const bannerNew = document.getElementById("banner-new-filter");
  const bannerNewCount = document.getElementById("new-filter-count");
  if (bannerNew) {
    if (AppState.filterOnlyNew) {
      bannerNew.classList.remove("hidden");
      bannerNew.classList.add("flex");
      if (bannerNewCount) bannerNewCount.textContent = filtered.length;
    } else {
      bannerNew.classList.add("hidden");
      bannerNew.classList.remove("flex");
    }
  }

  tbody.innerHTML = "";

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="py-12 text-center text-on-surface-variant font-label-sm">
          <span class="material-symbols-outlined text-[32px] text-outline block mb-2">search_off</span>
          No problems match your current filter criteria.
        </td>
      </tr>
    `;
    if (countEl) countEl.textContent = `Showing 0 of ${PROBLEMS_DATA.length} problems`;
    updateSelectionUI();
    return;
  }

  filtered.forEach(p => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-surface-container/60 transition-colors group";

    // Difficulty Color class
    let diffColorClass = "text-primary";
    if (p.difficulty === "Medium") diffColorClass = "text-secondary";
    if (p.difficulty === "Hard") diffColorClass = "text-tertiary";

    // Status Pill
    let statusBadge = "";
    if (p.status === "Solved") {
      statusBadge = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-medium">
          <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
          Solved
        </span>
      `;
    } else if (p.status === "In progress") {
      statusBadge = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-medium">
          <span class="material-symbols-outlined text-[14px]">timelapse</span>
          In progress
        </span>
      `;
    } else if (p.status === "Attempted") {
      statusBadge = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-highest text-tertiary-fixed font-label-sm text-label-sm font-medium">
          <span class="material-symbols-outlined text-[14px]">replay</span>
          Attempted
        </span>
      `;
    } else if (p.status === "Saved") {
      statusBadge = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-medium">
          <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">bookmark</span>
          Saved
        </span>
      `;
    } else {
      statusBadge = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
          <span class="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
          Not started
        </span>
      `;
    }

    const isSelected = AppState.selectedProblemIds.has(p.id);

    tr.innerHTML = `
      <td class="py-3.5 px-4 text-center whitespace-nowrap">
        <label class="inline-flex items-center justify-center cursor-pointer min-w-[24px] min-h-[24px] p-1 -m-1" title="Select problem ${p.number}">
          <input type="checkbox" class="problem-checkbox w-4 h-4 rounded border-surface-container-high text-primary focus:ring-primary/40 bg-surface-container cursor-pointer accent-primary"
            data-problem-id="${p.id}" ${isSelected ? "checked" : ""} aria-label="Select problem ${p.number}. ${p.title}">
        </label>
      </td>
      <td class="py-3.5 px-4 whitespace-nowrap">${statusBadge}</td>
      <td class="py-3.5 px-4 font-medium text-on-surface">
        <div class="flex flex-col gap-0.5">
          <button data-solve-id="${p.id}" class="text-left hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
            <span>${p.number}. ${p.title}</span>
            ${p.questionType === "Conceptual"
              ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[10px] font-semibold tracking-wider"><span class="material-symbols-outlined text-[12px]">psychology</span>Conceptual</span>`
              : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[10px] font-semibold tracking-wider"><span class="material-symbols-outlined text-[12px]">code</span>Code</span>`
            }
            ${p.isNew ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">NEW</span>` : ""}
          </button>
          <span class="text-[12px] font-body-sm text-on-surface-variant/70 flex items-center gap-1">
            <span class="material-symbols-outlined text-[13px] text-outline">language</span>
            via ${p.sourceSite || "LeetCode"}
          </span>
        </div>
      </td>
      <td class="py-3.5 px-4 whitespace-nowrap">
        <span class="font-label-sm text-label-sm font-semibold ${diffColorClass}">${p.difficulty}</span>
      </td>
      <td class="py-3.5 px-4 whitespace-nowrap">
        ${getCompanyBadge(p.company)}
      </td>
      <td class="py-3.5 px-4 hidden md:table-cell">
        ${getCategoryBadge(p.topicCategory)}
      </td>
      <td class="py-3.5 px-4 text-right font-code-md text-code-md text-on-surface-variant tabular-nums font-mono">
        ${p.acceptance}
      </td>
      <td class="py-3.5 px-4 text-right whitespace-nowrap">
        <button data-solve-id="${p.id}" class="px-3.5 py-1 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-all">
          ${p.questionType === "Conceptual" ? "Study" : "Solve"}
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  if (countEl) {
    countEl.textContent = `Showing 1-${filtered.length} of ${PROBLEMS_DATA.length} problems`;
  }

  updateSelectionUI();
}

function initProblemsCatalog() {
  const searchInput = document.getElementById("problem-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      AppState.searchQuery = e.target.value;
      renderProblemsTable();
    });
  }

  // Clear 'New Questions' filter button
  const btnClearNew = document.getElementById("btn-clear-new-filter");
  if (btnClearNew) {
    btnClearNew.addEventListener("click", () => {
      AppState.filterOnlyNew = false;
      renderProblemsTable();
      showToast("Showing all problems", "list_alt");
    });
  }

  // Question Type Toggle buttons ("Programming" / "Conceptual" / "All")
  document.querySelectorAll(".qtype-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const qtype = btn.getAttribute("data-qtype");
      AppState.selectedQuestionType = qtype;

      document.querySelectorAll(".qtype-toggle-btn").forEach(b => {
        const isMatch = b.getAttribute("data-qtype") === qtype;
        b.setAttribute("aria-checked", isMatch ? "true" : "false");
        const badge = b.querySelector("span:last-child");
        if (isMatch) {
          b.className = "qtype-toggle-btn px-4 py-1.5 rounded-md font-label-sm text-label-sm font-semibold transition-all flex items-center gap-1.5 bg-primary-container text-on-primary-container shadow-sm";
          if (badge) badge.className = "ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-mono bg-primary/20 text-on-primary-container";
        } else {
          b.className = "qtype-toggle-btn px-4 py-1.5 rounded-md font-label-sm text-label-sm font-semibold transition-all flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface";
          if (badge) badge.className = "ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-mono bg-surface-container-highest text-on-surface-variant";
        }
      });

      renderProblemsTable();
      showToast(`Showing ${qtype} questions`, qtype === "Conceptual" ? "psychology" : (qtype === "Programming" ? "code" : "apps"));
      announce(`Filtered by question type: ${qtype}`);
    });
  });

  // Company Filter Dropdown (Task 2)
  const companySelect = document.getElementById("company-filter");
  if (companySelect) {
    companySelect.addEventListener("change", e => {
      AppState.selectedCompany = e.target.value;
      renderProblemsTable();
      if (AppState.selectedCompany !== "All") {
        announce(`Filtered problems by company: ${AppState.selectedCompany}`);
      }
    });
  }

  // Category Tab Bar filter buttons
  document.querySelectorAll(".topic-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".topic-filter-btn").forEach(b => {
        b.className = "topic-filter-btn px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-all whitespace-nowrap";
        b.setAttribute("aria-selected", "false");
      });
      btn.className = "topic-filter-btn px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold transition-all whitespace-nowrap shadow-sm";
      btn.setAttribute("aria-selected", "true");
      AppState.selectedTopic = btn.getAttribute("data-topic");
      renderProblemsTable();
    });
  });

  // Difficulty filter buttons
  document.querySelectorAll(".diff-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".diff-btn").forEach(b => {
        b.className = "diff-btn px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm transition-colors";
      });
      btn.className = "diff-btn px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold transition-colors";
      AppState.selectedDifficulty = btn.getAttribute("data-diff");
      renderProblemsTable();
    });
  });

  // Status filter buttons
  document.querySelectorAll(".status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".status-btn").forEach(b => {
        b.className = "status-btn px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors";
      });
      btn.className = "status-btn px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold transition-colors";
      AppState.selectedStatus = btn.getAttribute("data-status");
      renderProblemsTable();
    });
  });

  // Global solve button delegation
  document.addEventListener("click", e => {
    const solveBtn = e.target.closest("[data-solve-id]");
    if (solveBtn) {
      e.preventDefault();
      const probId = parseInt(solveBtn.getAttribute("data-solve-id"), 10);
      loadProblemInWorkspace(probId);
    }
  });

  // Daily challenge button
  const btnSolveDaily = document.getElementById("btn-solve-daily");
  if (btnSolveDaily) {
    btnSolveDaily.addEventListener("click", () => {
      loadProblemInWorkspace(76); // Minimum Window Substring
    });
  }

  // Contest registration button
  const btnContest = document.getElementById("btn-register-contest");
  if (btnContest) {
    btnContest.addEventListener("click", () => {
      showToast("Registered for Weekly Contest 389!", "military_tech");
      btnContest.textContent = "Registered ✓";
      btnContest.classList.add("text-primary");
    });
  }

  // Row checkbox selection delegation
  const tbody = document.getElementById("problem-rows");
  if (tbody) {
    tbody.addEventListener("change", e => {
      const checkbox = e.target.closest(".problem-checkbox");
      if (checkbox) {
        const probId = parseInt(checkbox.getAttribute("data-problem-id"), 10);
        if (checkbox.checked) {
          AppState.selectedProblemIds.add(probId);
        } else {
          AppState.selectedProblemIds.delete(probId);
        }
        updateSelectionUI();
      }
    });
  }

  // Header "Select All" checkbox
  const selectAllCheckbox = document.getElementById("select-all-problems");
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener("change", e => {
      const filtered = getFilteredProblems();
      if (e.target.checked) {
        filtered.forEach(p => AppState.selectedProblemIds.add(p.id));
      } else {
        filtered.forEach(p => AppState.selectedProblemIds.delete(p.id));
      }
      renderProblemsTable();
    });
  }

  // Floating Action Bar: Download JSON
  const btnDownloadJson = document.getElementById("btn-download-json");
  if (btnDownloadJson) {
    btnDownloadJson.addEventListener("click", () => {
      downloadSelectedProblemsJSON();
    });
  }

  // Floating Action Bar: Clear Selection
  const btnClearSelection = document.getElementById("btn-clear-selection");
  if (btnClearSelection) {
    btnClearSelection.addEventListener("click", () => {
      AppState.selectedProblemIds.clear();
      renderProblemsTable();
      showToast("Selection cleared", "check");
      announce("Problem selection cleared");
    });
  }

  renderProblemsTable();
}

// =============================================================================
// 5. SOLVE WORKSPACE (IDE Sandbox & Code Runner)
// =============================================================================
function loadProblemInWorkspace(problemId) {
  const prob = PROBLEMS_DATA.find(p => p.id === problemId);
  if (!prob) return;

  AppState.activeProblem = prob;

  const progView = document.getElementById("workspace-programming-view");
  const concView = document.getElementById("workspace-conceptual-view");

  // Conceptual Question Detail View (No code editor, no test cases)
  if (prob.questionType === "Conceptual") {
    if (progView) progView.classList.add("hidden");
    if (concView) concView.classList.remove("hidden");

    // Badges container reusing existing badge components
    const badgesContainer = document.getElementById("conceptual-badges-container");
    if (badgesContainer) {
      let diffClass = "px-2.5 py-0.5 rounded-full font-label-sm text-xs font-semibold tracking-wide ";
      if (prob.difficulty === "Easy") diffClass += "bg-primary/20 text-primary border border-primary/30";
      else if (prob.difficulty === "Medium") diffClass += "bg-secondary-container/20 text-secondary border border-secondary/30";
      else diffClass += "bg-tertiary-container/20 text-tertiary border border-tertiary/30";

      const qtypeBadge = `
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-xs">
          <span class="material-symbols-outlined text-[14px]">psychology</span>
          <span>Conceptual</span>
        </span>
      `;

      const diffBadge = `<span class="${diffClass}">${prob.difficulty}</span>`;
      const compBadge = getCompanyBadge(prob.company);
      const catBadge = getCategoryBadge(prob.topicCategory);

      badgesContainer.innerHTML = `${qtypeBadge} ${diffBadge} ${compBadge} ${catBadge}`;
    }

    // Title
    const titleEl = document.getElementById("conceptual-problem-title");
    if (titleEl) titleEl.textContent = `${prob.number}. ${prob.title}`;

    // Source label under title
    const sourceEl = document.getElementById("conceptual-problem-source");
    if (sourceEl) {
      sourceEl.innerHTML = `
        <span class="material-symbols-outlined text-[13px] text-outline">language</span>
        <span>via ${prob.sourceSite || "GeeksforGeeks"}</span>
      `;
    }

    // Description / Question Prompt
    const descEl = document.getElementById("conceptual-problem-desc");
    if (descEl) descEl.innerHTML = prob.description;

    // Model Answer
    const answerEl = document.getElementById("conceptual-model-answer");
    if (answerEl) {
      answerEl.innerHTML = renderModelAnswerMarkdown(prob.modelAnswer || "No model answer provided.");
    }

    // Copy button
    const copyBtn = document.getElementById("btn-copy-model-answer");
    const copyBtnText = document.getElementById("copy-btn-text");
    if (copyBtn) {
      copyBtn.onclick = () => {
        if (prob.modelAnswer) {
          navigator.clipboard?.writeText(prob.modelAnswer);
          if (copyBtnText) copyBtnText.textContent = "Copied ✓";
          showToast("Model answer copied to clipboard!", "content_copy");
          setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = "Copy Model Answer";
          }, 2000);
        }
      };
    }

    // Top meta
    const topicTag = document.getElementById("workspace-topic-tag");
    const sessionTag = document.getElementById("workspace-session-tag");
    if (topicTag) topicTag.textContent = prob.topics ? prob.topics[0] : (prob.topicCategory || "Conceptual");
    if (sessionTag) sessionTag.textContent = "Study Rubric";

    // Switch to problem workspace view
    navigateTo("solve");
    showToast(`Loaded "${prob.title}"`, "psychology");
    announce(`Loaded conceptual question: ${prob.title}`);
    return;
  }

  // Programming Question Detail View
  if (concView) concView.classList.add("hidden");
  if (progView) progView.classList.remove("hidden");

  // Header meta
  const titleEl = document.getElementById("solve-problem-title");
  const sourceEl = document.getElementById("solve-problem-source");
  const diffEl = document.getElementById("solve-problem-diff");
  const topicTag = document.getElementById("workspace-topic-tag");
  const sessionTag = document.getElementById("workspace-session-tag");
  if (titleEl) titleEl.textContent = `${prob.number}. ${prob.title}`;
  if (sourceEl) {
    sourceEl.innerHTML = `
      <span class="material-symbols-outlined text-[13px] text-outline">language</span>
      <span>via ${prob.sourceSite || "LeetCode"}</span>
    `;
  }
  if (diffEl) {
    diffEl.textContent = prob.difficulty;
    let diffClass = "px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold tracking-wider uppercase ";
    if (prob.difficulty === "Easy") diffClass += "bg-primary/20 text-primary";
    else if (prob.difficulty === "Medium") diffClass += "bg-secondary-container/20 text-secondary";
    else diffClass += "bg-tertiary-container/20 text-tertiary";
    diffEl.className = diffClass;
  }
  if (topicTag) topicTag.textContent = prob.topicCategory || prob.topics[0];
  if (sessionTag) sessionTag.textContent = `Session #${Math.floor(1000 + Math.random() * 9000)}`;

  // Problem description
  const descPanel = document.getElementById("panel-ptab-desc");
  if (descPanel) {
    let examplesHtml = prob.examples.map((ex, idx) => `
      <div class="bg-surface-container p-3.5 rounded-lg space-y-1.5 shadow-inner border border-surface-container-high/60">
        <span class="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold block">Example ${idx + 1}</span>
        <div class="space-y-0.5 font-code-md text-code-md">
          <div class="text-on-surface-variant"><span class="text-on-surface font-semibold">Input:</span> ${ex.input}</div>
          <div class="text-on-surface-variant"><span class="text-on-surface font-semibold">Output:</span> <span class="text-primary font-bold">${ex.output}</span></div>
          ${ex.explanation ? `<div class="text-on-surface-variant text-[13px]"><span class="text-on-surface font-semibold">Explanation:</span> ${ex.explanation}</div>` : ""}
        </div>
      </div>
    `).join("");

    let visualizerHtml = "";
    if (prob.visualizer) {
      const cells = prob.visualizer.map((val, idx) => {
        const isHighlight = prob.visualizerHighlight && prob.visualizerHighlight.includes(idx);
        return isHighlight
          ? `<span class="visualizer-cell px-2.5 py-1 bg-primary-container/30 text-primary font-bold rounded ring-1 ring-primary/40 cursor-pointer" title="Index ${idx}">${val}</span>`
          : `<span class="visualizer-cell px-2 py-1 bg-surface-container rounded text-on-surface-variant cursor-pointer" title="Index ${idx}">${val}</span>`;
      }).join(" ");

      visualizerHtml = `
        <div class="p-3 bg-surface-container-lowest rounded-lg border border-surface-container space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Array Visualizer</span>
            <span class="font-label-sm text-label-sm text-primary font-mono">Length: ${prob.visualizer.length}</span>
          </div>
          <div class="flex items-center gap-1 font-code-md text-[13px] overflow-x-auto py-1">${cells}</div>
        </div>
      `;
    }

    let constraintsHtml = prob.constraints.map(c => `
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        <span>${c}</span>
      </li>
    `).join("");

    descPanel.innerHTML = `
      <div class="space-y-3 font-body-md leading-relaxed text-on-surface">
        <p>${prob.description}</p>
      </div>
      ${visualizerHtml}
      <div class="space-y-3">${examplesHtml}</div>
      <div class="space-y-2">
        <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">Constraints:</span>
        <ul class="space-y-1.5 font-code-md text-code-md text-on-surface-variant">${constraintsHtml}</ul>
      </div>
    `;
  }

  // Load code template into editor
  const lang = AppState.editorLanguage;
  const editor = document.getElementById("code-editor");
  if (editor) {
    const template = (prob.codeTemplates && prob.codeTemplates[lang]) || prob.codeTemplates?.python || `// Solution for ${prob.title}\n`;
    editor.value = template;
    updateLineNumbers();
  }

  // Solution Quality: Tests Passing badge near solution code
  const passingBadge = document.getElementById("tests-passing-badge");
  const testCases = prob.testCases || [];
  const totalTests = testCases.length;
  const verifiedTests = testCases.filter(tc => tc.verified === true).length;
  const allVerified = totalTests > 0 && verifiedTests === totalTests;

  if (passingBadge) {
    if (allVerified) {
      // GREEN BADGE when all test cases are marked as verified (seeded problems)
      passingBadge.className = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-label-sm text-xs font-semibold tracking-wide shadow-xs";
      passingBadge.innerHTML = `
        <span class="material-symbols-outlined text-[14px]">check_circle</span>
        <span id="tests-passing-text">${totalTests}/${totalTests} tests passing</span>
      `;
      passingBadge.title = "All test cases verified";
    } else {
      // DOES NOT show the green badge for sync-added / unverified problems!
      passingBadge.className = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-label-sm text-xs font-semibold tracking-wide shadow-xs";
      passingBadge.innerHTML = `
        <span class="material-symbols-outlined text-[14px]">pending</span>
        <span id="tests-passing-text">${verifiedTests}/${totalTests} tests passing (Unverified)</span>
      `;
      passingBadge.title = "Candidate test cases added by sync run - not yet confirmed";
    }
  }

  // Render 10 edge test cases in workspace console panel (Task 3)
  renderWorkspaceTestCases(prob);

  // Switch to problem workspace view
  navigateTo("solve");
  showToast(`Loaded "${prob.title}" into Workspace`, "terminal");
}

// Task 3: Render all 10 edge cases in a scrollable list inside workspace
function renderWorkspaceTestCases(problem, runResults = null) {
  const container = document.getElementById("test-cases-list");
  const summaryChip = document.getElementById("edge-cases-summary-chip");
  const passCounter = document.getElementById("test-pass-counter");
  const passIcon = document.getElementById("test-pass-icon");
  if (!container) return;

  const testCases = problem.testCases || [];
  const totalCount = testCases.length;

  if (summaryChip) {
    summaryChip.innerHTML = `
      <span class="material-symbols-outlined text-[14px]">fact_check</span>
      <span>${totalCount}/${totalCount} edge cases covered</span>
    `;
  }

  const passedCount = runResults ? runResults.filter(r => r.passed).length : totalCount;
  if (passCounter) {
    passCounter.textContent = `${passedCount} / ${totalCount} Passed`;
  }
  if (passIcon) {
    passIcon.textContent = (passedCount === totalCount) ? "check_circle" : "error";
  }

  container.innerHTML = testCases.map((tc, idx) => {
    const result = runResults ? runResults[idx] : null;
    const isPassed = result ? result.passed : true; // Default ready/verified state
    const indicatorIcon = isPassed ? "check_circle" : "cancel";
    const indicatorColor = isPassed ? "text-primary" : "text-tertiary";
    const indicatorBg = isPassed ? "bg-primary/10" : "bg-tertiary/10";

    return `
      <div class="test-case-row flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 group">
        <div class="flex items-center gap-2.5 min-w-0 flex-1">
          <!-- Index -->
          <span class="font-mono text-xs font-semibold text-on-surface-variant w-6 shrink-0">#${tc.id || idx + 1}</span>

          <!-- Edge Case Label Badge -->
          <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-label-sm text-[11px] font-semibold tracking-wide shrink-0">
            ${tc.edgeCase || "Edge Case"}
          </span>

          <!-- Input Snippet -->
          <div class="min-w-0 flex-1 flex items-center gap-1 font-mono text-xs text-on-surface-variant truncate">
            <span class="text-on-surface-variant/70 shrink-0">in:</span>
            <span class="text-on-surface truncate" title="${tc.input}">${tc.input}</span>
          </div>

          <!-- Expected Output Snippet -->
          <div class="hidden md:flex items-center gap-1 font-mono text-xs text-on-surface-variant shrink-0 max-w-[180px] truncate">
            <span class="text-on-surface-variant/70 shrink-0">exp:</span>
            <span class="text-primary font-semibold truncate" title="${tc.expected}">${tc.expected}</span>
          </div>
        </div>

        <!-- Pass/Fail Status Indicator -->
        <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md ${indicatorBg} ${indicatorColor} font-label-sm text-[11px] font-semibold">
            <span class="material-symbols-outlined text-[14px]">${indicatorIcon}</span>
            <span>${isPassed ? "Pass" : "Fail"}</span>
          </span>
        </div>
      </div>
    `;
  }).join("");
}

function updateLineNumbers() {
  const editor = document.getElementById("code-editor");
  const rail = document.getElementById("code-line-numbers");
  if (!editor || !rail) return;

  const linesCount = (editor.value.match(/\n/g) || []).length + 1;
  let numbersHtml = "";
  for (let i = 1; i <= Math.max(linesCount, 12); i++) {
    numbersHtml += `<div>${i}</div>`;
  }
  rail.innerHTML = numbersHtml;
}

function initSolveWorkspace() {
  const editor = document.getElementById("code-editor");
  const langSelect = document.getElementById("lang-select");
  const btnRun = document.getElementById("btn-run-code");
  const btnSubmit = document.getElementById("btn-submit-code");
  const btnReset = document.getElementById("btn-reset-code");
  const btnSaveProb = document.getElementById("btn-save-problem");
  const iconBookmark = document.getElementById("icon-bookmark");
  const btnShare = document.getElementById("btn-share-problem");
  const btnToggleConsole = document.getElementById("btn-toggle-console");
  const consoleDrawer = document.getElementById("console-drawer");
  const consoleArrow = document.getElementById("console-arrow");
  const btnFullscreen = document.getElementById("btn-fullscreen-toggle");

  // Load default problem on start
  if (editor && AppState.activeProblem) {
    editor.value = AppState.activeProblem.codeTemplates.python;
    updateLineNumbers();
    renderWorkspaceTestCases(AppState.activeProblem);
  }

  // Editor typing & tab handling
  if (editor) {
    editor.addEventListener("input", () => {
      updateLineNumbers();
      const saveStatus = document.getElementById("save-status-text");
      if (saveStatus) {
        saveStatus.textContent = "Saving...";
        setTimeout(() => { saveStatus.textContent = "Auto-saved"; }, 600);
      }
    });

    editor.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
        updateLineNumbers();
      } else if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        runCodeSimulation();
      }
    });
  }

  // Language change handler
  if (langSelect) {
    langSelect.addEventListener("change", e => {
      AppState.editorLanguage = e.target.value;
      const prob = AppState.activeProblem;
      if (editor && prob && prob.codeTemplates) {
        const code = prob.codeTemplates[AppState.editorLanguage] || `// Code in ${AppState.editorLanguage} for ${prob.title}\n`;
        editor.value = code;
        updateLineNumbers();
        showToast(`Switched language to ${langSelect.options[langSelect.selectedIndex].text}`, "code");
      }
    });
  }

  // Reset template button
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      const prob = AppState.activeProblem;
      if (editor && prob && prob.codeTemplates) {
        editor.value = prob.codeTemplates[AppState.editorLanguage] || prob.codeTemplates.python;
        updateLineNumbers();
        showToast("Code template restored", "restart_alt");
      }
    });
  }

  // Problem tabs (Description, Hints, Solutions, Submissions)
  document.querySelectorAll(".problem-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const ptab = btn.getAttribute("data-ptab");
      document.querySelectorAll(".problem-tab-btn").forEach(b => {
        b.className = "problem-tab-btn flex-1 py-1.5 text-center rounded text-on-surface-variant hover:text-on-surface transition-all";
      });
      btn.className = "problem-tab-btn flex-1 py-1.5 text-center rounded bg-surface-container-high text-on-surface font-semibold shadow-sm transition-all";

      const panels = {
        desc: document.getElementById("panel-ptab-desc"),
        hints: document.getElementById("panel-ptab-hints"),
        solutions: document.getElementById("panel-ptab-solutions"),
        submissions: document.getElementById("panel-ptab-submissions")
      };

      Object.keys(panels).forEach(k => {
        if (panels[k]) {
          if (k === ptab) panels[k].classList.remove("hidden");
          else panels[k].classList.add("hidden");
        }
      });
    });
  });

  // Hints Accordion
  document.querySelectorAll(".hint-accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const hintNum = btn.getAttribute("data-hint");
      const hintText = document.getElementById(`hint-${hintNum}-text`);
      const icon = btn.querySelector(".material-symbols-outlined");

      if (hintText) {
        hintText.classList.toggle("hidden");
        const isOpen = !hintText.classList.contains("hidden");
        btn.querySelector("span:first-child").textContent = isOpen ? "Hide Hint" : "Show Hint";
        if (icon) icon.textContent = isOpen ? "expand_less" : "expand_more";
      }
    });
  });

  // Bookmark / Save Problem button
  if (btnSaveProb && iconBookmark) {
    btnSaveProb.addEventListener("click", () => {
      AppState.isBookmarked = !AppState.isBookmarked;
      if (AppState.isBookmarked) {
        iconBookmark.textContent = "bookmark";
        iconBookmark.classList.add("text-primary");
        showToast("Problem saved to bookmarks", "bookmark");
      } else {
        iconBookmark.textContent = "bookmark_border";
        iconBookmark.classList.remove("text-primary");
        showToast("Problem removed from bookmarks", "bookmark_border");
      }
    });
  }

  // Share Problem button
  if (btnShare) {
    btnShare.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        showToast("Problem URL copied to clipboard!", "share");
      }
    });
  }

  // Toggle Console Drawer
  if (btnToggleConsole && consoleDrawer) {
    btnToggleConsole.addEventListener("click", () => {
      consoleDrawer.classList.toggle("h-10");
      consoleDrawer.classList.toggle("h-64");
      const isCollapsed = consoleDrawer.classList.contains("h-10");
      if (consoleArrow) consoleArrow.textContent = isCollapsed ? "expand_more" : "expand_less";
    });
  }

  // Fullscreen Focus Mode
  if (btnFullscreen) {
    btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => { });
        showToast("Entered Zen Focus Mode", "fullscreen");
      } else {
        document.exitFullscreen().catch(() => { });
        showToast("Exited Zen Focus Mode", "fullscreen_exit");
      }
    });
  }

  // Console Tabs (Test Cases vs Run Results)
  const tabCaseBtn = document.getElementById("tab-testcase-btn");
  const tabResultBtn = document.getElementById("tab-result-btn");
  const panelCases = document.getElementById("panel-test-cases");
  const panelResults = document.getElementById("panel-test-results");

  if (tabCaseBtn && tabResultBtn) {
    tabCaseBtn.addEventListener("click", () => {
      tabCaseBtn.className = "px-3 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-all";
      tabResultBtn.className = "px-3 py-1 rounded text-on-surface-variant hover:text-on-surface flex items-center gap-1.5 transition-all";
      panelCases.classList.remove("hidden");
      panelResults.classList.add("hidden");
    });

    tabResultBtn.addEventListener("click", () => {
      tabResultBtn.className = "px-3 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-all flex items-center gap-1.5";
      tabCaseBtn.className = "px-3 py-1 rounded text-on-surface-variant hover:text-on-surface transition-all";
      panelResults.classList.remove("hidden");
      panelCases.classList.add("hidden");
    });
  }

  // Run Code Action
  if (btnRun) btnRun.addEventListener("click", runCodeSimulation);

  // Submit Code Action
  if (btnSubmit) {
    btnSubmit.addEventListener("click", () => {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span class="material-symbols-outlined text-[16px] animate-spin">sync</span> Evaluating...`;

      setTimeout(() => {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<span class="material-symbols-outlined text-[16px]">cloud_upload</span> Submit`;
        navigateTo("submission");
        showToast("Submission evaluated: Accepted!", "check_circle");
      }, 700);
    });
  }

  // Session Timer
  initWorkspaceTimer();
}

function runCodeSimulation() {
  const btnRun = document.getElementById("btn-run-code");
  const tabResultBtn = document.getElementById("tab-result-btn");
  const runStatusDot = document.getElementById("run-status-dot");
  const runExecTime = document.getElementById("run-exec-time");
  const prob = AppState.activeProblem;

  if (btnRun) {
    btnRun.disabled = true;
    btnRun.innerHTML = `<span class="material-symbols-outlined text-[16px] animate-spin">sync</span> Evaluating 10 edge cases...`;
  }

  setTimeout(() => {
    if (btnRun) {
      btnRun.disabled = false;
      btnRun.innerHTML = `
        <span class="material-symbols-outlined text-[16px] text-primary">play_arrow</span>
        <span>Run Code</span>
        <kbd class="px-1.5 py-0.2 bg-surface-container text-on-surface-variant rounded text-[10px]">⌘↵</kbd>
      `;
    }

    if (runStatusDot) runStatusDot.classList.remove("hidden");
    if (runExecTime) {
      const ms = (Math.random() * 1.5 + 0.8).toFixed(1);
      runExecTime.textContent = `Runtime: ${ms}ms`;
    }

    // Evaluate all 10 test cases as passed
    if (prob && prob.testCases) {
      const results = prob.testCases.map(tc => ({
        id: tc.id,
        edgeCase: tc.edgeCase,
        passed: true
      }));
      renderWorkspaceTestCases(prob, results);
    }

    showToast("All 10/10 edge cases passed successfully!", "verified");
  }, 450);
}

function initWorkspaceTimer() {
  const timerDisplay = document.getElementById("timer-display");
  const timerToggleBtn = document.getElementById("timer-toggle-btn");
  const timerIcon = document.getElementById("timer-icon");

  function updateDisplay() {
    if (!timerDisplay) return;
    const mins = Math.floor(AppState.timerSeconds / 60);
    const secs = AppState.timerSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  AppState.timerInterval = setInterval(() => {
    if (AppState.isTimerRunning && AppState.timerSeconds > 0) {
      AppState.timerSeconds--;
      updateDisplay();
    }
  }, 1000);

  if (timerToggleBtn) {
    timerToggleBtn.addEventListener("click", () => {
      AppState.isTimerRunning = !AppState.isTimerRunning;
      if (timerIcon) {
        timerIcon.textContent = AppState.isTimerRunning ? "pause" : "play_arrow";
      }
      showToast(AppState.isTimerRunning ? "Session timer resumed" : "Session timer paused", "timer");
    });
  }
}

// =============================================================================
// 6. SUBMISSION RESULTS (Telemetry, Diff & Diagnostics)
// =============================================================================
function switchSubmissionVerdict(state) {
  AppState.submissionVerdict = state;

  const banner = document.getElementById("verdict-banner");
  const title = document.getElementById("verdict-title");
  const tag = document.getElementById("verdict-tag");
  const icon = document.getElementById("verdict-icon");
  const iconContainer = document.getElementById("verdict-icon-container");
  const glow = document.getElementById("verdict-glow");
  const statsGrid = document.getElementById("stats-grid");
  const failureSection = document.getElementById("failure-section");
  const wrongContent = document.getElementById("diagnostic-wrong-content");
  const runtimeContent = document.getElementById("diagnostic-runtime-content");
  const diagnosticCasePill = document.getElementById("diagnostic-case-pill");
  const codeInit = document.getElementById("code-line-init");

  // Reset pill states
  document.querySelectorAll(".state-pill").forEach(btn => {
    btn.className = "state-pill px-3 py-1 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1";
  });

  if (state === "accepted") {
    const btnAcc = document.getElementById("btn-state-accepted");
    if (btnAcc) btnAcc.className = "state-pill px-3 py-1 rounded-lg font-label-sm text-label-sm bg-primary text-on-primary font-medium transition-all shadow-sm flex items-center gap-1";

    if (title) {
      title.innerText = "Accepted";
      title.className = "font-headline-lg text-headline-lg text-primary tracking-tight";
    }
    if (tag) {
      tag.innerText = "All tests passed";
      tag.className = "px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-primary/20 text-primary";
    }
    if (icon) icon.innerText = "check_circle";
    if (iconContainer) iconContainer.className = "w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 shadow-inner";
    if (glow) glow.className = "absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none transition-all";

    if (statsGrid) statsGrid.classList.remove("hidden");
    if (failureSection) failureSection.classList.add("hidden");
    if (codeInit) codeInit.className = "";
  } else if (state === "wrong") {
    const btnWrong = document.getElementById("btn-state-wrong");
    if (btnWrong) btnWrong.className = "state-pill px-3 py-1 rounded-lg font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container font-medium transition-all shadow-sm flex items-center gap-1";

    if (title) {
      title.innerText = "Wrong Answer";
      title.className = "font-headline-lg text-headline-lg text-tertiary tracking-tight";
    }
    if (tag) {
      tag.innerText = "183 / 210 passed";
      tag.className = "px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-container/20 text-tertiary";
    }
    if (icon) icon.innerText = "cancel";
    if (iconContainer) iconContainer.className = "w-14 h-14 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center shrink-0 shadow-inner";
    if (glow) glow.className = "absolute -right-20 -top-20 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl pointer-events-none transition-all";

    if (statsGrid) statsGrid.classList.remove("hidden");
    if (failureSection) failureSection.classList.remove("hidden");
    if (wrongContent) wrongContent.classList.remove("hidden");
    if (runtimeContent) runtimeContent.classList.add("hidden");
    if (diagnosticCasePill) diagnosticCasePill.innerText = "Failed Test Case 184 of 210";
    if (codeInit) codeInit.className = "bg-tertiary-container/30 rounded px-1 -mx-1";
  } else if (state === "runtime") {
    const btnRuntime = document.getElementById("btn-state-runtime");
    if (btnRuntime) btnRuntime.className = "state-pill px-3 py-1 rounded-lg font-label-sm text-label-sm bg-error text-on-error font-medium transition-all shadow-sm flex items-center gap-1";

    if (title) {
      title.innerText = "Runtime Error";
      title.className = "font-headline-lg text-headline-lg text-error tracking-tight";
    }
    if (tag) {
      tag.innerText = "Execution Halt (Line 8)";
      tag.className = "px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container/40 text-error";
    }
    if (icon) icon.innerText = "error";
    if (iconContainer) iconContainer.className = "w-14 h-14 rounded-xl bg-error-container/30 text-error flex items-center justify-center shrink-0 shadow-inner";
    if (glow) glow.className = "absolute -right-20 -top-20 w-80 h-80 rounded-full bg-error/10 blur-3xl pointer-events-none transition-all";

    if (statsGrid) statsGrid.classList.add("hidden");
    if (failureSection) failureSection.classList.remove("hidden");
    if (wrongContent) wrongContent.classList.add("hidden");
    if (runtimeContent) runtimeContent.classList.remove("hidden");
    if (diagnosticCasePill) diagnosticCasePill.innerText = "Terminated on Test Case 3";
    if (codeInit) codeInit.className = "";
  }
}

function initSubmissionResults() {
  document.querySelectorAll(".state-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const verdict = btn.getAttribute("data-verdict");
      switchSubmissionVerdict(verdict);
    });
  });

  // AI Guidance spoiler reveal toggle
  const hintToggleBtn = document.getElementById("hint-toggle-btn");
  const hintText = document.getElementById("hint-text");
  if (hintToggleBtn && hintText) {
    hintToggleBtn.addEventListener("click", () => {
      const isBlurred = hintText.classList.contains("blur-sm");
      if (isBlurred) {
        hintText.classList.remove("blur-sm", "select-none");
        hintToggleBtn.textContent = "Hide Hint";
      } else {
        hintText.classList.add("blur-sm", "select-none");
        hintToggleBtn.textContent = "Reveal Hint";
      }
    });
  }

  // Copy code button
  const btnCopyCode = document.getElementById("btn-copy-code");
  const copyBtnText = document.getElementById("copy-btn-text");
  if (btnCopyCode) {
    btnCopyCode.addEventListener("click", () => {
      const prob = AppState.activeProblem;
      const code = prob.codeTemplates.python;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
          if (copyBtnText) copyBtnText.textContent = "Copied!";
          showToast("Code copied to clipboard!", "content_copy");
          setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = "Copy Code";
          }, 2000);
        });
      }
    });
  }
}

// =============================================================================
// 7. PROGRESS DASHBOARD (Heatmap & Charts)
// =============================================================================
function initDashboard() {
  const container = document.getElementById("heatmap-container");
  if (!container) return;

  // Generate 26 columns x 7 rows (182 days) with realistic activity pattern
  const colors = [
    "bg-surface-container-highest",
    "bg-primary-container/30",
    "bg-primary/60",
    "bg-primary"
  ];

  let cellsHtml = "";
  // Deterministic seed pattern to match high performance engineer activity
  for (let col = 0; col < 26; col++) {
    for (let row = 0; row < 7; row++) {
      let tier = 0;
      const rand = ((col * 13 + row * 7) % 100);
      if (col > 20) {
        // High recent streak
        tier = (rand > 20) ? (rand > 60 ? 3 : 2) : 1;
      } else if (col > 12) {
        tier = (rand > 40) ? (rand > 75 ? 3 : 2) : (rand > 25 ? 1 : 0);
      } else {
        tier = (rand > 60) ? (rand > 85 ? 3 : 2) : (rand > 45 ? 1 : 0);
      }

      const count = tier === 0 ? 0 : (tier === 1 ? 2 : (tier === 2 ? 5 : 9));
      cellsHtml += `
        <div class="heatmap-cell w-full h-3 rounded-xs ${colors[tier]} cursor-pointer"
             title="${count} submissions on week ${col + 1}, day ${row + 1}"></div>
      `;
    }
  }

  container.innerHTML = cellsHtml;

  // Export card button
  const btnExport = document.getElementById("btn-export-card");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      showToast("Developer profile card exported to clipboard image!", "share");
    });
  }
}

// =============================================================================
// 8. AUTOMATIC SYNC STATUS & BACKGROUND SCRAPER LAYER (Backend-Ready)
// SECURITY: hiding this in the UI is not sufficient — the backend API for these endpoints must independently verify admin role server-side before returning data, regardless of what the frontend requests.
// =============================================================================

// Mock historical log of automated scraper runs (shared mutable array)
let SYNC_HISTORY_DATA = [
  {
    id: "sync-run-20260920-0300",
    timestamp: "Today, 03:00 UTC",
    relativeTime: "3h ago",
    sitesChecked: ["LeetCode", "GeeksforGeeks", "HackerRank", "InterviewBit", "Codeforces"],
    questionsAdded: 2,
    status: "Success",
    summary: "2 new algorithmic questions scraped & cataloged (LeetCode, HackerRank)"
  },
  {
    id: "sync-run-20260919-0300",
    timestamp: "Yesterday, 03:00 UTC",
    relativeTime: "27h ago",
    sitesChecked: ["LeetCode", "GeeksforGeeks", "HackerRank", "InterviewBit", "Codeforces"],
    questionsAdded: 3,
    status: "Success",
    summary: "3 new algorithmic questions scraped & cataloged (GFG, InterviewBit, LeetCode)"
  },
  {
    id: "sync-run-20260918-0300",
    timestamp: "2 days ago, 03:00 UTC",
    relativeTime: "51h ago",
    sitesChecked: ["LeetCode", "GeeksforGeeks", "HackerRank", "InterviewBit", "Codeforces"],
    questionsAdded: 4,
    status: "Success",
    summary: "4 questions scraped & verified across all 5 monitored platforms"
  }
];

// Current sync state cache
let CURRENT_SYNC_INFO = {
  lastSyncedAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
  lastSyncedRelative: "Synced 3 hours ago",
  lastSyncedDisplay: "Today at 03:00 UTC",
  nextScheduledSyncAt: new Date(Date.now() + 14 * 3600 * 1000 + 22 * 60 * 1000).toISOString(),
  nextSyncCountdown: "In ~14h 22m",
  sites: [
    { name: "LeetCode", cadence: "Daily @ 02:00 UTC", status: "ok", questionsTracked: 242, lastChecked: "3h ago" },
    { name: "GeeksforGeeks", cadence: "Daily @ 02:30 UTC", status: "ok", questionsTracked: 185, lastChecked: "3h ago" },
    { name: "HackerRank", cadence: "Daily @ 03:00 UTC", status: "ok", questionsTracked: 94, lastChecked: "3h ago" },
    { name: "InterviewBit", cadence: "Daily @ 03:30 UTC", status: "ok", questionsTracked: 110, lastChecked: "3h ago" },
    { name: "Codeforces", cadence: "Daily @ 04:00 UTC", status: "ok", questionsTracked: 76, lastChecked: "3h ago" }
  ]
};

// -----------------------------------------------------------------------------
// STUB 1: getLastSyncInfo()
// SECURITY: hiding this in the UI is not sufficient — the backend API for these endpoints must independently verify admin role server-side before returning data, regardless of what the frontend requests.
// TODO: replace with real backend call to GET /api/sync/status
// -----------------------------------------------------------------------------
function getLastSyncInfo() {
  const newCount = PROBLEMS_DATA.filter(p => p.isNew).length;
  return {
    ...CURRENT_SYNC_INFO,
    newCountSinceVisit: newCount
  };
}

// -----------------------------------------------------------------------------
// STUB 2: getSyncHistory()
// SECURITY: hiding this in the UI is not sufficient — the backend API for these endpoints must independently verify admin role server-side before returning data, regardless of what the frontend requests.
// TODO: replace with real backend call to GET /api/sync/history
// -----------------------------------------------------------------------------
function getSyncHistory() {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== "admin") {
    return [];
  }
  return [...SYNC_HISTORY_DATA];
}

// -----------------------------------------------------------------------------
// STUB 3: triggerManualSync(onProgress)
// SECURITY: hiding this in the UI is not sufficient — the backend API for these endpoints must independently verify admin role server-side before returning data, regardless of what the frontend requests.
// TODO: replace with real backend call to POST /api/sync/trigger
// -----------------------------------------------------------------------------
async function triggerManualSync(onProgress) {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== "admin") {
    throw new Error("Unauthorized: Admin role required to trigger manual sync.");
  }
  // Staged progress simulation
  const stages = [
    { pct: 15, text: "Checking LeetCode...", sub: "Stage 1 of 4: Checking source platforms" },
    { pct: 30, text: "Checking GeeksforGeeks...", sub: "Stage 1 of 4: Checking source platforms" },
    { pct: 45, text: "Checking HackerRank & InterviewBit...", sub: "Stage 1 of 4: Checking source platforms" },
    { pct: 60, text: "Checking Codeforces...", sub: "Stage 1 of 4: Checking source platforms" },
    { pct: 75, text: "Categorizing new questions into taxonomy...", sub: "Stage 2 of 4: Taxonomy classification" },
    { pct: 90, text: "Generating & validating solutions & test suites...", sub: "Stage 3 of 4: Solution verification" },
    { pct: 100, text: "Done", sub: "Stage 4 of 4: Ingestion complete" }
  ];

  for (const step of stages) {
    if (onProgress) onProgress(step);
    await new Promise(res => setTimeout(res, 420));
  }

  // Pre-configured algorithmic problems pool for incremental scraping (Task 1 Taxonomy)
  const candidatePool = [
    {
      title: "Network Delay Time",
      category: "Other",
      diff: "Medium",
      comp: "Google",
      site: "LeetCode",
      topics: ["Graphs", "Dijkstra", "Shortest Path"]
    },
    {
      title: "Partition Equal Subset Sum",
      category: "Dynamic Programming",
      diff: "Medium",
      comp: "Meta",
      site: "GeeksforGeeks",
      topics: ["Dynamic Programming", "0/1 Knapsack"]
    },
    {
      title: "Word Search II",
      category: "Backtracking",
      diff: "Hard",
      comp: "Amazon",
      site: "LeetCode",
      topics: ["Backtracking", "Trie", "DFS"]
    },
    {
      title: "Gas Station",
      category: "Greedy",
      diff: "Medium",
      comp: "Apple",
      site: "LeetCode",
      topics: ["Greedy", "Arrays"]
    },
    {
      title: "Binary Tree Maximum Path Sum",
      category: "Divide & Conquer",
      diff: "Hard",
      comp: "Amazon",
      site: "HackerRank",
      topics: ["Divide & Conquer", "Trees", "DFS"]
    },
    {
      title: "Container With Most Water",
      category: "Two Pointers",
      diff: "Medium",
      comp: "Netflix",
      site: "InterviewBit",
      topics: ["Two Pointers", "Arrays"]
    }
  ];

  const countToPick = Math.floor(Math.random() * 3) + 2; // 2 to 4 questions
  const shuffled = candidatePool.sort(() => 0.5 - Math.random()).slice(0, countToPick);
  const now = new Date();

  const scrapedQuestions = shuffled.map((item) => {
    const newId = 1700 + Math.floor(Math.random() * 8000);
    return {
      id: newId,
      number: String(newId),
      title: item.title,
      questionType: "Programming",
      difficulty: item.diff,
      topics: item.topics,
      topicCategory: item.category,
      sourceSite: item.site,
      company: item.comp,
      acceptance: `${(45 + Math.random() * 25).toFixed(1)}%`,
      status: "Not started",
      addedAt: now.toISOString(),
      isNew: true,
      description: `Automatically scraped from <strong class="text-primary">${item.site}</strong> (${item.comp} assessment rubric):<br/><br/>You are given a system representation where input parameters model distributed latency constraints. Devise an optimal algorithm using <code class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-code-md">${item.category}</code> satisfying asymptotic bounds.`,
      examples: [
        { input: "latencies = [12, 45, 23, 89], threshold = 60", output: "145ms", explanation: "Calculates optimal batching boundary." }
      ],
      constraints: ["1 <= N <= 10^5", "Time Complexity target: O(N log N)"],
      hints: [
        `Consider asymptotic properties and algorithmic techniques suited for ${item.category}.`,
        "Examine prefix states or subproblem memoization."
      ],
      codeTemplates: {
        python: `# Auto-synced from ${item.site} for ${item.comp} (${item.diff})\nclass Solution:\n    def solve${newId}(self, latencies: list[int], threshold: int) -> int:\n        # TODO: Implement optimal ${item.category} algorithm\n        pass`,
        java: `// Auto-synced from ${item.site} for ${item.comp} (${item.diff})\nclass Solution {\n    public int solve${newId}(int[] latencies, int threshold) {\n        // TODO: Implement optimal ${item.category} algorithm\n        return 0;\n    }\n}`
      },
      testCases: [
        { id: 1, edgeCase: "Standard distribution", input: "[12, 45, 23, 89], 60", expected: "145", verified: false },
        { id: 2, edgeCase: "Single element", input: "[50], 30", expected: "50", verified: false },
        { id: 3, edgeCase: "Empty input", input: "[], 0", expected: "0", verified: false },
        { id: 4, edgeCase: "All identical values", input: "[40, 40, 40], 50", expected: "120", verified: false },
        { id: 5, edgeCase: "Already sorted", input: "[10, 20, 30, 40], 50", expected: "100", verified: false },
        { id: 6, edgeCase: "Reverse sorted", input: "[90, 70, 50, 30], 60", expected: "160", verified: false },
        { id: 7, edgeCase: "Duplicate values", input: "[25, 25, 50, 50], 40", expected: "150", verified: false },
        { id: 8, edgeCase: "Minimum constraint size", input: "[1], 1", expected: "1", verified: false },
        { id: 9, edgeCase: "All negative values", input: "[-10, -20, -30], -15", expected: "-60", verified: false },
        { id: 10, edgeCase: "Maximum constraint size", input: "[1..1000 items], 500", expected: "Optimal latency", verified: false }
      ]
    };
  });

  return scrapedQuestions;
}

// -----------------------------------------------------------------------------
// STUB 4: checkForBackgroundUpdates()
// SECURITY: hiding this in the UI is not sufficient — the backend API for these endpoints must independently verify admin role server-side before returning data, regardless of what the frontend requests.
// TODO: replace with real backend call to check background sync worker
// -----------------------------------------------------------------------------
function checkForBackgroundUpdates() {
  // Simulates automatic background job having run while user was away.
  // Note: Regular users still receive this toast so they know new questions are available!
  const newQuestions = PROBLEMS_DATA.filter(p => p.isNew);
  if (newQuestions.length > 0) {
    const sites = [...new Set(newQuestions.map(q => q.sourceSite || "LeetCode"))].join(", ");
    setTimeout(() => {
      showToast(`${newQuestions.length} new questions automatically synced from ${sites}.`, "sync");
      announce(`${newQuestions.length} new questions automatically synced from ${sites}.`);
    }, 750);
  }
}

// -----------------------------------------------------------------------------
// 8B. SYNC STATUS VIEW CONTROLLER & EVENT WIRING
// SECURITY: hiding this in the UI is not sufficient — the backend API for these endpoints must independently verify admin role server-side before returning data, regardless of what the frontend requests.
// -----------------------------------------------------------------------------
function initSyncStatus() {
  const modal = document.getElementById("modal-sync-status");
  const btnOpen = document.getElementById("btn-open-sync-status");
  const btnMobileOpen = document.getElementById("btn-mobile-sync-status");
  const btnClose = document.getElementById("btn-close-sync-status");
  const btnDone = document.getElementById("btn-done-sync");
  const btnViewNew = document.getElementById("btn-view-new-shortcut");
  const btnManualSync = document.getElementById("btn-manual-sync");
  const manualSyncIcon = document.getElementById("manual-sync-icon");
  const manualSyncText = document.getElementById("manual-sync-text");
  const progressBox = document.getElementById("sync-progress-box");
  const stepText = document.getElementById("sync-step-text");
  const stepPct = document.getElementById("sync-step-pct");
  const progressBar = document.getElementById("sync-progress-bar");
  const substepLabel = document.getElementById("sync-substep-label");

  let isSyncing = false;

  function renderSyncPanelContent() {
    const currentUser = getCurrentUser();
    const isAdmin = currentUser && currentUser.role === "admin";
    const info = getLastSyncInfo();
    const history = isAdmin ? getSyncHistory() : [];

    // Telemetry cards
    const lastRelEl = document.getElementById("sync-last-relative");
    const lastFullEl = document.getElementById("sync-last-full");
    const nextEl = document.getElementById("sync-next-countdown");
    const newCountEl = document.getElementById("sync-new-count-text");
    const headerBadge = document.getElementById("sync-header-badge");
    const mobileBadge = document.getElementById("mobile-sync-badge");

    if (lastRelEl) lastRelEl.textContent = info.lastSyncedRelative;
    if (lastFullEl) lastFullEl.textContent = info.lastSyncedDisplay;
    if (nextEl) nextEl.textContent = info.nextSyncCountdown;
    if (newCountEl) newCountEl.textContent = `${info.newCountSinceVisit} questions`;

    const badgeText = `${info.newCountSinceVisit} new`;
    if (headerBadge) {
      headerBadge.textContent = badgeText;
      headerBadge.style.display = (isAdmin && info.newCountSinceVisit > 0) ? "inline-block" : "none";
    }
    if (mobileBadge) {
      mobileBadge.textContent = badgeText;
      mobileBadge.style.display = (isAdmin && info.newCountSinceVisit > 0) ? "inline-block" : "none";
    }

    // Monitored sources grid
    const sourcesGrid = document.getElementById("sync-sources-grid");
    if (sourcesGrid) {
      sourcesGrid.innerHTML = info.sites.map(site => `
        <div class="p-3 rounded-xl bg-surface-container border border-surface-container-high flex flex-col gap-1.5 transition-colors hover:border-primary/40">
          <div class="flex items-center justify-between">
            <span class="font-medium text-sm text-on-surface">${site.name}</span>
            <span class="flex items-center gap-1.5 text-[11px] font-mono text-primary">
              <span class="w-2 h-2 rounded-full bg-primary inline-block ${site.status === 'ok' ? 'animate-pulse' : 'bg-error'}"></span>
              ${site.status === "ok" ? "Healthy (200)" : "Error"}
            </span>
          </div>
          <div class="flex items-center justify-between text-[11px] text-on-surface-variant">
            <span>${site.cadence}</span>
            <span class="font-mono tabular-nums text-on-surface/80">${site.questionsTracked} tracked</span>
          </div>
        </div>
      `).join("");
    }

    // Gated Elements: "Sync now" button and entire sync run history log
    const syncHistorySection = document.getElementById("sync-history-section");
    const historyList = document.getElementById("sync-history-list");
    const restrictedNotice = document.getElementById("sync-admin-restricted-notice");

    if (isAdmin) {
      if (syncHistorySection) {
        syncHistorySection.style.display = "";
        syncHistorySection.classList.remove("hidden");
        syncHistorySection.removeAttribute("aria-hidden");
      }
      if (btnManualSync) {
        btnManualSync.style.display = "";
        btnManualSync.classList.remove("hidden");
        btnManualSync.removeAttribute("aria-hidden");
      }
      if (restrictedNotice) {
        restrictedNotice.style.display = "none";
        restrictedNotice.classList.add("hidden");
      }
      if (historyList) {
        historyList.innerHTML = history.map(item => `
          <div class="p-2.5 rounded-lg bg-surface-container/70 border border-surface-container-high/60 flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="material-symbols-outlined text-[16px] text-primary shrink-0">check_circle</span>
              <div class="min-w-0">
                <div class="font-medium text-on-surface truncate">${item.summary}</div>
                <div class="text-[11px] text-on-surface-variant font-mono">${item.timestamp} • ${item.sitesChecked.length} sites checked</div>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-semibold whitespace-nowrap shrink-0">
              +${item.questionsAdded} added
            </span>
          </div>
        `).join("");
      }
    } else {
      // Non-admin: hide "Sync now" and the entire sync history log
      if (syncHistorySection) {
        syncHistorySection.style.display = "none";
        syncHistorySection.classList.add("hidden");
        syncHistorySection.setAttribute("aria-hidden", "true");
      }
      if (btnManualSync) {
        btnManualSync.style.display = "none";
        btnManualSync.classList.add("hidden");
        btnManualSync.setAttribute("aria-hidden", "true");
      }
      if (restrictedNotice) {
        restrictedNotice.style.display = "flex";
        restrictedNotice.classList.remove("hidden");
      }
      if (historyList) {
        historyList.innerHTML = "";
      }
    }
  }

  // Expose renderSyncPanelContent on window so applyRoleGating can re-render if modal open
  window.renderSyncPanelContent = renderSyncPanelContent;

  function openSyncModal() {
    if (!modal) return;
    renderSyncPanelContent();
    modal.classList.add("open");
    announce("Sync Status panel opened");
  }

  function closeSyncModal() {
    if (!modal) return;
    modal.classList.remove("open");
  }

  if (btnOpen) btnOpen.addEventListener("click", openSyncModal);
  if (btnMobileOpen) btnMobileOpen.addEventListener("click", openSyncModal);
  if (btnClose) btnClose.addEventListener("click", closeSyncModal);
  if (btnDone) btnDone.addEventListener("click", closeSyncModal);

  // "View new" shortcut filters problem catalog table
  if (btnViewNew) {
    btnViewNew.addEventListener("click", () => {
      AppState.filterOnlyNew = true;
      closeSyncModal();
      navigateTo("problems");
      renderProblemsTable();
      showToast("Filtered by newly synced questions", "filter_list");
    });
  }

  // "Sync now" manual override trigger (Admin role enforced)
  if (btnManualSync) {
    btnManualSync.addEventListener("click", async () => {
      const currentUser = getCurrentUser();
      if (!currentUser || currentUser.role !== "admin") {
        showToast("Unauthorized: Admin role required to trigger manual sync.", "error");
        return;
      }

      if (isSyncing) return;
      isSyncing = true;
      btnManualSync.disabled = true;
      if (manualSyncIcon) {
        manualSyncIcon.classList.add("animate-spin");
      }
      if (manualSyncText) manualSyncText.textContent = "Syncing...";
      if (progressBox) progressBox.classList.remove("hidden");

      try {
        const newQuestions = await triggerManualSync((step) => {
          if (stepText) stepText.textContent = step.text;
          if (stepPct) stepPct.textContent = `${step.pct}%`;
          if (progressBar) progressBar.style.width = `${step.pct}%`;
          if (substepLabel) substepLabel.textContent = step.sub;
        });

        // Ingest into PROBLEMS_DATA
        newQuestions.forEach(q => PROBLEMS_DATA.unshift(q));

        // Update run history
        const sites = [...new Set(newQuestions.map(q => q.sourceSite))];
        const newRun = {
          id: `sync-run-${Date.now()}`,
          timestamp: "Just now",
          relativeTime: "Just now",
          sitesChecked: ["LeetCode", "GeeksforGeeks", "HackerRank", "InterviewBit", "Codeforces"],
          questionsAdded: newQuestions.length,
          status: "Success",
          summary: `${newQuestions.length} new questions synced on-demand (${sites.join(", ")})`
        };
        SYNC_HISTORY_DATA.unshift(newRun);

        // Update current sync info
        CURRENT_SYNC_INFO.lastSyncedAt = new Date().toISOString();
        CURRENT_SYNC_INFO.lastSyncedRelative = "Synced just now";
        CURRENT_SYNC_INFO.lastSyncedDisplay = "Just now (manual run)";

        // Refresh UI
        renderSyncPanelContent();
        renderProblemsTable();

        showToast(`${newQuestions.length} new questions added from ${sites.join(", ")}.`, "sync");
        announce(`${newQuestions.length} new questions added from ${sites.join(", ")}.`);

      } catch (err) {
        console.error("Sync error:", err);
        showToast("Sync encountered an error.", "error");
      } finally {
        setTimeout(() => {
          if (progressBox) progressBox.classList.add("hidden");
          if (manualSyncIcon) manualSyncIcon.classList.remove("animate-spin");
          if (manualSyncText) manualSyncText.textContent = "Sync now";
          btnManualSync.disabled = false;
          isSyncing = false;
        }, 600);
      }
    });
  }

  // Initial render of panel content & apply role gating
  renderSyncPanelContent();
  applyRoleGating();
}

// =============================================================================
// 9. QUICK SEARCH COMMAND PALETTE (⌘K / Keyboard Shortcuts)
// =============================================================================
function initQuickSearch() {
  const modal = document.getElementById("modal-quick-search");
  const btnTrigger = document.getElementById("btn-search-trigger");
  const input = document.getElementById("quick-palette-input");
  const resultsContainer = document.getElementById("quick-palette-results");

  function openPalette() {
    if (!modal || !input) return;
    modal.classList.add("open");
    input.value = "";
    renderPaletteResults("");
    setTimeout(() => input.focus(), 50);
    announce("Quick search palette opened");
  }

  function closePalette() {
    if (!modal) return;
    modal.classList.remove("open");
  }

  function renderPaletteResults(query) {
    if (!resultsContainer) return;
    const q = query.toLowerCase().trim();
    const matches = PROBLEMS_DATA.filter(p =>
      !q || p.number.includes(q) || p.title.toLowerCase().includes(q) || p.topics.some(t => t.toLowerCase().includes(q))
    ).slice(0, 8);

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div class="p-3 text-center text-on-surface-variant">No matching problems found.</div>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <button data-quick-solve="${p.id}" class="w-full p-2 rounded-lg hover:bg-surface-container flex items-center justify-between text-left group transition-colors">
        <div class="flex items-center gap-2">
          <span class="font-code-md text-on-surface-variant font-mono text-xs w-8">#${p.number}</span>
          <span class="text-on-surface group-hover:text-primary font-medium transition-colors">${p.title}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs ${p.difficulty === 'Easy' ? 'text-primary' : p.difficulty === 'Medium' ? 'text-secondary' : 'text-tertiary'}">${p.difficulty}</span>
          <span class="text-[11px] text-on-surface-variant px-1.5 py-0.5 rounded bg-surface-container-high">${p.topicCategory || p.topics[0]}</span>
        </div>
      </button>
    `).join("");
  }

  if (btnTrigger) btnTrigger.addEventListener("click", openPalette);

  if (input) {
    input.addEventListener("input", e => {
      renderPaletteResults(e.target.value);
    });
  }

  // Click on quick result
  if (resultsContainer) {
    resultsContainer.addEventListener("click", e => {
      const btn = e.target.closest("[data-quick-solve]");
      if (btn) {
        const id = parseInt(btn.getAttribute("data-quick-solve"), 10);
        closePalette();
        loadProblemInWorkspace(id);
      }
    });
  }

  // Global Hotkey Listener (⌘K, Ctrl+K, /, Escape)
  window.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      openPalette();
    } else if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      openPalette();
    } else if (e.key === "Escape") {
      closePalette();
      const syncModal = document.getElementById("modal-sync-status");
      if (syncModal) syncModal.classList.remove("open");
    }
  });

  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) closePalette();
    });
  }
}

// =============================================================================
// 10. DAILY CHALLENGE LIVE COUNTDOWN TIMER
// =============================================================================
function initDailyTimer() {
  const timerEl = document.getElementById("daily-countdown");
  if (!timerEl) return;

  // 8h 22m 14s initial countdown
  let totalSeconds = 8 * 3600 + 22 * 60 + 14;

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;
      timerEl.textContent = `${String(hrs).padStart(2, "0")}h : ${String(mins).padStart(2, "0")}m : ${String(secs).padStart(2, "0")}s`;
    }
  }, 1000);
}



