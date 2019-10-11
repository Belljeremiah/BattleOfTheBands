// This is my Global Variable
let bandNumber = 1

// I know I need to Write an Impure Function here but I am too stupid to do that...

const takeNumber = function (bandName) {
  for (bandNumber.length; bandNumber++;)
    return (`${bandNumber-1}.  ${bandName}`)
   
}
// These const are to be used as arguments in the function
const scum = takeNumber("Galactic Scum") 
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs") 
console.log(under)  // This should print "2. Underdogs" in the console

const thePrettyReckless = takeNumber("The Pretty Reckless")
console.log(thePrettyReckless)