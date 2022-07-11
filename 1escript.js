let cur = data.filter((item) => ((item.currencies[0].code == 'USD') && (item.name != 'Antarctica')))
for (let i = 0; i < cur.length; i++) {
    console.log(`
     Name : ${cur[i].name}
   `)
}
} else { console.log(this.response); }
}