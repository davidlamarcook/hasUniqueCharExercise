// Write your code below

let hasUniqueChar = (word) => {
    for (let i = 0; i < word.length; i++){
        for (let j = 1; j < word.length; j++){
            if (word[i] === word[j]){
                return false
            }
        }
        return true
    }
   
}

console.log(hasUniqueChar('hanNAH'))

//I was wondering if I would be able to impliment a .forEach() in this but not sure how, would love some feedback if that is possible here. 