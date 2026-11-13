// EXERCICIS DE FUNCIONS
// Cada exercici està comentat. Per provar-ne un, treu el /* i el */ que l'envolten.
// Els resultats surten a la consola (console.log).

// ===================== FUNCIONS =====================

// 19.1 - Nombre al quadrat
/*
function quadrat(n) {
  return n * n;
}
console.log(quadrat(5)); // 25
*/

// 19.2 - Nombre al cub
/*
function cub(n) {
  return n * n * n;
}
console.log(cub(3)); // 27
*/

// 19.3 - Primer nombre elevat al segon
/*
function potencia(base, exp) {
  var r = 1;
  for (var i = 0; i < exp; i++) {
    r = r * base;
  }
  return r;
}
console.log(potencia(2, 10)); // 1024
*/

// 19.4 - Milles a metres (1 milla = 1852 metres)
/*
function millesAMetres(milles) {
  return milles * 1852;
}
console.log(millesAMetres(2)); // 3704
*/

// 19.5 - Nom del nombre del 0 al 10
/*
function nomNombre(n) {
  var noms = ["zero", "un", "dos", "tres", "quatre", "cinc", "sis", "set", "vuit", "nou", "deu"];
  return noms[n];
}
console.log(nomNombre(7)); // set
*/

// 19.6 - Segons a hores, minuts i segons
/*
function convertirSegons(total) {
  var h = Math.floor(total / 3600);
  var m = Math.floor((total % 3600) / 60);
  var s = total % 60;
  return h + " hores, " + m + " minuts i " + s + " segons";
}
console.log(convertirSegons(3725)); // 1 hores, 2 minuts i 5 segons
*/

// 19.7 - Salari setmanal (hores de més de 40 es paguen un 50% més)
/*
function salari(hores, preuHora) {
  if (hores <= 40) {
    return hores * preuHora;
  } else {
    return 40 * preuHora + (hores - 40) * preuHora * 1.5;
  }
}
console.log(salari(45, 10)); // 475
*/

// 19.8 - Any de traspàs (retorna true o false)
/*
function esTraspas(any) {
  return (any % 4 == 0 && any % 100 != 0) || any % 400 == 0;
}
console.log(esTraspas(1900)); // false
console.log(esTraspas(2000)); // true
*/

// 19.9 - Nombre aleatori entre min i max (inclosos)
/*
function aleatori(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(aleatori(1, 6));
*/

// 19.10 - Palíndrom (sense tenir en compte els espais)
/*
function esPalindrom(text) {
  var net = text.split(" ").join("");
  var invers = net.split("").reverse().join("");
  return net == invers;
}
console.log(esPalindrom("amad a la dama")); // true
console.log(esPalindrom("hola")); // false
*/

// 19.11 - Codificar: paraules i lletres al revés i vocals a números
/*
function codificar(frase) {
  var invers = frase.split("").reverse().join("");
  var resultat = "";
  for (var c of invers) {
    if (c == "a") resultat += "1";
    else if (c == "e") resultat += "2";
    else if (c == "i") resultat += "3";
    else if (c == "o") resultat += "4";
    else if (c == "u") resultat += "5";
    else resultat += c;
  }
  return resultat;
}
console.log(codificar("The cat is in the roof.")); // .f44r 2ht n3 s3 t1c 2hT
*/

// 19.12 - Calculadora amb switch
/*
function calcula(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    case "%": return a % b;
    case "pot": return Math.pow(a, b);
    default: return "Operació no vàlida";
  }
}
console.log(calcula(7, 3, "+")); // 10
console.log(calcula(2, 3, "pot")); // 8
*/

// 19.13 - És primer?
/*
function esPrimer(n) {
  if (n < 2) return false;
  for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(esPrimer(11)); // true
console.log(esPrimer(12)); // false
*/

// 19.14 - Taula amb els primers d'1 a N (fa servir esPrimer de la 19.13)
/*
function esPrimer(n) {
  if (n < 2) return false;
  for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function primersFins(N) {
  var taula = [];
  for (var i = 1; i <= N; i++) {
    if (esPrimer(i)) taula.push(i);
  }
  return taula;
}
console.log(primersFins(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
*/

