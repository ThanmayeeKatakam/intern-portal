// server/data.js

const internData = {
  name: "Thanmayee",
  referralCode: "thanu2025",
  totalDonations: 3000
};

//module.exports = internData;

const leaderboard = [
  { name: "Thanmayee", referralCode: "thanu2025", totalDonations: 3000 },
  { name: "Ashlu", referralCode: "ash2025", totalDonations: 2200 },
  { name: "Pooji", referralCode: "puu2025", totalDonations: 1500 },
  { name: "Lakshmi", referralCode: "lak2025", totalDonations: 1500 }
];

module.exports = {
  internData: leaderboard[3], // You
  leaderboard
};
