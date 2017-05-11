var studentImages = [];
var studentNames = [];

function input()
{
  var nameEntered = document.getElementById("nameInput").value;
  studentNames.push(nameEntered);
  document.getElementById("allNames").innerHTML = studentNames;
  document.getElementById("nameInput").value=" ";
  var imageEntered = document.getElementById("image-file").files[0];
  studentImages.push(imageEntered);
  var reader  = new FileReader();
  reader.readAsDataURL(imageEntered);
  reader.onloadend = function () {
document.getElementById("aStudentImage").src=reader.result;
  }
}
function begin(){
  reader.readAsDataURL(studentNames[0]);
  reader.onloadend = function () {
    document.getElementById("aStudentImage").src=reader.result;
  }
}
function solution(){
var one = document.getElementById("numberOne").checked;
var two = document.getElementById("numberTwo").checked;
var three = document.getElementById("numberThree").checked;
var four = document.getElementById("numberFour").checked;
var five = document.getElementById("numberFive").checked;
var six = document.getElementById("numberSix").checked;
  y= aStudentImage.value + 1;
  h = "Correct!";
  u = "False!";
  if(one = y){
    document.getElementById("theTruth").innerHTML=h}
    if(two = y){
      document.getElementById("theTruth").innerHTML=h}
      if(three = y){
        document.getElementById("theTruth").innerHTML=h}
        if(four = y){
          document.getElementById("theTruth").innerHTML=h}
          if(five = y){
            document.getElementById("theTruth").innerHTML=h}
            if(six = y){
              document.getElementById("theTruth").innerHTML=h}
        else{
          document.getElementById("theTruth").innerHTML="False!"}
  }

//Doesn't work
//Spent all my time figuring out how to upload images *At least that works

//How many flashcards would you like?
//Request name input and image
//Create list of names already in the system
//After all desired names are inputed, press button to begin flash cards (right side of page)
//Randomize list of images (arrays)
//1 image appears
//List of names appears beside image with clickable option boxes
//Each image is connected to a name, if the name selected works "Correct! Click Continue" *anywhere on screen
//If the name is not the correct name connected with the image "Sorry, that was wrong. Click Continue"
//It will go through every picture.
//After the last picture is answered, an option will appear: Retry
//Clicking retry will rerandomize the images and begin the problems again

//To determine number of names I will need to make the input an array and whatever that number is decides how many times the user is asked for a name *Optionally skip this and just make a finished button,
//each additional name creating an array with that number
//To do this I will require storing name and image. I can assign perhaps a number to each one to relate the two, later on if the numbers are the same, correct, otherwise false
