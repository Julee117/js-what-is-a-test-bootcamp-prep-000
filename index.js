// write your code below!
var index.name = "Susan"
var height = 74
var message = `${name} is ${height} inches tall`

console.log(index.name)
console.log(message)

describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })

module.exports = {name, height, message}
