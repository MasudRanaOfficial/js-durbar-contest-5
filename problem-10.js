function simulateTicketQueue(commands) {
  const queue = [];
  const served = [];

  for (const cmd of commands) {
    if (cmd === "serve") {
      if (queue.length > 0) {
        const person = queue.shift();
        served.push(person);
      }
    } else if (cmd.startsWith("join ")) {
      const name = cmd.slice(5);
      if (!queue.includes(name)) {
        queue.push(name);
      }
    } else if (cmd.startsWith("leave ")) {
      const name = cmd.slice(6);
      const index = queue.indexOf(name);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    }
  }

  return { queue, served };
}

// টেস্ট কেস ১
console.log(
  simulateTicketQueue([
    "join Rafi",
    "join Sara",
    "serve",
    "join Alex",
    "leave Sara",
    "serve",
  ]),
);
// { queue: [], served: [ 'Rafi', 'Alex' ] }

// টেস্ট কেস ২
console.log(
  simulateTicketQueue([
    "serve",
    "join Bob",
    "join Bob",
    "leave Alice",
    "join Alice",
    "serve",
  ]),
);
// { queue: [ 'Alice' ], served: [ 'Bob' ] }
