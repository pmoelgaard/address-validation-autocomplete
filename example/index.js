var path = require('path');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});

var validateQuery = {
  address1: '767 5th Ave',
  postal_code: '10153',
  locality: 'New York',
  country_code: 'US'
};
api.validate(validateQuery, function (err, result) {
    if (err) {
        return console.log('Validate Callback (Error): ' + JSON.stringify(err));
    }
    console.log('Validate Callback (Success): '+ JSON.stringify(result));
});