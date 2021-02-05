import './styles/style.scss'
import { getTripDetails } from './js/controller'
import { showModal } from './js/view'

document.addEventListener('DOMContentLoaded', () => {
  const buttonSubmit = document.querySelector('.submit-btn')
  buttonSubmit.addEventListener('click', async (event) => {
    event.preventDefault()
    const trip = await getTripDetails()
    if (trip) {
      showModal(trip)
    }
  })
})
