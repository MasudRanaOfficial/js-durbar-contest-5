function formatAttendanceReport(students) {
  return students.map((student) => {
    const { name, present, total } = student;
    const percentage = Math.round((present / total) * 100);
    let status = "";
    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }
    return `${name}: ${present}/${total} (${percentage}%) - ${status}`;
  });
}

// Examples
console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));
// Output: ["Rafi: 18/20 (90%) - Excellent"]

console.log(
  formatAttendanceReport([
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ]),
);
// Output: ["Lina: 15/20 (75%) - Good", "Sam: 12/20 (60%) - At Risk"]
