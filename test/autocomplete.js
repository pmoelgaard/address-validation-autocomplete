var path = require('path');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});

// TEST START
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('#autocomplete()', function () {

    this.timeout(20000);

    it('basic', function (done) {

        // Check Query
        var query = {
          text: '767 5th A',
          country_code: 'USA'
        };

        api.autocomplete(query)
            .then(function (result) {

                expect(result).is.not.null;

                done(null, result);
            })
            .catch(function (err) {
                done(err);
            });
    });
});