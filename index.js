        // callAPI function that takes the base and exponent numbers as parameters


fs = require("fs");

var callAPI = (base,exponent) => {
            // instantiate a headers object
            var myHeaders = new Headers();
            // add content type header to object
            myHeaders.append("Content-Type", "application/json");
            // using built in JSON utility package turn object to string and store in a variable
            var raw = JSON.stringify({"base":base,"exponent":exponent});
            // create a JSON object with parameters for API call and store in a variable
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
       
            var path = "https://tx2utb9me1.execute-api.eu-central-1.amazonaws.com/mydev/mydemoresource"
            // make API call with parameters and use promises to get response
            fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => alert(JSON.parse(result).body))
            .catch(error => console.log('error', error));
        }

module.exports = callApiScript;