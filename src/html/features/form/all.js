let colorInputType = require('./colorInputType.js')
let datalistElement = require('./datalistElement.js')
let dateAndTimeInputTypes = require('./dateAndTimeInputTypes.js')
let emailTelephoneAndURLInputTypes = require('./emailTelephoneAndURLInputTypes.js')
let formAttribute = require('./formAttribute.js')
let inputPlaceholderAttribute = require('./inputPlaceholderAttribute.js')
let meterElement = require('./meterElement.js')
let multipleFileSelection = require('./multipleFileSelection.js')
let numberInputType = require('./numberInputType.js')
let progressElement = require('./progressElement.js')
let rangeInputType = require('./rangeInputType.js')
let searchInputType = require('./searchInputType.js')
let validation = require('./validation/all.js')

module.exports.groupName = 'form'

let features = {}

features[colorInputType.type] = colorInputType
features[datalistElement.type] = datalistElement
features[dateAndTimeInputTypes.type] = dateAndTimeInputTypes
features[emailTelephoneAndURLInputTypes.type] = emailTelephoneAndURLInputTypes
features[formAttribute.type] = formAttribute
features[inputPlaceholderAttribute.type] = inputPlaceholderAttribute
features[meterElement.type] = meterElement
features[multipleFileSelection.type] = multipleFileSelection
features[numberInputType.type] = numberInputType
features[progressElement.type] = progressElement
features[rangeInputType.type] = rangeInputType
features[searchInputType.type] = searchInputType
features[validation.groupName] = validation.features

module.exports.features = features
