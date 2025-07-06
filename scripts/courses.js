const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

// ********* DOM Elements *********
const listContainer = document.querySelector('.courses-approved');            // where the tags will appear
const totalMsg      = document.createElement('p');                        // text with the total

totalMsg.className = 'courses-count';
totalMsg.style.textAlign = 'center';
totalMsg.style.marginTop = '1rem';
listContainer.parentElement.insertBefore(totalMsg, listContainer);

const btnAll = document.getElementById('all');
const btnWDD = document.getElementById('wdd');
const btnCSE = document.getElementById('cse');

// ********* Main function *********
function displayApprovedCourses(filter = 'All') {
    listContainer.innerHTML = '';

    // 1️⃣ Filter only approved courses
    let approved = courses.filter(c => c.completed);

    // 2️⃣ Filter by subject, if applicable
    if (filter !== 'All') {
        approved = approved.filter(c => c.subject === filter);
    }

    // 3️⃣ Show the total
    totalMsg.textContent = `The total number of approved courses listed below is ${approved.length}`;

    // 4️⃣ Create a tag for each course
    approved.forEach(course => {
        const tag = document.createElement('span');
        tag.textContent = `${course.subject} ${course.number}`;
        tag.className = 'course-tag';
        listContainer.appendChild(tag);
    });
}

// ********* Add listeners *********
btnAll.addEventListener('click', () => displayApprovedCourses('All'));
btnWDD.addEventListener('click', () => displayApprovedCourses('WDD'));
btnCSE.addEventListener('click', () => displayApprovedCourses('CSE'));

// ********* Quick styles for the tags *********
const style = document.createElement('style');
style.textContent = `
    .course-tag {
        display: inline-block;
        background-color: green;
        color: var(--color-white);
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        border-radius: 10px;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Do not load results by default; show an initial message
window.addEventListener('DOMContentLoaded', () => {
    totalMsg.textContent = 'Select a button to view your approved courses.';
});

