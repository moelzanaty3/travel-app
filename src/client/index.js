import './styles/style.scss'
import { getAllTrips, getTripDetails, saveTrip } from './js/controller'
import { populateAllTrips, showModal } from './js/view'

let trip = null

/**
 * Event Listener to handle the Content Loaded
 */
document.addEventListener('DOMContentLoaded', async () => {
  // get all trips
  const trips = await getAllTrips()
  populateAllTrips(trips)

  // handle form submit
  const buttonSubmit = document.querySelector('.submit-btn')
  buttonSubmit.addEventListener('click', async (event) => {
    event.preventDefault()
    // get all available trips
    trip = await getTripDetails()
    if (trip) {
      showModal(trip)
    }
  })

  // handle save trip
  const buttonSaveTrip = document.getElementById('save-trip')
  buttonSaveTrip.addEventListener('click', async (event) => {
    event.preventDefault()
    // save trip
    await saveTrip(trip)
    $('#trip-overview-modal').modal('hide')
    // get all trips
    const trips = await getAllTrips()
    populateAllTrips(trips)
  })

  // select all buttons, each as el
  document.querySelectorAll('#trips').forEach(function (el) {
    // bind click event to each el
    el.addEventListener('click', function (e) {
      // collapse target trip
      $(e.target.dataset.target).collapse('toggle')
    })
  })
})
