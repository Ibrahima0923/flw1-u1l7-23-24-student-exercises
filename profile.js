// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Ibrahima";
  
    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://upload.wikimedia.org/wikipedia/commons/1/16/Appearance_of_sky_for_weather_forecast%2C_Dhaka%2C_Bangladesh.JPG";
    // 3. Updated the src of main to a photo that's be your first post.
main.src = "https://bioweed.com.au/wp-content/uploads/10-Things-To-Learn-From-Kiss-The-Ground-On-Netflix--1024x688.jpg"

});