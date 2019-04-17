//Requires
const htmlToJson = require('html-to-json');

//Conjugation function
module.exports.conjugate = function(options){

  //Results from scraping
  var results = [];

  //Promise creation
  return new Promise((resolve, reject) => {

    //Request url
    const url = 'https://www.spanishdict.com/conjugate/' + options.word;

    //Makes the request
    htmlToJson.request(url, {

      //Searches the site for all div tags with the tense and person defined by the user
      div: ['div', function($div){
        if ($div.attr('data-tense') === options.tense && $div.attr('data-person') === options.person){
          results.push($div.text());
        }
      }],

      //Searches the site for all anchor tags with the tense and person defined by the user
      a: ['a', function($a){
        if ($a.attr('data-tense') === options.tense && $a.attr('data-person') === options.person){
          results.push($a.text());
        }
      }]
    }, (err, res) => {

      //Rejects error
      if (err) return reject(err);

      //Resolves on success
      resolve(results);
    });
  });
}
