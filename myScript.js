function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('https://timedotcom.files.wordpress.com/2016/11/kanye-west-cancels-saint-pablo-tour.jpg')",
                   "url('https://i.redd.it/al98nvymh16z.png')",
                   "url('http://i.imgur.com/XjKfgHt.jpg')",
                   "url('https://www.mobygames.com/images/promo/original/1471982997-3418226446.jpg')",
                   "url('https://upload.wikimedia.org/wikipedia/commons/0/01/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg')",
                   "url('https://www.azamaraclubcruises.com/sites/default/files/heros/rio-de-janeiro-brazil.jpg')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }
