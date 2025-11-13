const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const options = {
    oauth: {
        clientId: "api-docs",
        clientSecret: "mySecret",
        appName: "My API",
        scopeSeparator: " ",
        scopes: "admin"
    }
};

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, undefined, options));

module.exports = router;