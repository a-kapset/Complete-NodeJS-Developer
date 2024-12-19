const mission = process.argv[2]

console.log('Mission is: ', mission)

console.log('================')

process.argv.forEach((arg) => {
  console.log('>>>', arg)
})