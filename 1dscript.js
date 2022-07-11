let popul = data.reduce((acc, item) => {
    return acc + item.name + ' ' + ':' + ' ' + item.population + "\n"
})
console.log(popul);