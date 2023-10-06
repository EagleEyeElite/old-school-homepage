// von Friedel. Besuche meine Homepage unter friedels-home.com oder friedels-home.de oder friedel.biz
var sichtbar=0;
var bildx=new Array(anzahl);
var bildy=new Array(anzahl);
var deltax=new Array(anzahl);
for(i=0;i<anzahl;i++) deltax[i]=0;
var zaehler=0;
var regenzeit = window.setInterval("rain()", zeit);

function rain() {
  for(zaehler=0;zaehler<anzahl;zaehler++) {
    noetig = Math.random() * (schritte - sichtbar) / schritte;
//Fallen
    if(zaehler<sichtbar) {
      bildy[zaehler]=bildy[zaehler]+100/schritte;
      if(bildy[zaehler]>100) bildy[zaehler]=0;
      document.getElementById("smile"+zaehler).style.top= bildy[zaehler]+"%";
      if(hoch==1) document.getElementById("smile"+zaehler).style.top= (100-bildy[zaehler])+"%";
      if(Math.abs(deltax[zaehler])<0.2 && bildx[zaehler]>-20 && bildx[zaehler]<120) {
        deltax[zaehler] = deltax[zaehler] + 0.1*(Math.random()-0.5);
        } else {
        if(deltax[zaehler]>=0.2 || bildx[zaehler]>=120) {
          deltax[zaehler] = deltax[zaehler] - Math.abs(0.3*(Math.random()-0.5));
        } else {
          deltax[zaehler] = deltax[zaehler] + Math.abs(0.3*(Math.random()-0.5));
        };
      };
      bildx[zaehler] = bildx[zaehler] + deltax[zaehler];
      document.getElementById("smile"+zaehler).style.left= bildx[zaehler] + "%";
    };
//Ende Fallen
//Einblenden
    if(zaehler==sichtbar && noetig>=0.85) {
      document.getElementById("smile"+zaehler).style.visibility= "visible";
      document.getElementById("smile"+zaehler).style.top= "0%";
      if(hoch==1) document.getElementById("smile"+zaehler).style.top= "100%";
      bildy[zaehler]=0;
      bildx[zaehler] = Math.random() * 100;
      document.getElementById("smile"+zaehler).style.left= bildx[zaehler] + "%";
      sichtbar++;
    };
//Ende Einblenden
  };
};

function bilderinit() {
  for(i=0;i<anzahl;i++) {
    var hb=Math.floor(Math.random()*1000)%bild.length;
    document.write("<img src='"+bild[hb]+"' id='smile"+i+"' style='position:absolute; margin-left:-10px; margin-top:-25px;");
    document.write("top:-100px; left:-100px;'>");
  };
}