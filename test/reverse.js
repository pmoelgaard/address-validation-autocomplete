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

describe('#reverse()', function () {

    this.timeout(20000);

    it('basic', function (done) {

        // Check Query
        var query = {
          latitude: 40.763528,
          longitude: -73.972801
        };

        api.reverse(query)
            .then(function (result) {

                expect(result).is.not.null;

                done(null, result);
            })
            .catch(function (err) {
                done(err);
            });
    });
});