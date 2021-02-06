export const diffDays = (date1, date2) => {
  const diffTime = Math.abs(new Date(date1) - new Date(date2))
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export const NOTIFICATION_SETTING = {
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: 'top',
  position: 'right',
  stopOnFocus: true, // Prevents dismissing of toast on hover
}

export const handleError = (message) => {
  Toastify({
    text: message,
    className: 'error',
    ...NOTIFICATION_SETTING,
  }).showToast()
}
