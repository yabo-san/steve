var hours
var minutes
var seconds
function randombg() {
  var random = Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('https://timedotcom.files.wordpress.com/2016/11/kanye-west-cancels-saint-pablo-tour.jpg')",
    "url('https://www.1st-art-gallery.com/thumbnail/75000/75584/popular_bg/Turner/The-Slave-Ship-1840.jpg?ts=1508721122')",
    "url('https://yoo.com/assets/Slides/_resampled/CroppedImage1440900-New-Openings-small.jpg')",
    "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/abstract-in-orange-and-blue-angela-anelli.jpg')",
    "url('https://cdn.mos.cms.futurecdn.net/fb749718aaf42504e16a33ceefb62f3c.jpg')",
    "url('https://images.pexels.com/photos/1070526/pexels-photo-1070526.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"];
  document.getElementById("random").style.backgroundImage = bigSize[random];

}
function clockData() {
  var d = new Date();
  hours = d.getHours();
  minutes = d.getMinutes();
  seconds = d.getSeconds();
}


