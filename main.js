var slideIndex = 1;

var myTimer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 5000);
})

function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 5000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
  }
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 10000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function validate(){
  var pass = document.getElementById('Password').value;
  var email = document.getElementById('Email').value;
  var address = document.getElementById('address').value;
  var gender = document.getElementById('gender').value;
  var dob = document.getElementById('dob').value;
  var temp = email.split("@");
  //email
  if (email == ""){
      alert('Email must be filled');
      return false;
  }
  else if(!email.includes('@')){
      alert('Email must contains @');
      return false;
  }
  else if(email.indexOf(" ") != -1){
      alert('Email cannot contain space');
      return false;
  }
  else if(email.includes('..')){
      alert('Dot cannot be next to each other');
      return false;
  }
  else if(email.startsWith('@')||email.endsWith('@')){
      alert('@ cannot be on the beginning and the end');
      return false;
  }
  else if(email.startsWith('.')||email.endsWith('.')){
      alert('dot cannot be on the beginning and the end');
      return false;
  }
  else if(temp.length!=2){
      alert('Wrong Format');
      return false;
  }
  else if(!email.includes('.')){
      alert('Email must contains dot');
      return false;
  }
  else if(email.includes('@.')||email.includes('.@')){
      alert('@ and dot cannot be next to each other');
      return false;
  }
  //Password
  if(pass == ""){
      alert('Password must be filled');
      return false;
  }
  else if(pass.length < 8){
      alert('Password must more than 8 Characters')
      return false;
  }
  //Address
  if(address == ""){
      alert('Address must be filled');
      return false;
  }
  //Gender
  if(gender == ""){
      alert('Gender must be selected');
      return false;
  }
  //Date of Birth
  if(dob == ""){
      alert('Date of Birth must be filled');
      return false;
  }

}

