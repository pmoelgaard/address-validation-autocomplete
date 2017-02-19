
[![Travis](https://travis-ci.org/pmoelgaard/address-validation-autocomplete.svg)](Travis)

Node JavaScript wrapper for [the streetlayer API](https://streetlayer.com).

Supports both traditional callbacks and Promises/A+.

---

## Installation
	npm install address-validation-autocomplete [--save]


## Configuration

Before using the numverify API client you have to setup your account and obtain your API Access Key.  
You can get it by signing up at [https://streetlayer.com/product](https://streetlayer.com/product).

---

## Usage

The general API is documented here: [https://streetlayer.com/documentation](https://streetlayer.com/documentation).  
You can find parameters, result set definitions and status codes documented here as well.


### Setup

	var API = require('address-validation-autocomplete');
	var api = new API({
    	access_key: [ACCESS_KEY],
    	secure: [true|false] (Optional, defaults to false)
	});

#### Optional Parameters

##### Secure (only available for Basic, Pro and Enterprise accounts)
Boolean value to indicate if the calls to the API should use a secure protocol or insecure (HTTP/HTTPS). Defaults to false (HTTP, insecure).

---

## Callbacks vs. Promises

The Promises/A+ implementation used for this is this excellent bare bones library:  
[https://www.npmjs.com/package/promise](https://www.npmjs.com/package/promise)

The phone-number-validation library supports either mode and use of either one is not mutually exclusive to the alternative, so it's possible to use one exclusively or a combination, even in the same call, both the callback will be called and the promise handlers invoked.

---

## API Overview
All endpoints in the public API is available through this library.

- validate
- autocomplete
- reverse

---

## validate
Verify an address.

###### Define Query

	var query = {
    	address1: '767 5th Ave',
        postal_code: '10153',
        locality: 'New York',
        country_code: 'US'
    };

###### Simple Request (using Callback)

	api.validate(query, function (err, result) {
    	if (err) {
        	return console.log('Validate Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('Validate Callback (Success): ' + JSON.stringify(result));
	});
    
###### Response
```
{
  "validation_status": "valid",
  "address_components": {
     "country_code_alpha2": "US",
     "country_code_alpha3": "USA",
     "country": "United States",
     "county": "New York County",
     "locality": "New York",
     "postal_code": "10153",
     "region": "New York",
     "street": "5 Avenue",
     "housenumber": "767",
     "neighbourhood": "Midtown"
  },
  "validation_result": {
     "locality": true,
     "county": null,
     "region": null,
     "postal_code": true,
     "street": true,
     "housenumber": true
  },
  "formatted_address": [
     "5 Avenue 767",
     "New York, 10153",
     "United States"
  ],
  "coordinates": {
     "latitude": 40.763554,
     "longitude": -73.972839
  }
}
```

## autocomplete
Get address suggestions based on string.

###### Define Query

	var query = {
    	text: '767 5th A',
        country_code: 'USA'
    };

###### Simple Request (using Callback)

	api.autocomplete(function (err, result) {
    	if (err) {
        	return console.log('AutoComplete Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('AutoComplete Callback (Success): ' + JSON.stringify(result));
	});
    
###### Response
```
{
  "success": true,
  "results": [
     {
        "address_components": {
           "country_code_alpha2": "US",
           "country_code_alpha3": "USA",
           "country": "United States",
           "county": "San Diego County",
           "locality": "Chula Vista",
           "postal_code": "91910",
           "region": "California",
           "street": "5th Avenue",
           "housenumber": "767",
           "neighbourhood": "Mid-Broadway District"
        },
        "formatted_address": [
           "5th Avenue 767",
           "Chula Vista, 91910",
           "United States"
        ],
        "coordinates": {
           "latitude": 32.622941,
           "longitude": -117.081476
        }
     },
     {
        "address_components": {
           "country_code_alpha2": "US",
           "country_code_alpha3": "USA",
           "country": "United States",
           "county": "New York County",
           "locality": "New York",
           "postal_code": "10153",
           "region": "New York",
           "street": "5th Avenue",
           "housenumber": "767",
           "neighbourhood": "Midtown"
        },
        "formatted_address": [
           "5th Avenue 767",
           "New York, 10153",
           "United States"
        ],
        "coordinates": {
           "latitude": 40.763528,
           "longitude": -73.972801
        }
     },
     [...]
```

## reverse
Get address suggestions based on string.

###### Define Query

	var query = {
		latitude: 40.763528,
        longitude: -73.972801
    };

###### Simple Request (using Callback)

	api.reverse(function (err, result) {
    	if (err) {
        	return console.log('Reverse Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('Reverse Callback (Success): ' + JSON.stringify(result));
	});
    
###### Response
```
{
  "success": true,
  "results": [
     {
        "address_components": {
           "country_code_alpha2": "US",
           "country_code_alpha3": "USA",
           "country": "United States",
           "county": "New York County",
           "locality": "New York",
           "postal_code": "10153",
           "region": "New York",
           "street": "5 Avenue",
           "housenumber": "767",
           "neighbourhood": "Midtown"
        },
        "formatted_address": [
           "5 Avenue 767",
           "New York, 10153",
           "United States"
        ],
        "coordinates": {
           "latitude": 40.763554,
           "longitude": -73.972839
        }
     },
     {
        "address_components": {
           "country_code_alpha2": "US",
           "country_code_alpha3": "USA",
           "country": "United States",
           "county": "New York County",
           "locality": "New York",
           "postal_code": "10022",
           "region": "New York",
           "street": "East 58 Street",
           "housenumber": "12",
           "neighbourhood": "Midtown"
        },
        "formatted_address": [
           "East 58 Street 12",
           "New York, 10022",
           "United States"
        ],
        "coordinates": {
           "latitude": 40.763268,
           "longitude": -73.972842
        }
     },
     [...]
```

---


## Customer Support

Need any assistance? [Get in touch with Customer Support](mailto:support@apilayer.net?subject=%streetlayer%5D).

---

## Updates
Stay up to date by following [@apilayernet](https://twitter.com/apilayernet) on Twitter.

---

## Legal

All usage of the numverify website, API, and services is subject to the [streetlayer Terms & Conditions](https://streetlayer.com/terms) and all annexed legal documents and agreements.

---

## Author
Peter Andreas Moelgaard ([GitHub](https://github.com/pmoelgaard), [Twitter](https://twitter.com/petermoelgaard))

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2017 Peter Andreas Moelgaard & apilayer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.