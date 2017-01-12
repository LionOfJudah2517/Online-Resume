var name = "Scott O'Neil";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
 "name" : "Scott O'Neil",
 "role" : "Web Developer",
 "contacts" : {
 "email" : "LionOfJudah2517@gmail.com",
 "mobile" : "781-408-0652",
 "gitHub" : "LionOfJudah2517",
 "twitter" : "@FaithHunter313",
 "location" : "Boston, MA"
  },
 "welcomeMessage" : "Hello there! Welcome to my Resume!",
 "skills" : ["HTML5", "CSS3", "JavaScript", "jQuery", "git", "gitHub"],
  "biopic" : "images/ResImg.jpg"

};
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#topContacts").append(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#topContacts").append(formattedMobile);
var formattedgitHub = HTMLgithub.replace("%data%", bio.contacts["gitHub"]);
$("#topContacts").append(formattedgitHub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#topContacts").append(formattedLocation);
var formattedbioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
$("#header").prepend(formattedbioPic);

if(bio.skills.length > 0){
  $("#skills").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#header").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#header").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#header").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#header").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#header").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#header").append(formattedSkill);
};


var education = {
"schools":[ {
  "name" : "Southern Connecticut State University",
  "location": "New Haven, CT",
  "dates" : "2006-2008",
  "major": "Public health"
},
{
  "name" : "Quincy College",
  "location": "Quincy, MA",
  "dates" : "2017-Current",
  "major": "Programming"
}
],
"onlineCourses":[
 {
   "title": "Front End Nanodegree",
   "school": "Udacity",
   "dates" : "2017-Current",
   "url" : "https://udacity.com"
 }
]
};

function displayEducation(){
for (schools in education) {
  $("#education").append(HTMLschoolStart);
var formattedschoolName = HTMLschoolName.replace("%data%", education.schools["name"]);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools["dates"]);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools["location"]);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools["major"]);
var formattedschoolTitle = formattedschoolName + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
$(".education-entry:last").append(formattedschoolTitle);

  }
};
displayEducation();


var work = {
"jobs" : {
"employer" : "Teen Challenge New England",
"location" : "Brockton, MA",
"title" : "Resident Life Administrator",
"dates" : "May 2012 - Current",
"description" : "Responsible for creating and innovating curriculum amongst eight of our locations. Maintaining statistics across the centers with regards to retention rates, etc. Oversee our admissions processes and provide accountability for the admissions, academics and resident life supervisors at each campus. Help implement GED/HiSet classes or process to educate residents to overcome educational obstacles. Contribitued author of two books 'Changed Lives Volume 3' and 'Changed Lives Volume 4'. Write blogs for the website and also helped with developing, creating additional content, and editing."
  }
};
function displayWork(){
for (jobs in work) {
  $("#workExperience").append(HTMLworkStart);
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs["employer"]);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs["title"]);
var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs["dates"]);
$(".work-entry:last").append(formattedworkDates);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs["description"]);
$(".work-entry:last").append(formattedworkDescription);
  }
};
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

var projects = {
  "projects" :[
    {
  "title" : "Christina's Cleaning LLC",
  "dates" : "2015-2016",
  "description" : "Christina's Cleaning LLC is a small cleaning company on the South Shore of MA. This project was orginally done with SquareSpace in 2015 but then it was transferred to WordPress and redesigned and developed."
},
  {
  "title" : "Developed By O'Neil",
  "dates" : "2016",
  "description" : "Developed By O'Neil is a WordPress project that I wanted to build and get familiar with using WordPress."
  }
]

};
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);
  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);
  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  }
};
projects.display();

$("#mapDiv").append(googleMap);
