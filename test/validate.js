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

describe('#validate()', function () {

    this.timeout(20000);

    it('basic', function (done) {

        // Check Query
        var query = {
          address1: '767 5th Ave',
          postal_code: '10153',
          locality: 'New York',
          country_code: 'US'
        };

        api.validate(query)
            .then(function (result) {

                expect(result).is.not.null;

                done(null, result);
            })
            .catch(function (err) {
                done(err);
            });
    });
});