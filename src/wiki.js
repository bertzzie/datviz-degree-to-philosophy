import * as wikipedia from "node-wikipedia"; 
import * as cheerio   from "cheerio";

// This should be on its own module
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

let createResponseHandler = function (page, onResponse) {
    return function (response) {
        if (response) {
            let $ = cheerio.load(response["text"]["*"]);
            let firstLink = $("p > a").first().attr("href");
            let nextPage = firstLink.split("/").pop();

            onResponse(page, nextPage);

            if (nextPage === "Philosophy") {
                return nextPage;
            }

            return Request(nextPage, onResponse);
        }
    }
};

export var Request = function (page, onResponse) {
    return wikipedia.page.data(
        page.toProperCase(),
        {content: true},
        createResponseHandler(page, onResponse)
    );
};