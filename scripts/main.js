/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// @import "../node_modules/bootstrap/scss/bootstrap";

// function showPosition(position) {
//   var latlon = position.coords.latitude + "," + position.coords.longitude;

//   var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
//   "+latlon+" & zoom=14 & size=400x300 & sensor=false & key=YOUR_KEY";

//   document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
// }
