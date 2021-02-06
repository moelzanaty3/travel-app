import { handleError, NOTIFICATION_SETTING } from "../utils/utils";

const BASE_URL = 'http://localhost:8081'

async function saveData(url, data) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    const json = await response.json()
    if (response.status === 200) {
      const { message } = json
      Toastify({
        text: message,
        className: 'success',
        ...NOTIFICATION_SETTING,
      }).showToast()
    } else {
      const { message } = json
      handleError(message)
    }
  } catch (error) {
    handleError(error.message)
  }
}

async function fetchData(url) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`)
    const json = await response.json()
    if (response.status === 200) {
      const { data, message } = json
      Toastify({
        text: message,
        className: 'success',
        ...NOTIFICATION_SETTING,
      }).showToast()
      return data
    } else {
      const { message } = json
      handleError(message)
    }
  } catch (error) {
    handleError(error.message)
  }
}

export { fetchData, saveData }
