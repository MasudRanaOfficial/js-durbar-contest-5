function commonSkills(skills1, skills2) {
  const set1 = new Set(skills1.map((skill) => skill.toLowerCase()));

  const common = new Set();
  for (const skill of skills2) {
    const lower = skill.toLowerCase();
    if (set1.has(lower)) {
      common.add(lower);
    }
  }
  return Array.from(common).sort();
}

// Examples
console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]));
// Output: ["js", "react"]

console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]));
// Output: []

console.log(commonSkills(["C++", "C#", "c++"], ["c++", "c++", "Java"]));
// Output: ["c++"]
