/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /* $("#main").append("Paul J Vandenberg"); */

/* Lesson 1 var quiz

var awesomeThoughts = "I am Paul and I am AWESOME";
console.log(awesomeThoughts);

*/

/* Lesson 1 string.replace Quiz

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

$("#main").append(funThoughts);

*/

// Lesson 1 Resume Header quiz

var name = "Paul J Vandenberg";
var role = "Clinical Applications Coordinator";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/* Lesson 1 String Manipulation Quiz 1*/

var strStepOne = "audacity";
var strStepTwo = "U" + strStepOne.slice(2);

//console.log(strStepOne);
//console.log(strStepTwo);

var firstArray = ["zero", "one", "two"];
//console.log(firstArray.length);

//Lesson 1 - bio

var bio = {
  "name" : "Pauly V",
  "role" : "CAC",
  "contacts" : {
    "phone" : "9208103227",
    "email" : "paul.john.vandenberg@gmail.com"
  },
  "welcomeMessage" : "Hello There",
  "skills" : ["skill1", "skill2"],
  "bioPic" : "/images/fry.jpg"
}

$("#main").append(bio.name);

bio.city = "Kaukauna";
bio.contacts["email"] = "paul.vandenberg@va.gov"

$("#main").append(bio.city);
$("#main").append(bio.contacts.email);

//Lesson 1 Practice with objects quiz work and education

var work = {};
  work.position = "Clinical Applications Coordinator",
  work.employer = "VA",
  work.yearsWorked = "4 years",
  work.city = "Green Bay"

var education = {
  "schools" : [
    {
      "schoolName" : "UW Oshkosh",
      "yearGraduated" : "2009",
      "schoolCity" : "Oshkosh, WI"
    },
    {
      "schoolName" : "UW Fox Valley",
      "yearGraduated" : "2005",
      "schoolCity" : "Menasha, WI"
    }
  ]
}


$("#main").append(work["position"]);
$("#main").append(work.employer);

$("#main").append(education.schoolName);
$("#main").append(education["schoolCity"]);
