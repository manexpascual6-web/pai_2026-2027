// Classes
class Empresa {
  constructor(nom, adreca) {
    this.nom = nom;
    this.adreca = adreca;
    this.deute = 0;
  }
  incrementaDeute(n) {
    this.deute += n;
  }
  totPagat() {
    this.deute = 0;
  }
}

class Paquet {
  constructor(origen, destinacio, cost) {
    this.origen = origen;
    this.destinacio = destinacio;
    this.cost = cost;
    this.lliurat = false;
  }
  lliuramentFet() {
    this.origen.incrementaDeute(this.cost);
    this.lliurat = true;
  }
}

// Dades
var empreses = [
  new Empresa("Empresa A", "Carrer 1"),
  new Empresa("Empresa B", "Carrer 2"),
  new Empresa("Empresa C", "Carrer 3")
];

var paquets = [
  new Paquet(empreses[0], empreses[1], 10),
  new Paquet(empreses[1], empreses[2], 20),
  new Paquet(empreses[2], empreses[0], 15),
  new Paquet(empreses[0], empreses[2], 5)
];

// Lliurem dos paquets
paquets[0].lliuramentFet();
paquets[1].lliuramentFet();

// Exercici 1: empreses amb deutes pendents
document.write("<h2>Empreses amb deute</h2>");
for (var e of empreses) {
  if (e.deute > 0) {
    document.write(e.nom + ": " + e.deute + " €<br>");
  }
}

// Exercici 2: paquets pendents de lliurar
document.write("<h2>Paquets pendents</h2>");
for (var p of paquets) {
  if (!p.lliurat) {
    document.write(p.origen.nom + " → " + p.destinacio.nom + ": " + p.cost + " €<br>");
  }
}