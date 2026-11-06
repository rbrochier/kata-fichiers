import { writeFileSync, readFileSync, } from "fs"


/// exercice 1 ///

const bonjour = "Bonjour Ada !" 
writeFileSync("bonjour.txt", bonjour)
const contenuBonjour = readFileSync("bonjour.txt", "utf8")
console.log(contenuBonjour)


/// exercice 2 ///

const auRevoir = "Au revoir Ada !"
writeFileSync("bonjour.txt", auRevoir)
const contenuAuRevoir = readFileSync("bonjour.txt", "utf8")
console.log(contenuAuRevoir)