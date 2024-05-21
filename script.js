function zapisAktualniDatum() {
  var d = new Date();
  var den = d.getDate();
  var mesic = d.getMonth() + 1; // Měsíce jsou indexovány od 0, takže přidáváme 1
  var rok = d.getFullYear();
  var formatovaneDatum = den + '.' + mesic + '.' + rok;
  document.getElementById("aktualni-datum").innerHTML = formatovaneDatum;
}
window.onload = function() {
  zapisAktualniDatum();
};
