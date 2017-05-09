/*
* This is a script that allows you to make HTTP calls to fetch JSON data. The script follows an OOP approach.  
*/

/*
* This is the class itself, it creates a new HTTP request, fetches the data (such as a JSON file) and parses it. 
* Store this in a file named something like ajax-service.js
*/

var AjaxService = function () {

    this.get = function (url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);

            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    var data = JSON.parse(request.responseText);
                    resolve(data);
                }
            };

            request.onError = function () {
            };

            request.send();
        });
    };
};

/*
* This part of the script, calls the ajax-service, makes a promise abd then pushes the JSON data into an array asynchronously.
* Store this script in a file named something similar to data-service.js
*/

var DataService = function (ajaxService) {
    var url = "path_to_JSON_file.json";

    var data = []; 

    this.get_all = function (callback) {
        ajaxService.get(url)
            .then(function (response) {
                response.forEach(function (data_to_push) {
                    data.push(data_to_push)
                });
                callback(response);
            });
    };
};

/*
* This is a way to actually start using the data you have captured.
*/

var dataService = new DataService(new AjaxService());
dataService.get_all(function(data) {
  data.forEach(function(data_chunk) {
    console.log(data_chunk); 
  });
});
