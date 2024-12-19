# How to Contribute:

There are several ways to contribute to this project. The simplest one, which requires minimal explanation, involves maintaining the website’s code to make it as clean and readable as possible. 🧹✨ If there are new features to add, we can discuss whether they comply with copyright laws and are technically feasible. 💬📜

## Contributing by adding missing questions and videos
The first of the two most straightforward and much-needed methods is contributing by adding missing questions and videos for the books or courses already listed. 📚🎥 This is easy to do:

1. Navigate to the docs folder.
2. Open the file corresponding to the book or course you want to contribute to.
3. Add the LeetCode problem number that matches the question, and/or include similar questions if an exact match doesn’t exist.

For example, let’s say you want to add the LeetCode question for `Check Permutation` which is question `1.2` in the book **Cracking the coding Interview**:
- Go to `docs` -> `Cracking the Coding Interview (ctci.js)` -> `0 Arrays and Strings` -> `1.2 Check Permutation`.
- You will see something like the snippet below:

```js
{
    id: 1,
    number: 1.2,
    question_title: "Check Permutation",
    is_on_leetcode: false,
    leetcode_number: null,
    have_similar_questions: false,
    similar_questions: [],
},
```
To complete this, simply modify the `is_on_leetcode` field from `false` to `true` and add the corresponding LeetCode question number (in this case, `567`). ✏️✅

The result will look like this:

```js
{
    id: 1,
    number: 1.2,
    question_title: "Check Permutation",
    is_on_leetcode: true,
    leetcode_number: 567,
    have_similar_questions: false,
    similar_questions: [],
},
```

If there isn’t an exact match for the question but there are similar ones, simply change the `have_similar_questions` field from `false` to `true` and add the similar questions. 🔄📋

Here’s an example of how to do it:

```js
{
    id: 1,
    number: 1.2,
    question_title: "Check Permutation",
    is_on_leetcode: false,
    leetcode_number: null,
    have_similar_questions: true,
    similar_questions: [
        {
            id: 0,
            leetcode_number: 242, // Valid Anagram
        },
    ],
},
```

Remember to add a comment next to the number with the question’s name. 📝💡 You can also include both exact and similar questions. 


In this case, the result will look like this:

```js
{
    id: 1,
    number: 1.2,
    question_title: "Check Permutation",
    is_on_leetcode: true,
    leetcode_number: 567,
    have_similar_questions: true,
    similar_questions: [
        {
            id: 0,
            leetcode_number: 242, // Valid Anagram
        },
    ],
},
```


Once this is done, you’ll need to add the following information to the `leetcode.js` file:
- **id:** The question’s number.
- **category_title:** Leave it as "N/A" for now.
- **title:** The title of the question.
- **link:** The link to the question on LeetCode.
- **level:** The difficulty level of the question.
- **video:** The YouTube video link for the question.
- **premium:** Whether the question is premium on LeetCode or not.

**🗂️ Important:** Add the question in **numerical order based on its id**. For the video links, use YouTube channels in the following priority order:

1️⃣ NeetCode

2️⃣ Greg Hogg

3️⃣ Tech Dose

🎥 Why these channels?
- **NeetCode:** Currently considered one of the best resources available, offering highly detailed and well-explained videos covering a wide range of problems.
- **Greg Hogg:** Offers well-explained content with fewer videos compared to NeetCode.
- **Tech Dose:** Known for its very detailed explanations, though it has fewer videos overall.

#### 🛑 To maintain consistency and simplicity, avoid adding videos from other channels at this time.

The final result will look something like this:

```js
{
    id: 567,
    category_title: "N/A",
    title: "Permutation in String",
    link: "https://leetcode.com/problems/permutation-in-string/",
    level: "Medium",
    video: "https://www.youtube.com/watch?v=UbyhOgBN834&pp=ygUMbGVldGNvZGUgNTY3",
    premium: false,
},
```

Once you’ve completed the steps, you can create a pull request specifying which question you added (both the number and the title) and the book it was added to. 📄📚 If you’ve added multiple questions, include a list.

🎉 And that’s it! In just a few simple steps, you’ve successfully contributed to this project. 🚀👏