// 19.15 - Quants primers hi ha en una taula (fa servir esPrimer de la 19.13)
/*
function esPrimer(n) {
  if (n < 2) return false;
  for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function comptaPrimers(taula) {
  var compte = 0;
  for (var n of taula) {
    if (esPrimer(n)) compte++;
  }
  return compte;
}
console.log(comptaPrimers([2, 4, 5, 9, 11])); // 3
*/

// 19.16 - Quantes "a" hi ha a la cadena
/*
function comptaA(text) {
  var compte = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a") compte++;
  }
  return compte;
}
console.log(comptaA("abcdabcda.")); // 3
*/

// 19.17 - Quantes paraules té la frase (espais + 1)
/*
function comptaParaules(frase) {
  var espais = 0;
  for (var i = 0; i < frase.length; i++) {
    if (frase[i] == " ") espais++;
  }
  return espais + 1;
}
console.log(comptaParaules("Avui fa molt de sol.")); // 5
*/

// 19.18 - Quantes paraules tenen ç
/*
function paraulesAmbC(frase) {
  var paraules = frase.replace(".", "").split(" ");
  var compte = 0;
  for (var p of paraules) {
    if (p.includes("ç")) compte++;
  }
  return compte;
}
console.log(paraulesAmbC("La plaça de França és gran.")); // 2
*/

// 19.19 - Taula de 100 posicions amb les vegades que surt cada número
/*
function frequencies(taula) {
  var resultat = [];
  for (var i = 0; i < 100; i++) resultat[i] = 0;
  for (var n of taula) {
    resultat[n]++;
  }
  return resultat;
}
console.log(frequencies([2, 3, 4, 5, 3, 2, 3, 4, 5, 6, 8, 6, 5, 2, 3, 4, 5, 6, 0]).slice(0, 11));
// [1, 0, 3, 4, 3, 4, 3, 0, 1, 0, 0]
*/

// 19.20 - Quantes paraules de 5 lletres
/*
function paraules5(frase) {
  var paraules = frase.replace(".", "").split(" ");
  var compte = 0;
  for (var p of paraules) {
    if (p.length == 5) compte++;
  }
  return compte;
}
console.log(paraules5("Avui menja fruta i pomes.")); // 3
*/

// 19.21 - Quantes paraules de N caràcters (separades per un o més espais)
/*
function paraulesDeN(frase, N) {
  var paraules = frase.replace(".", "").split(" ");
  var compte = 0;
  for (var p of paraules) {
    if (p.length == N) compte++;
  }
  return compte;
}
console.log(paraulesDeN("El   gat  menja peix.", 4)); // 1
*/

// 19.22 - Quantes paraules (separades per espais, comes, punts i comes o dos punts)
/*
function totalParaules(frase) {
  var paraules = frase.split(/[ ,;:.]+/);
  var compte = 0;
  for (var p of paraules) {
    if (p != "") compte++;
  }
  return compte;
}
console.log(totalParaules("Hola, què tal;  bé: i tu.")); // 6
*/


// ===================== PARÀMETRES =====================

// 20.1 - Suma de tants nombres com vulguem
/*
function suma(...nombres) {
  var total = 0;
  for (var n of nombres) {
    total += n;
  }
  return total;
}
console.log(suma(1)); // 1
console.log(suma(1, 2, 3, 4)); // 10
*/

// 20.2 - Aleatori entre 0 i un valor (100 per defecte)
/*
function aleatori(max = 100) {
  return Math.floor(Math.random() * (max + 1));
}
console.log(aleatori()); // entre 0 i 100
console.log(aleatori(10)); // entre 0 i 10
*/

// 20.3 - Multiplicar per 10 tots els valors d'una taula (no retorna res)
/*
function perDeu(taula) {
  for (var i = 0; i < taula.length; i++) {
    taula[i] = taula[i] * 10;
  }
}
var t = [1, 2, 3];
perDeu(t);
console.log(t); // [10, 20, 30]
*/

// 20.4 - Còpia d'un objecte
/*
function copia(obj) {
  var nou = {};
  for (var atribut in obj) {
    nou[atribut] = obj[atribut];
  }
  return nou;
}
var original = { nom: "Anna", edat: 20 };
var copiat = copia(original);
copiat.nom = "Pere";
console.log(original.nom, copiat.nom); // Anna Pere
*/
