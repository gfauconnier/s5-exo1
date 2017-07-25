var tab = [];

var user = {
  prenom: "Greg",
  nom: "Fauconnier",
  pays: "France",
  age: 35,
  moyens: ["visa", "mastercard", "cb"],
  alertPrenom: function(){
    alert("Prénom : " + this.prenom);
  },
  alertNom: function(){
    alert("Nom : " + this.nom);
  },
  alertDateN: function(){
    alert("Année de naissance : " + (2017 - this.age));
  }
};

var autorisations = {
  listePays: ["FRANCE", "ESPAGNE", "ITALIE", "ALLEMAGNE"],
  listeMoyens: ["VISA", "CB"],
  ageMin: 18,
  minAge: function(){
    user.age >= this.ageMin ? alert("Vous etes autorisé") : alert("Vous etes trop jeune");
  },
  paysOk: function(){
    this.listePays.includes(user.pays.toUpperCase()) ? alert("Pays autorisé") : alert("Pays non autorisé ! Dégagez !");
  },
  moyenOk: function() {
    var result = this.listeMoyens.filter(function(item) { return user.moyens.map(function(x){return x.toUpperCase();}).indexOf(item) > -1});
    result.length ? alert("Moyens autorisés : " + result) : alert("Aucun moyens autorisés");
  },
  allTests: function() {
    this.minAge();
    this.paysOk();
    this.moyenOk();
  }
};

autorisations.allTests();