## Add a new book
The last method is to directly add a new book along with the corresponding mapping of questions and videos. 📘🛠️ The process is very similar:

1. Create a file with the abbreviation of the book’s title in the docs folder.
2. Create a list structured as follows:

```js
export const ctci_questions = [
    {
        id: 0,
        category_title: "Category Title 1",
        category: [
            {
                id: 0,
                number: 1.1,
                question_title: "Question Title 1 in the book",
                is_on_leetcode: false,
                leetcode_number: null,
                have_similar_questions: false,
                similar_questions: [],
            },
            {
                id: 1,
                number: 1.2,
                question_title: "Question Title 2 in the book",
                is_on_leetcode: true,
                leetcode_number: 567,
                have_similar_questions: true,
                similar_questions: [
                    {
                        id: 0,
                        leetcode_number: 242, // Valid Anagram
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        category_title: "Category Title 2",
        category: []
    }
]
```

Where:
- **category_title:** The title of the category.
- **category:** The list of questions.

If the question is on LeetCode, simply add its number. If there are similar questions, include the numbers of those LeetCode questions.
- If the question is not on LeetCode:
- Set is_on_leetcode to false.
- Set leetcode_number to null.
- If there are similar questions:
- Set have_similar_questions to true.
- Add the similar questions.

If both a LeetCode question and similar questions exist, set both `is_on_leetcode` and `have_similar_questions` to `true` and include the similar questions. 🔄

Once that’s done, you’ll need to add the book or course to the `books.js` file along with its corresponding image:

1️⃣ **Add the image:** Place it in the src/assets/webp folder (make sure it’s converted to .webp). 🖼️
2️⃣ **Update books.js:** Add an import for the image at the top of the file. For example:

```js
import ctciCover from '../assets/ctci.webp';
```
Next, you’ll need to add the book to the list of books by filling in the following fields:
- **id:** The book’s number (use the next number after the last one in the list).
- **title:** The book’s title.
- **authors:** The authors of the book (as a list).
- **short_intro:** A brief description of the book.
- **cover:** The book’s cover image (use the variable name of the previously imported image).
- **path:** The abbreviation of the book’s title, which you used to name the file containing the questions earlier.
- **intro:** A more detailed description of the book, written in multiple paragraphs if needed.
- **amazon:** A list of Amazon links for the following regions: `US`, `UK`, `DE`, `FR`, `IT`, `ES`. If the book isn’t available on Amazon, leave the list empty.
- **link:** A link to the book’s or course’s official website.
- **hidden:** Set to false.
- **map:** If adding a book or course, set this to true.

The final result will look something like this:

```js
id: 0,
title: "Cracking the Coding Interview",
authors: ["Gayle Laakmann McDowell"],
short_intro: "A comprehensive guide by Gayle Laakmann McDowell that prepares you for coding interviews",
cover: ctciCover,
path: "ctci",
intro: `
    <p>
        I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on 
        the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.
    </p>
    <p>
        <strong>Cracking the Coding Interview, 6th Edition</strong> is here to help you through this process, teaching you what you 
        need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
    </p>
    <p>
        Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable 
        chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
    </p>
    <p>
        These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's 
        truly being asked at the top companies, so that you can be as prepared as possible.
    </p>
    `,
amazon: [
    {
        id: 0,
        country: "US",
        link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
    {
        id: 1,
        country: "UK",
        link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
    {
        id: 2,
        country: "DE",
        link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
    {
        id: 3,
        country: "FR",
        link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
    {
        id: 4,
        country: "IT",
        link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
    {
        id: 5,
        country: "ES",
        link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
],
link: "",
hidden: false,
map: true,
```

Finally, open the file `src/components/BooksTableOFContents.jsx` and add a case to the `importQuestions` function, similar to the following:

```js
case "ctci":
    return (await import("../docs/ctci")).ctci_questions;
```

Where `ctci` is the name of the `.js` file containing the book’s questions, and `ctci_questions` is the name of the list of questions.

🎉 That’s it! Now, simply create a pull request specifying which book you’ve added. In just a few simple steps, you’ve contributed to this project! 🚀👏

