function generateProfileCard(user) {
  const name = user?.name ?? "Anonymous";
  const city = user?.address?.city ?? "Unknown";
  const followers = user?.social?.followers ?? 0;

  return `${name} | ${city} | followers: ${followers}`;
}

// Examples
console.log(
  generateProfileCard({
    name: "Rafi",
    address: { city: "Dhaka" },
    social: { followers: 0 },
  }),
);
// "Rafi | Dhaka | followers: 0"

console.log(
  generateProfileCard({
    address: { city: "" },
    name: "",
    social: { followers: 999 },
  }),
);
// " |  | followers: 999"

console.log(generateProfileCard({}));
// "Anonymous | Unknown | followers: 0"
