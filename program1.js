function longestSubstring(s) {
    // Implementation of longestSubstring function
}

module.exports = { longestSubstring };

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}
