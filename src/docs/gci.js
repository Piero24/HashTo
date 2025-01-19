// https://github.com/dipjul/Grokking-the-Coding-Interview-Patterns-for-Coding-Questions?tab=readme-ov-file
// https://www.designgurus.io/course-play/grokking-the-coding-interview/doc
// https://github.com/AAdewunmi/Grokking-the-Coding-Interview-Patterns-for-Coding-Questions

export const gci_questions = [
    {
        id: 0,
        category_title: "Warmup",
        category: [
            {
                id: 0,
                number: 1.1,
                question_title: "Contains Duplicate",
                is_on_leetcode: true,
                leetcode_number: 217,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 1.2,
                question_title: "Pangram",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 1.3,
                question_title: "Reverse Vowels",
                is_on_leetcode: true,
                leetcode_number: 345,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 1.4,
                question_title: "Valid Palindrome",
                is_on_leetcode: true,
                leetcode_number: 125,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 1.5,
                question_title: "Valid Anagram",
                is_on_leetcode: true,
                leetcode_number: 242,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 1.6,
                question_title: "Shortest Word Distance",
                is_on_leetcode: true,
                leetcode_number: 243,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 1.7,
                question_title: "Number of Good Pairs",
                is_on_leetcode: true,
                leetcode_number: 1512,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 7,
                number: 1.8,
                question_title: "Sqrt",
                is_on_leetcode: true,
                leetcode_number: 69,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 1,
        category_title: "Two Pointers",
        category: [
            {
                id: 0,
                number: 2.1,
                question_title: "Pair with Target Sum",
                is_on_leetcode: true,
                leetcode_number: 1,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 2.2,
                question_title: "Remove Duplicates",
                is_on_leetcode: true,
                leetcode_number: 26,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 2.3,
                question_title: "Squaring a Sorted Array",
                is_on_leetcode: true,
                leetcode_number: 977,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 2.4,
                question_title: "Triplet Sum to Zero",
                is_on_leetcode: true,
                leetcode_number: 15,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 2.5,
                question_title: "Triplet Sum Close to Target",
                is_on_leetcode: true,
                leetcode_number: 16,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 5,
                number: 2.6,
                question_title: "Triplets with Smaller Sum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: true,
                similar_questions: [
                    {
                        id: 0,
                        leetcode_number: 217, // 3Sum Smaller
                    },
                ],
            },
            {
                id: 6,
                number: 2.7,
                question_title: "Subarrays with Product Less than a Target ",
                is_on_leetcode: true,
                leetcode_number: 713,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 7,
                number: 2.8,
                question_title: "Dutch National Flag Problem",
                is_on_leetcode: true,
                leetcode_number: 75,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 8,
                number: 2.9,
                question_title: "Problem Challenge 1: Quadruple Sum to Target",
                is_on_leetcode: true,
                leetcode_number: 18,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 9,
                number: 2.10,
                question_title: "Problem Challenge 2: Comparing Strings containing Backspaces",
                is_on_leetcode: true,
                leetcode_number: 844,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 10,
                number: 2.11,
                question_title: "Problem Challenge 3: Minimum Window Sort",
                is_on_leetcode: true,
                leetcode_number: 581,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 2,
        category_title: "Fast & Slow pointers",
        category: [
            {
                id: 0,
                number: 3.1,
                question_title: "LinkedList Cycle",
                is_on_leetcode: true,
                leetcode_number: 141,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 3.2,
                question_title: "Start of LinkedList Cycle",
                is_on_leetcode: true,
                leetcode_number: 142,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 3.3,
                question_title: "Happy Number",
                is_on_leetcode: true,
                leetcode_number: 202,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 3.4,
                question_title: "Middle of the LinkedList",
                is_on_leetcode: true,
                leetcode_number: 876,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 3.5,
                question_title: "Problem Challenge 1: Palindrome LinkedList",
                is_on_leetcode: true,
                leetcode_number: 234,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 5,
                number: 3.6,
                question_title: "Problem Challenge 2: Rearrange a LinkedList",
                is_on_leetcode: true,
                leetcode_number: 143,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 6,
                number: 3.7,
                question_title: "Problem Challenge 3: Cycle in a Circular Array",
                is_on_leetcode: true,
                leetcode_number: 457,
                have_similar_questions: false,
                similar_questions: [],
            }
        ],
    },
    {
        id: 3,
        category_title: "Sliding Window",
        category: [
            {
                id: 0,
                number: 4.1,
                question_title: "Maximum Sum Subarray of Size K",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 4.2,
                question_title: "Smallest Subarray with a given sum",
                is_on_leetcode: true,
                leetcode_number: 209,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 4.3,
                question_title: "Longest Substring with K Distinct Characters",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: true,
                similar_questions: [
                    {
                        id: 0,
                        leetcode_number: 3, // Longest Substring Without Repeating Characters
                    },
                    {
                        id: 1,
                        leetcode_number: 340, // Longest Substring with At Most K Distinct Characters
                    },
                    {
                        id: 2,
                        leetcode_number: 395, // Longest Substring with At Least K Repeating Characters
                    },
                ],
            },
            {
                id: 3,
                number: 4.4,
                question_title: "Fruits into Baskets",
                is_on_leetcode: true,
                leetcode_number: 904,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 4.5,
                question_title: "No-repeat Substring",
                is_on_leetcode: true,
                leetcode_number: 3,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 5,
                number: 4.6,
                question_title: "Longest Substring with Same Letters after Replacement",
                is_on_leetcode: true,
                leetcode_number: 424,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 6,
                number: 4.7,
                question_title: "Longest Subarray with Ones after Replacement",
                is_on_leetcode: true,
                leetcode_number: 1004,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 7,
                number: 4.8,
                question_title: "Problem Challenge 1: Permutation in a String",
                is_on_leetcode: true,
                leetcode_number: 567,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 8,
                number: 4.9,
                question_title: "Problem Challenge 2: String Anagrams",
                is_on_leetcode: true,
                leetcode_number: 438,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 9,
                number: 4.10,
                question_title: "Problem Challenge 3: Smallest Window containing Substring",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: true,
                similar_questions: [
                    {
                        id: 0,
                        leetcode_number: 76, // Minimum Window Substring
                    },
                ],
            },
            {
                id: 10,
                number: 4.11,
                question_title: "Problem Challenge 4: Words Concatenation",
                is_on_leetcode: true,
                leetcode_number: 30,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 4,
        category_title: "Merge Intervals",
        category: [
            {
                id: 0,
                number: 5.1,
                question_title: "Merge Intervals",
                is_on_leetcode: true,
                leetcode_number: 56,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 5.2,
                question_title: "Insert Interval",
                is_on_leetcode: true,
                leetcode_number: 57,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 5.3,
                question_title: "Intervals Intersection",
                is_on_leetcode: true,
                leetcode_number: 986,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 5.4,
                question_title: "Conflicting Appointments",
                is_on_leetcode: true,
                leetcode_number: 252,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 5.5,
                question_title: "Problem Challenge 1: Minimum Meeting Rooms",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: true,
                similar_questions: [
                    {
                        id: 0,
                        leetcode_number: 253, // Meeting Rooms II
                    },
                    {
                        id: 1,
                        leetcode_number: 2402, // Meeting Rooms III
                    },
                ],
            },
            {
                id: 5,
                number: 5.6,
                question_title: "Problem Challenge 2: Maximum CPU Load",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 6,
                number: 5.7,
                question_title: "Problem Challenge 3: Employee Free Time",
                is_on_leetcode: true,
                leetcode_number: 759,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 5,
        category_title: "Cyclic Sort",
        category: [
            {
                id: 0,
                number: 6.1,
                question_title: "Cyclic Sort",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 6.2,
                question_title: "Find the Missing Number",
                is_on_leetcode: true,
                leetcode_number: 268,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 6.3,
                question_title: "Find all Missing Numbers",
                is_on_leetcode: true,
                leetcode_number: 448,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 6.4,
                question_title: "Find the Duplicate Number",
                is_on_leetcode: true,
                leetcode_number: 287,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 6.5,
                question_title: "Find all Duplicate Numbers",
                is_on_leetcode: true,
                leetcode_number: 442,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 5,
                number: 6.6,
                question_title: "Problem Challenge 1: Find the Corrupt Pair",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 6,
                number: 6.7,
                question_title: "Problem Challenge 2: Find the Smallest Missing Positive Number",
                is_on_leetcode: true,
                leetcode_number: 41,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 7,
                number: 6.8,
                question_title: "Problem Challenge 3: Find the First K Missing Positive Numbers",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 6,
        category_title: "In-place Reversal of a LinkedList",
        category: [
            {
                id: 0,
                number: 7.1,
                question_title: "Reverse a LinkedList",
                is_on_leetcode: true,
                leetcode_number: 206,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 7.2,
                question_title: "Reverse a Sub-list",
                is_on_leetcode: true,
                leetcode_number: 92,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 7.3,
                question_title: "Reverse every K-element Sub-list",
                is_on_leetcode: true,
                leetcode_number: 25,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 7.4,
                question_title: "Problem Challenge 1: Reverse alternating K-element Sub-list",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 7.5,
                question_title: "Problem Challenge 2: Rotate a LinkedList",
                is_on_leetcode: true,
                leetcode_number: 61,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 7,
        category_title: "Stack",
        category: [
            {
                id: 0,
                number: 8.1,
                question_title: "Balanced Parentheses",
                is_on_leetcode: true,
                leetcode_number: 20,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 8.2,
                question_title: "Reverse a String",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 8.3,
                question_title: "Decimal to Binary Conversion",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 8.4,
                question_title: "Next Greater Element",
                is_on_leetcode: true,
                leetcode_number: 496,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 8.5,
                question_title: "Sorting a Stack",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 5,
                number: 8.6,
                question_title: "Simplify Path",
                is_on_leetcode: true,
                leetcode_number: 71,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 8,
        category_title: "Monotonic Stack",
        category: [
            {
                id: 0,
                number: 9.1,
                question_title: "Next Greater Element",
                is_on_leetcode: true,
                leetcode_number: 496,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 9.2,
                question_title: "Daily Temperatures",
                is_on_leetcode: true,
                leetcode_number: 739,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 9.3,
                question_title: "Remove Nodes From Linked List",
                is_on_leetcode: true,
                leetcode_number: 2487,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 9.4,
                question_title: "Remove All Adjacent Duplicates In String",
                is_on_leetcode: true,
                leetcode_number: 1047,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 9.5,
                question_title: "Remove All Adjacent Duplicates in String II",
                is_on_leetcode: true,
                leetcode_number: 1209,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 5,
                number: 9.6,
                question_title: "Remove K Digits",
                is_on_leetcode: true,
                leetcode_number: 402,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 9,
        category_title: "Hash Maps",
        category: [
            {
                id: 0,
                number: 10.1,
                question_title: "First Non-repeating Character",
                is_on_leetcode: true,
                leetcode_number: 387,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 10.2,
                question_title: "Largest Unique Number",
                is_on_leetcode: true,
                leetcode_number: 1133,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 2,
                number: 10.3,
                question_title: "Maximum Number of Balloons",
                is_on_leetcode: true,
                leetcode_number: 1189,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 3,
                number: 10.4,
                question_title: "Longest Palindrome",
                is_on_leetcode: true,
                leetcode_number: 409,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 4,
                number: 10.5,
                question_title: "Ransom Note",
                is_on_leetcode: true,
                leetcode_number: 383,
                have_similar_questions: false,
                similar_questions: [],
            },
        ],
    },
    {
        id: 10,
        category_title: "Tree Breadth First Search",
        category: [
            {
                id: 0,
                number: 11.1,
                question_title: "Binary Tree Level Order Traversal",
                is_on_leetcode: true,
                leetcode_number: 102,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 11.2,
                question_title: "Reverse Level Order Traversal",
                is_on_leetcode: true,
                leetcode_number: 107,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 11.3,
                question_title: "Zigzag Traversal",
                is_on_leetcode: true,
                leetcode_number: 103,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 11.4,
                question_title: "Level Averages in a Binary Tree",
                is_on_leetcode: true,
                leetcode_number: 637,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 11.5,
                question_title: "Minimum Depth of a Binary Tree",
                is_on_leetcode: true,
                leetcode_number: 111,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 11.6,
                question_title: "Maximum Depth of a Binary Tree",
                is_on_leetcode: true,
                leetcode_number: 104,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 11.7,
                question_title: "Level Order Successor",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 7,
                number: 11.8,
                question_title: "Connect Level Order Siblings",
                is_on_leetcode: true,
                leetcode_number: 116,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 8,
                number: 11.9,
                question_title: "Problem Challenge 1: Connect All Level Order Siblings",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 9,
                number: 11.10,
                question_title: "Problem Challenge 2: Right View of a Binary Tree",
                is_on_leetcode: true,
                leetcode_number: 199,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 11,
        category_title: "Tree Depth First Search",
        category: [
            {
                id: 0,
                number: 12.1,
                question_title: "Binary Tree Path Sum",
                is_on_leetcode: true,
                leetcode_number: 112,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 12.2,
                question_title: "All Paths for a Sum",
                is_on_leetcode: true,
                leetcode_number: 437,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 12.3,
                question_title: "Sum of Path Numbers",
                is_on_leetcode: true,
                leetcode_number: 129,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 12.4,
                question_title: "Path With Given Sequence",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 12.5,
                question_title: "Count Paths for a Sum",
                is_on_leetcode: true,
                leetcode_number: 437,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 12.6,
                question_title: "Problem Challenge 1: Tree Diameter",
                is_on_leetcode: true,
                leetcode_number: 543,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 12.7,
                question_title: "Problem Challenge 2: Path with Maximum Sum",
                is_on_leetcode: true,
                leetcode_number: 124,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 12,
        category_title: "Graphs",
        category: [
            {
                id: 0,
                number: 13.1,
                question_title: "Graph Traversal: Depth First Search (DFS)",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 13.2,
                question_title: "Graph Traversal: Breadth First Search (BFS)",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 13.3,
                question_title: "Find if Path Exists in Graph",
                is_on_leetcode: true,
                leetcode_number: 1971,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 13.4,
                question_title: "Number of Provinces",
                is_on_leetcode: true,
                leetcode_number: 547,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 13.5,
                question_title: "Minimum Number of Vertices to Reach All Nodes",
                is_on_leetcode: true,
                leetcode_number: 1557,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 13,
        category_title: "Island (Matrix traversal)",
        category: [
            {
                id: 0,
                number: 14.1,
                question_title: "Number of Islands",
                is_on_leetcode: true,
                leetcode_number: 200,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 14.2,
                question_title: "Biggest Island",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 14.3,
                question_title: "Flood Fill",
                is_on_leetcode: true,
                leetcode_number: 733,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 14.4,
                question_title: "Number of Closed Islands",
                is_on_leetcode: true,
                leetcode_number: 1254,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 14.5,
                question_title: "Problem Challenge 1: ...",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 14.6,
                question_title: "Problem Challenge 2: ...",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 14.7,
                question_title: "Problem Challenge 3: ...",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 14,
        category_title: "Two Heaps",
        category: [
            {
                id: 0,
                number: 15.1,
                question_title: "Find the Median of a Number Stream",
                is_on_leetcode: true,
                leetcode_number: 295,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 15.2,
                question_title: "Sliding Window Median",
                is_on_leetcode: true,
                leetcode_number: 480,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 15.3,
                question_title: "Maximize Capital",
                is_on_leetcode: true,
                leetcode_number: 502,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 15.4,
                question_title: "Maximum Sum Combinations",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 15,
        category_title: "Subsets",
        category: [
            {
                id: 0,
                number: 16.1,
                question_title: "Subsets",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 16.2,
                question_title: "Subsets With Duplicates",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 16.3,
                question_title: "Permutations",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 16.4,
                question_title: "String Permutations by changing case",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 16.5,
                question_title: "Balanced Parentheses",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 16.6,
                question_title: "Unique Generalized Abbreviations",
                is_on_leetcode: true,
                leetcode_number: 320,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 16,
        category_title: "Modified Binary Search",
        category: [
            {
                id: 0,
                number: 17.1,
                question_title: "Order-agnostic Binary Search",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 17.2,
                question_title: "Ceiling of a Number",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 17.3,
                question_title: "Next Letter",
                is_on_leetcode: true,
                leetcode_number: 744,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 17.4,
                question_title: "Number Range",
                is_on_leetcode: true,
                leetcode_number: 34,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 17.5,
                question_title: "Search in a Sorted Infinite Array",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 17.6,
                question_title: "Minimum Difference Element",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 17.7,
                question_title: "Bitonic Array Maximum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 7,
                number: 17.8,
                question_title: "Problem Challenge 1: Search Bitonic Array",
                is_on_leetcode: true,
                leetcode_number: 1095,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 8,
                number: 17.9,
                question_title: "Problem Challenge 2: Search in Rotated Array",
                is_on_leetcode: true,
                leetcode_number: 33,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 9,
                number: 17.10,
                question_title: "Problem Challenge 3: Rotation Count",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
        ],
    },
    {
        id: 17,
        category_title: "Bitwise XOR",
        category: [
            {
                id: 0,
                number: 18.1,
                question_title: "Single Number",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 18.2,
                question_title: "Two Single Numbers",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 18.3,
                question_title: "Complement of Base 10 Number",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 18.4,
                question_title: "Problem Challenge 1: Flip and Invert an Image",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 18,
        category_title: "Top 'K' Elements",
        category: [
            {
                id: 0,
                number: 19.1,
                question_title: "Top 'K' Numbers",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 19.2,
                question_title: "Kth Smallest Number",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 19.3,
                question_title: "'K' Closest Points to the Origin",
                is_on_leetcode: true,
                leetcode_number: 973,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 19.4,
                question_title: "Connect Ropes",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 19.5,
                question_title: "Top 'K' Frequent Numbers",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 19.6,
                question_title: "Frequency Sort",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 19.7,
                question_title: "Kth Largest Number in a Stream",
                is_on_leetcode: true,
                leetcode_number: 703,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 7,
                number: 19.8,
                question_title: "'K' Closest Numbers",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 8,
                number: 19.9,
                question_title: "Maximum Distinct Elements",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 9,
                number: 19.10,
                question_title: "Sum of Elements",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 10,
                number: 19.11,
                question_title: "Rearrange String",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 11,
                number: 19.12,
                question_title: "Problem Challenge 1: Rearrange String K Distance Apart",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 12,
                number: 19.13,
                question_title: "Problem Challenge 2: Scheduling Tasks",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 13,
                number: 19.14,
                question_title: "Problem Challenge 3: Frequency Stack",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
        ],
    },
    {
        id: 19,
        category_title: "K-way Merge",
        category: [
            {
                id: 0,
                number: 20.1,
                question_title: "Merge K Sorted Lists",
                is_on_leetcode: true,
                leetcode_number: 23,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 20.2,
                question_title: "Kth Smallest Number in M Sorted Lists",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 20.3,
                question_title: "Kth Smallest Number in a Sorted Matrix",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 20.4,
                question_title: "Smallest Number Range",
                is_on_leetcode: true,
                leetcode_number: 632,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 20.5,
                question_title: "Problem Challenge 1: K Pairs with Largest Sums",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 20,
        category_title: "Greedy Algorithms",
        category: [
            {
                id: 0,
                number: 21.1,
                question_title: "Valid Palindrome II",
                is_on_leetcode: true,
                leetcode_number: 680,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 21.2,
                question_title: "Maximum Length of Pair Chain",
                is_on_leetcode: true,
                leetcode_number: 646,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 21.3,
                question_title: "Minimum Add to Make Parentheses Valid",
                is_on_leetcode: true,
                leetcode_number: 921,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 21.4,
                question_title: "Remove Duplicate Letters",
                is_on_leetcode: true,
                leetcode_number: 316,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 21.5,
                question_title: "Largest Palindromic Number",
                is_on_leetcode: true,
                leetcode_number: 2384,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 21.6,
                question_title: "Removing Minimum and Maximum From Array",
                is_on_leetcode: true,
                leetcode_number: 2091,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 21,
        category_title: "0/1 Knapsack (Dynamic Programming)",
        category: [
            {
                id: 0,
                number: 22.1,
                question_title: "0/1 Knapsack",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 22.2,
                question_title: "Equal Subset Sum Partition",
                is_on_leetcode: true,
                leetcode_number: 416,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 22.3,
                question_title: "Subset Sum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 22.4,
                question_title: "Minimum Subset Sum Difference",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 22.5,
                question_title: "Problem Challenge 1: Count of Subset Sum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 22.6,
                question_title: "Problem Challenge 2: Target Sum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 22,
        category_title: "Backtracking",
        category: [
            {
                id: 0,
                number: 23.1,
                question_title: "Combination Sum",
                is_on_leetcode: true,
                leetcode_number: 39,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 23.2,
                question_title: "Word Search",
                is_on_leetcode: true,
                leetcode_number: 79,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 23.3,
                question_title: "Sudoku Solver",
                is_on_leetcode: true,
                leetcode_number: 37,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 23.4,
                question_title: "Factor Combinations",
                is_on_leetcode: true,
                leetcode_number: 254,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 23.5,
                question_title: "Split a String Into the Max Number of Unique Substrings",
                is_on_leetcode: true,
                leetcode_number: 1593,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 23,
        category_title: "Trie",
        category: [
            {
                id: 0,
                number: 24.1,
                question_title: "Implement Trie (Prefix Tree)",
                is_on_leetcode: true,
                leetcode_number: 208,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 24.2,
                question_title: "Index Pairs of a String",
                is_on_leetcode: true,
                leetcode_number: 1065,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 24.3,
                question_title: "Design Add and Search Words Data Structure",
                is_on_leetcode: true,
                leetcode_number: 211,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 24.4,
                question_title: "Extra Characters in a String",
                is_on_leetcode: true,
                leetcode_number: 2707,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 24.5,
                question_title: "Search Suggestions System",
                is_on_leetcode: true,
                leetcode_number: 1268,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 24,
        category_title: "Topological Sort (Graph)",
        category: [
            {
                id: 0,
                number: 25.1,
                question_title: "Topological Sort",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 25.2,
                question_title: "Tasks Scheduling",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 25.3,
                question_title: "Tasks Scheduling Order",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 25.4,
                question_title: "All Tasks Scheduling Orders",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: true,
                similar_questions: [
                    {
                        id: 0,
                        leetcode_number: 210, // Course Schedule II
                    },
                ]
            },
            {
                id: 4,
                number: 25.5,
                question_title: "Alien Dictionary",
                is_on_leetcode: true,
                leetcode_number: 269,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 25.6,
                question_title: "Problem Challenge 1: Reconstructing a Sequence",
                is_on_leetcode: true,
                leetcode_number: 444,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 25.7,
                question_title: "Problem Challenge 2: Minimum Height Trees",
                is_on_leetcode: true,
                leetcode_number: 310,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 25,
        category_title: "Union Find",
        category: [
            {
                id: 0,
                number: 26.1,
                question_title: "Redundant Connection",
                is_on_leetcode: true,
                leetcode_number: 684,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 26.2,
                question_title: "Number of Provinces",
                is_on_leetcode: true,
                leetcode_number: 547,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 26.3,
                question_title: "Is Graph Bipartite?",
                is_on_leetcode: true,
                leetcode_number: 785,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 26.4,
                question_title: "Path With Minimum Effort",
                is_on_leetcode: true,
                leetcode_number: 1631,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 26,
        category_title: "Ordered Set",
        category: [
            {
                id: 0,
                number: 27.1,
                question_title: "Merge Similar Items",
                is_on_leetcode: true,
                leetcode_number: 2363,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 27.2,
                question_title: "132 Pattern",
                is_on_leetcode: true,
                leetcode_number: 456,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 27.3,
                question_title: "My Calendar I",
                is_on_leetcode: true,
                leetcode_number: 729,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 27.4,
                question_title: "Longest Continuous Subarray",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 27,
        category_title: "Prefix Sum",
        category: [
            {
                id: 0,
                number: 28.1,
                question_title: "Find the Middle Index in Array",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 28.2,
                question_title: "Left and Right Sum Differences",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 28.3,
                question_title: "Maximum Size Subarray Sum Equals k",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 28.4,
                question_title: "Binary Subarrays With Sum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 28.5,
                question_title: "Subarray Sums Divisible by K",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 28.6,
                question_title: "Sum of Absolute Differences in a Sorted Array",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 28.7,
                question_title: "Subarray Sum Equals K",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 28,
        category_title: "Multi-threaded",
        category: [
            {
                id: 0,
                number: 29.1,
                question_title: "Same Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 29.2,
                question_title: "Invert Binary Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 29.3,
                question_title: "Binary Search Tree Iterator",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
        ],
    },
    {
        id: 29,
        category_title: "Miscellaneous",
        category: [
            {
                id: 0,
                number: 30.1,
                question_title: "Kth Smallest Number",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
        ],
    },
    // {
    //     id: 30,
    //     category_title: "Revision",
    //     category: [],
    // },
    {
        id: 31,
        category_title: "Test Your Knowledge (Easy)",
        category: [
            {
                id: 0,
                number: 32.1,
                question_title: "Two Sum",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 32.2,
                question_title: "Valid Perfect Square",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 32.3,
                question_title: "Best Time to Buy and Sell",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 32.4,
                question_title: "Valid Parentheses",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 32.5,
                question_title: "Subtree of Another Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 32,
        category_title: "Test Your Knowledge (Medium)",
        category: [
            {
                id: 0,
                number: 33.1,
                question_title: "Daily Temperatures",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 33.2,
                question_title: "Group Anagrams",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 2,
                number: 33.3,
                question_title: "Decode String",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 3,
                number: 33.4,
                question_title: "Valid Sudoku",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 4,
                number: 33.5,
                question_title: "Product of Array Except Self",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 5,
                number: 33.6,
                question_title: "Maximum Product Subarray",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 6,
                number: 33.7,
                question_title: "Container With Most Water",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 7,
                number: 33.8,
                question_title: "Palindromic Substrings",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 8,
                number: 33.9,
                question_title: "Remove Nth Node From End of List",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 9,
                number: 33.10,
                question_title: "Find Minimum in Rotated Sorted Array",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 10,
                number: 33.11,
                question_title: "Pacific Atlantic Water Flow",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 11,
                number: 33.12,
                question_title: "Validate Binary Search Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 12,
                number: 33.13,
                question_title: "Construct Binary Tree from Preorder and Inorder Traversal",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 13,
                number: 33.14,
                question_title: "Clone Graph",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 14,
                number: 33.15,
                question_title: "House Robber II",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 15,
                number: 33.16,
                question_title: "Decode Ways",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 16,
                number: 33.17,
                question_title: "Unique Paths",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 17,
                number: 33.18,
                question_title: "Word Break",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 18,
                number: 33.19,
                question_title: "Lowest Common Ancestor of a Binary Search Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 19,
                number: 33.20,
                question_title: "Longest Consecutive Sequence",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 20,
                number: 33.21,
                question_title: "Meeting Rooms II",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 21,
                number: 33.22,
                question_title: "Encode and Decode Strings",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 22,
                number: 33.23,
                question_title: "Number of Connected Components in an Undirected Graph",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 23,
                number: 33.24,
                question_title: "Graph Valid Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 24,
                number: 33.25,
                question_title: "Implement Trie (Prefix Tree)",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 25,
                number: 33.26,
                question_title: "Design Add and Search Words Data Structure",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    },
    {
        id: 33,
        category_title: "Test Your Knowledge (Hard)",
        category: [
            {
                id: 0,
                number: 34.1,
                question_title: "Longest Valid Parentheses",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            },
            {
                id: 1,
                number: 34.2,
                question_title: "Serialize and Deserialize Binary Tree",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: []
            }
        ],
    }
]











