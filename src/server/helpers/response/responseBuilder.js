const HTTP_STATUS = require('./responseCodes.json')

const sendResponse = (status, error, data, res, message) => {
  const httpCode = HTTP_STATUS[status]
  const responseData = {
    status: status,
    message: message,
    data: error ? undefined : data,
    error: error ? error : undefined,
  }
  res.status(httpCode).send(responseData)
}

module.exports = {
  sendResponse,
}
