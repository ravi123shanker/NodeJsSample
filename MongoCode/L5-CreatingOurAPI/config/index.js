var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds155160.mlab.com:55160/deepak`;
    }
    
}