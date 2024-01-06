const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const swaggerModules = require('./SWAGGER_MODULES');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...swaggerModules,
    ...tags,

};
