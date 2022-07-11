 //name, capital, flag using forEach function
 data.forEach((item) => {
    console.log(`
Name : ${item.name}
Capital : ${item.capital}
Flag : ${item.flag}
`)
})
//total population of countries using reduce function
let popul = data.reduce((acc, item) => {
return acc + item.name + ' ' + ':' + ' ' + item.population + "\n"
})
console.log(popul);