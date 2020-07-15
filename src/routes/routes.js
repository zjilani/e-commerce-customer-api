const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/createCustomer",
        handler: controllers.createCustomer,
        schema: documentation.createCustomer,
        preValidation: validators.validateCreateCustomerRequest
    },
    {
        method: "GET",
        url: "/getCustomer",
        handler: controllers.getCustomer,
        schema: documentation.getCustomer,
        preValidation: validators.validateGetCustomerRequest
    },
    {
        method: "POST",
        url: "/updateCustomer",
        handler: controllers.updateCustomer,
        schema: documentation.updateCustomer,
        preValidation: validators.validateUpdateCustomerRequest
    },
    {
        method: "POST",
        url: "/loginVerification",
        handler: controllers.loginVerification,
        schema: documentation.loginVerification,
        preValidation: validators.validateLoginVerification
    },
    {
        method: "POST",
        url: "/customerFeedback",
        handler: controllers.customerFeedback,
        schema: documentation.customerFeedback,
        preValidation: validators.validateCustomerFeedback
    }
    
]


module.exports = routes