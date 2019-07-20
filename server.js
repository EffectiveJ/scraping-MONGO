var cheerio = require("cheerio");
var axios = require("axios");



console.log("\n******************************************\n" +
            "Show all the members of TripleJump's Hall of Fame \n" +
            "Info extracted fro tripleju.mp | No images\n" +
            "\n******************************************\n");


            axios.get("http://www.tripleju.mp/").then(function(response) {

  var $ = cheerio.load(response.data);

  var results = [];

  $("Member.info").each(function(i, element) {
// not sure what to do *here*, scraping is not my thing. better ask for help 

  });

  console.log(results);
});