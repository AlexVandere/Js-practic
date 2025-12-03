const minNum = Math.floor(Math.random()*(59-0)+0)
console.log(minNum)


if (minNum < 15) {
    console.log(`${minNum}:ввели першу чтверь`)
}else if ( minNum <= 30 ) {
    console.log('ввели другу чтверь')
} else if ( minNum <= 45 ){
      console.log('ввели тьретю чтверь')
} else {
      console.log('ввели четверту чтверь')
}