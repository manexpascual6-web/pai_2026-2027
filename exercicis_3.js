// Exercici 3.1: parell o imparell
function parellSenar(n) {
  if (n % 2 == 0) {
    return n + " és parell";
  } else {
    return n + " és imparell";
  }
}
document.write(parellSenar(7) + "<br>");

// Exercici 3.2: any de traspàs
function esTraspas(any) {
  return (any % 4 == 0 && any % 100 != 0) || any % 400 == 0;
}
document.write("1900: " + esTraspas(1900) + "<br>");
document.write("2000: " + esTraspas(2000) + "<br>");
document.write("2100: " + esTraspas(2100) + "<br>");

// Exercici 3.3: suma de 1/n^2 per a 0 < n <= N
function suma(N) {
  var s = 0;
  for (var n = 1; n <= N; n++) {
    s += 1 / (n * n);
  }
  return s;
}
document.write("Suma per N=10: " + suma(10) + "<br>");

// Exercici 3.4: nota final
function notaFinal(ac, pract, examen) {
  var nota;
  if (ac >= 5) {
    nota = 0.2 * ac + 0.4 * pract + 0.4 * examen;
  } else {
    nota = 0.4 * pract + 0.6 * examen;
  }
  var lletra;
  if (nota < 5) lletra = "D";
  else if (nota < 6.5) lletra = "C";
  else if (nota < 8) lletra = "B";
  else if (nota < 10) lletra = "A";
  else lletra = "H";
  return nota + " " + lletra;
}
var ac = Number(prompt("Nota d'avaluació continuada:"));
var pract = Number(prompt("Nota de pràctiques:"));
var examen = Number(prompt("Nota d'examen:"));
document.write("Nota final: " + notaFinal(ac, pract, examen) + "<br>");

// Exercici 3.5: paraules de 5 caràcters
function paraules5(frase) {
  var paraules = frase.split(/[ ,.]+/);
  var compte = 0;
  for (var p of paraules) {
    if (p.length == 5) compte++;
  }
  return compte;
}
document.write("Paraules de 5: " + paraules5("Hola, avui menja fruta i pomes.") + "<br>");

// Exercici 3.6: n'hi ha prou amb afegir un paràmetre amb el número de lletres
function paraulesDeN(frase, lletres) {
  var paraules = frase.split(/[ ,.]+/);
  var compte = 0;
  for (var p of paraules) {
    if (p.length == lletres) compte++;
  }
  return compte;
}
document.write("Paraules de 7: " + paraulesDeN("Aquesta setmana escrivim relats curts.", 7) + "<br>");

// Exercici 3.7: taula amb quantes paraules hi ha d'1 a 7 lletres
function taulaParaules(frase) {
  var taula = [0, 0, 0, 0, 0, 0, 0, 0]; // posició 1 = paraules d'1 lletra, ... posició 7 = 7 lletres
  var paraules = frase.split(/[ ,.]+/);
  for (var p of paraules) {
    if (p.length >= 1 && p.length <= 7) taula[p.length]++;
  }
  return taula;
}
var t = taulaParaules("El gat menja peix, i després dorm.");
for (var i = 1; i <= 7; i++) {
  document.write(i + " lletres: " + t[i] + "<br>");
}
