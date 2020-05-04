const sortDistance = require('./index')

describe('sort distance', () => {
  it('should be a function', () => {
    expect(typeof sortDistance).toBe('function')
  })

  it('should return the sorted array', () => {
    const points = [
      { x: 3, y: 5 },
      { x: 80, y: 34 },
      { x: 3, y: 7 },
      { x: 22, y: 88 },
      { x: 100, y: 60 }
    ]

    const origin = { x: 50, y: 50 }
    const nearest = { x: 80, y: 34, distance: 34 }
    expect(sortDistance(origin, points)[0]).toEqual(nearest)
  })
})
