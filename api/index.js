'use strict';

var utils = require('../lib/utils');

var API = {};

API.validate = require('./validate');
API.autocomplete = require('./autocomplete');
API.reverse = require('./reverse');

API.get = function (name) {
    var api = utils.get(this, name);
    return api;
};

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;