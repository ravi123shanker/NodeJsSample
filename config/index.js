var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds141950.mlab.com:41950/ryadavmongo`;
    }
    
}