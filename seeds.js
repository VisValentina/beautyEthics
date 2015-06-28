var db = require("./models");

// *************** L'OREAL ***************//
var lorealText = 
"";

// L'Oreal Brands
var garnier = new db.Brand({
  instaName: "@garnierusa",
  instaId: 196766934,
  complaint: "Animals",
});

var kiehls = new db.Brand({
  instaName: "@kiehlsnyc",
  instaId: 448044564,
  complaint: "Animals",
});

var lorealparisofficial = new db.Brand({
  instaName: "@lorealparisofficial",
  instaId: 1323766664,
  complaint: "Animals",
});

var lorealparisusa = new db.Brand({
  instaName: "@lorealparisusa",
  instaId: 182211878,
  complaint: "Animals",
});

var lorealparisfr = new db.Brand({
  instaName: "@lorealparisfr",
  instaId: 18977415,
  complaint: "Animals",
});

var biothermworld = new db.Brand({
  instaName: "@biothermworld",
  instaId: 782654805,
  complaint: "Animals",
});

// Make the L'Oreal Company
db.Company.create({
  name: "L'Oreal",
  score: 46,
  text: lorealText
}, function(err, company){

  console.log("saved the compnay");

  // Make L'Oreal the Garnier owner
  garnier.owner = company;
  garnier.save(function(err, brand) {
    console.log("saved garnier");
    // Make Garnier a L'Oreal brand
    company.brands.push(brand);
    company.save();
  });
  // Make L'Oreal the Kiehls owner
   kiehls.owner = company;
   kiehls.save(function(err, brand) {
     // Make Kiehl's a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
   // Make L'Oreal the lorealparisofficial owner
   lorealparisofficial.owner = company;
   lorealparisofficial.save(function(err, brand) {
     // Make lorealparisofficial a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
   // Make L'Oreal the lorealparisusa owner
   lorealparisusa.owner = company;
   lorealparisusa.save(function(err, brand) {
     // Make lorealparisusa a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
   // Make L'Oreal the lorealparisfr owner
   lorealparisfr.owner = company;
   lorealparisfr.save(function(err, brand) {
     // Make lorealparisfr a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
    // Make L'Oreal the biothermworld owner
   biothermworld.owner = company;
   biothermworld.save(function(err, brand) {
     // Make biothermworld a L'Oreal brand
     company.brands.push(brand);
     company.save();
   });
});

 // *************** JOHNSON & JOHNSON ***************//
 // Johnson & Johnson Brands
 var cleanandclear = new db.Brand({
   instaName: "@cleanandclear",
   instaId: 887391878,
   complaint: "GM",
 });


 var neutrogena = new db.Brand({
   instaName: "@neutrogena",
   instaId: 1385709710,
   complaint: "GM",
 });

 // Make Johnson & Johnson Company
 db.Company.create({
   name: "Johnson & Johnson",
   score: 31
 }, function(err, company){
   // Make Johnson & Johnson the Clean and Clear owner
   cleanandclear.owner = company;
   cleanandclear.save(function(err, brand) {
     // Make Clean and Clear a Johnson & Johnson brand
     company.brands.push(brand);
     company.save();
   });
   // Make Johnson & Johnson the Neutrogena owner
   neutrogena.owner = company;
   neutrogena.save(function(err, brand) {
     // Make Neutrogena a Johnson & Johnson brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** KAO CORPORATION ***************//
 // Kao Corportation Brands
 var johnfriedauk = new db.Brand({
   instaName: "@johnfriedauk",
   instaId: 326928838,
   complaint: "Environment",
 });

 var johnfriedafr = new db.Brand({
   instaName: "@johnfriedafr",
   instaId: 1273842973,
   complaint: "Environment",
 });

 // Make Kao Corportation Company
 db.Company.create({
   name: "Kao Corportation",
   score: 54
 }, function(err, company){
   // Make Kao Corportation the johnfriedauk owner
   johnfriedauk.owner = company;
   johnfriedauk.save(function(err, brand) {
     // Make johnfriedauk a Kao Corportation brand
     company.brands.push(brand);
     company.save();
   });
   // Make Kao Corportation the johnfriedafr owner
   johnfriedafr.owner = company;
   johnfriedafr.save(function(err, brand) {
     // Make johnfriedafr a Kao Corportation brand
     company.brands.push(brand);
     company.save();
   });
 });


 // *************** Hutchinson Whampoa ***************//
 // Hutchinson Whampoa Brands
 var superdrugloves = new db.Brand({
   instaName: "@superdrugloves",
   instaId: 469275009,
   complaint: "Tar Sands",
 });

 // Make Hutchinson Whampoa Company
 db.Company.create({
   name: "Hutchinson Whampoa",
   score: 42
 }, function(err, company){
   // Make Hutchinson Whampoa the superdrugloves owner
   superdrugloves.owner = company;
   superdrugloves.save(function(err, brand) {
     // Make superdrugloves a Hutchinson Whampoa brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** UNILEVER ***************//
 // Unilever Brands
 var tresemme = new db.Brand({
   instaName: "@tresemme",
   instaId: 19262530,
   complaint: "Palm oil",
 });

 // Make Unilever Company
 db.Company.create({
   name: "Unilever",
   score: 46
 }, function(err, company){
   // Make Unilever the tresemme owner
   tresemme.owner = company;
   tresemme.save(function(err, brand) {
     // Make tresemme a Unilever brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** PROCTOR & GAMBLE ***************//
 // Proctor & Gamble Brands
 var aussiehair = new db.Brand({
   instaName: "@aussiehair",
   instaId: 144140774,
   complaint: "Bribes",
 });

 var herbalessences = new db.Brand({
   instaName: "@herbalessences",
   instaId: 145628278,
   complaint: "Bribes",
 });

 var pantenehair = new db.Brand({
   instaName: "@pantenehair",
   instaId: 459676149,
   complaint: "Bribes",
 });

 // Make Proctor & Gamble Company
 db.Company.create({
   name: "Proctor & Gamble",
   score: 27
 }, function(err, company){
   // Make Proctor & Gamble the aussiehair owner
   aussiehair.owner = company;
   aussiehair.save(function(err, brand) {
//     // Make aussiehair a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
   // Make Proctor & Gamble the herbalessences owner
   herbalessences.owner = company;
   herbalessences.save(function(err, brand) {
     // Make herbalessences a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
   // Make Proctor & Gamble the pantenehair owner
   pantenehair.owner = company;
   pantenehair.save(function(err, brand) {
     // Make pantenehair a Proctor & Gamble brand
     company.brands.push(brand);
     company.save();
   });
 });

 // *************** Beiersdorf ***************//
 // Beiersdorf Brands
 var nivea_de = new db.Brand({
   instaName: "@nivea_de",
   instaId: 260742208,
   complaint: "Bribes",
 });

 // Make Beiersdorf Company
 db.Company.create({
   name: "Beiersdorf",
   score: 58
 }, function(err, company){
   // Make Beiersdorf the nivea_de owner
   nivea_de.owner = company;
   nivea_de.save(function(err, brand) {
     // Make nivea_de a Beiersdorf brand
     company.brands.push(brand);
     company.save();
   });
 });


setTimeout(function() {db.closeConnection()}, 10000);

