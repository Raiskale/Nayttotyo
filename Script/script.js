const colors = {
    fiesta: "#DD4132",
    jesterRed: "#9E1030",
    turmeric: "#FE840E",
    livingCoral: "#FF6F61",
    pinkPeacock: "#C62168",
    pepperStem: "#809440",
    aspenGold: "#FFD662",
    princessBlue: "#005390",
    toffee: "#755139",
    mangoMojito: "#D69C2F",
    terrariumMoss: "#616247",
    sweetLilac: "#E8B5CE",
    soybean: "#D2C29D",
    eclipse: "#343148",
    sweetCorn: "#F0EAD6",
    brownGranite: "#615550"
  };
  
  // Vaihtaa ensimmäisen laatikon taustavärin
  function varivaihto1(colorName) {
    document.querySelector(".boxi img").style.backgroundColor = colors[colorName];
  }
  
  // Vaihtaa toisen laatikon taustavärin
  function varivaihto2(colorName) {
    document.querySelector(".boxi2 img").style.backgroundColor = colors[colorName];
  }
  