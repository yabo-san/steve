function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('https://i.redd.it/r0ad288kma8x.jpg')",
                   "url('https://i.redd.it/al98nvymh16z.png')",
                   "url('http://i.imgur.com/XjKfgHt.jpg')",
                   "url('https://www.mobygames.com/images/promo/original/1471982997-3418226446.jpg')",
                   "url('http://placehold.it/300&text=banner5')",
                   "url('http://placehold.it/300&text=banner6')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }