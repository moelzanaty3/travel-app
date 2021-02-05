const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const tripsFilePath = path.join(__dirname, '../../trips.json')

async function getAllTrips() {
  try {
    let trips = []
    await fs.readFile(tripsFilePath, (err, data) => {
      if (err) throw err
      trips = JSON.parse(data)
    })
    return trips
  } catch (error) {
    throw new Error(error)
  }
}

function saveTrip(trip) {
  try {
    let trips = []
    fs.readFile(tripsFilePath, (err, data) => {
      if (err) throw err
      const currentTrips = JSON.parse(data)
      trips = [...currentTrips, { id: uuidv4(), ...trip }]
      return fs.writeFileSync(tripsFilePath, JSON.stringify(trips, null, 2))
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  saveTrip,
  getAllTrips,
}
