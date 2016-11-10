/* eslint-env mocha */
let dateAndTimeInputTypesFeature = require('../../../src/html/features/form/dateAndTimeInputTypes.js')
let featureTest = require('../featureTest.js')

describe('Date and time input types', function () {
  it('should find date input', function () {
    let html = `<input type="date">`
    featureTest(html, dateAndTimeInputTypesFeature)
  })

  it('should find month input', function () {
    let html = `<input type="month">`
    featureTest(html, dateAndTimeInputTypesFeature)
  })

  it('should find week input', function () {
    let html = `<input type="week">`
    featureTest(html, dateAndTimeInputTypesFeature)
  })

  it('should find time input', function () {
    let html = `<input type="time">`
    featureTest(html, dateAndTimeInputTypesFeature)
  })

  it('should find datetime-local input', function () {
    let html = `<input type="datetime-local">`
    featureTest(html, dateAndTimeInputTypesFeature)
  })
})
