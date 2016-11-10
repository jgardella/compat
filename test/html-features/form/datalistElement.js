/* eslint-env mocha */
let datalistElementFeature = require('../../../src/html/features/form/datalistElement.js')
let featureTest = require('../featureTest.js')

describe('Datalist element', function () {
  it('should find datalist element', function () {
    let html =
      `<datalist id=sexes>
         <label>
          or select from the list:
          <select name=sex>
           <option value="">
           <option>Female
           <option>Male
          </select>
         </label>
        </datalist>
      `
    featureTest(html, datalistElementFeature)
  })
})
