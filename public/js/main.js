class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let Molengeek = new Lieu("molengeek", "10000");
let Snack = new Lieu("molengeek", "100");
let Maison = new Lieu("molengeek", "6");

class Personnes {
    constructor(nom, prenom, argent,){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer =()=>{
            Bus.embarquer();
        };
    }
}

let perso1 = new Personnes("nodari", "georges", 100);

class Bus{
    constructor(personnes, caisse){
       this.personnes = personnes;
       this.caisse = caisse;
       personnes = []; 
       caisse = Number;
       this.embarquer=()=>{
       }
    }
}
