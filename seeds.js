var db = require("./models");

// L'Oreal Brands
db.Brand.create({
  instaName: "@garnierusa",
  instaId: 196766934,
  complaint: "Animals",
  owner: "L'Oreal",
  score: 46
});

db.Brand.create({
  instaName: "@kiehlsnyc",
  instaId: 448044564,
  complaint: "Animals",
  owner: "L'Oreal",
  score: 46
});

db.Brand.create({
  instaName: "@lorealparisofficial",
  instaId: 1323766664,
  complaint: "Animals",
  owner: "L'Oreal",
  score: 46
});

db.Brand.create({
  instaName: "@lorealparisusa",
  instaId: 182211878,
  complaint: "Animals",
  owner: "L'Oreal",
  score: 46
});

db.Brand.create({
  instaName: "@lorealparisfr",
  instaId: 18977415,
  complaint: "Animals",
  owner: "L'Oreal",
  score: 46
});


// Johnson & Johnson Brands
db.Brand.create({
  instaName: "@cleanandclear",
  instaId: 887391878,
  complaint: "GM",
  owner: "Johnson & Johnson",
  score: 31
});

db.Brand.create({
  instaName: "@neutrogena",
  instaId: 1385709710,
  complaint: "GM",
  owner: "Johnson & Johnson",
  score: 31
});


// Kao Corportation Brands
db.Brand.create({
  instaName: "@johnfriedauk",
  instaId: 326928838,
  complaint: "Environment",
  owner: "Kao Corporation",
  score: 54
});

db.Brand.create({
  instaName: "@johnfriedafr",
  instaId: 1273842973,
  complaint: "Environment",
  owner: "Kao Corporation",
  score: 54
});


// Hutchinson Whampoa Brands
db.Brand.create({
  instaName: "@superdrugloves",
  instaId: 469275009,
  complaint: "Tar Sands",
  owner: "Hutchinson Whampoa",
  score: 42
});


// Unilever Brands
db.Brand.create({
  instaName: "@tresemme",
  instaId: 19262530,
  complaint: "GM",
  owner: "Unilever",
  score: 46
});


// Proctor & Gamble Brands
db.Brand.create({
  instaName: "@aussiehair",
  instaId: 144140774,
  complaint: "Bribes",
  owner: "Proctor & Gamble",
  score: 27
});

db.Brand.create({
  instaName: "@herbalessences",
  instaId: 145628278,
  complaint: "Bribes",
  owner: "Proctor & Gamble",
  score: 27
});

db.Brand.create({
  instaName: "@pantenehair",
  instaId: 459676149,
  complaint: "Bribes",
  owner: "Proctor & Gamble",
  score: 27
});


// Beiersdorf Brands
db.Brand.create({
  instaName: "@nivea_de",
  instaId: 260742208,
  complaint: "Bribes",
  owner: "Beiersdorf",
  score: 58
});

db.closeConnection();

