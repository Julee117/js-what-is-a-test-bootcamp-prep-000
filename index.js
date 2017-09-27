// write your code below!
var name = "Susan"
var height = 35
var message = `${name} is ${height} inches tall`

console.log(name)
console.log(message)

describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan')
    })
  })

  describe("Height", () => {
      it("is less than 40", () => {
        expect(index.height).toBeLessThan(40)
      })
    })

module.exports = {name, height, message}
