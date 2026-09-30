function groupByGrade(students) {
  const result = {
    A: [],
    B: [],
    C: [],
    F: [],
  };

  for (let student of students) {
    const marks = student.marks;

    if (marks >= 80) {
      result.A.push(student);
    } else if (marks >= 70) {
      result.B.push(student);
    } else if (marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  }

  return result;
}

// টেস্ট কেস ১
const students1 = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
  { name: "David", marks: 91 },
];
console.log(groupByGrade(students1));

// টেস্ট কেস ২
const students2 = [
  { name: "Eve", marks: 65 },
  { name: "Frank", marks: 60 },
];
console.log(groupByGrade(students2));
