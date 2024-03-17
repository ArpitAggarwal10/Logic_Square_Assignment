function generateStudentMarkSheets(students, Details) {
    const detailsMap = new Map(Details.map(detail => [detail.Roll, detail.subjects]));

    const studentsMarkSheets = students.map(student => {
        const marks = detailsMap.get(student.Roll);
        if (marks) {
            const total = Object.values(marks).reduce((acc, curr) => acc + curr, 0);
            const status = total >= 200 ? "pass" : "fail";

            return {
                name: student.name,
                Roll: student.Roll,
                ...marks,
                total,
                status
            };
        }
        return null;
    }).filter(Boolean);

    return studentsMarkSheets;
}

const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
];

const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

const studentsMarkSheets = generateStudentMarkSheets(students, Details);
console.log(studentsMarkSheets);