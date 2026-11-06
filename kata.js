import { writeFileSync, readFileSync, } from "fs"


/// exercice 1 ///

const bonjour = "Bonjour Ada !" 
writeFileSync("bonjour.txt", bonjour)
const contenuBonjour = readFileSync("bonjour.txt", "utf8")
console.log(contenuBonjour)


/// exercice 2 ///

const auRevoir = "Au revoir Ada !"
writeFileSync("bonjour.txt", auRevoir)
const contenuAuRevoir = readFileSync("bonjour.txt", "utf-8")
console.log(contenuAuRevoir)

/// exercice 3 /// 

const course = ["pain","lait", "pommes"]
writeFileSync("course.txt", course.join("\n"))
const contenuCourse = readFileSync("course.txt", "utf-8")
console.log(contenuCourse)

/// exercice 4 ///
const profil = { prenom: "Ada", langages: ["HTML", "CSS", "JavaScript"], debutante: true }
writeFileSync("profil.json", JSON.stringify(profil, null, 2))
const profilLu = JSON.parse(readFileSync("profil.json","utf-8"))
console.log(profilLu.prenom, profilLu.langages.length);


/// exercice 5 ///

function ecrireBilan (chemin, taches)  {
    const ligneTache = taches.map((tache) => { 
    if (tache.faite === true) {
      return(`✅ ${tache.nom}`)}

    else {
        return(`❌ ${tache.nom}`)
    }
})

const tachesFaites =taches.filter((tache) => tache.faite === true)



}


 const mesTaches =  [
  { nom: "lire le cours", faite: true },
  { nom: "finir le TP", faite: true },
  { nom: "relire mes notes", faite: false },
]

 writeFileSync(ecrireBilan("bilan.txt", mesTaches));


