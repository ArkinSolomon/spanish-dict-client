//Requires
const htmlToJson = require('html-to-json');

//Translation function
module.exports.examples = function(o){

  //Results from scraping
  var results = [];

  //Options variable
  var options = {};

  //Checks for string or object
  if (typeof o === 'string'){
    options.word = o;
  }else if (typeof o === 'object') {
    options = o;
  }

  //Promise creation
  return new Promise((resolve, reject) => {

    //Request url
    const url = 'https://www.spanishdict.com/translate/' + options.word;

    //Makes the request
    htmlToJson.request(url, {

      //Searches the site for all div tags with the tense and person defined by the user
      div: ['div', function($div){
        if ($div.attr('class')){
          results.push($div.attr('class'));
        }
      }]

    }, (err, res) => {

      //Rejects error
      if (err) return reject(err);

      //Checks if there were any found translations
      if (results.length <= 0 && (!(results[0]))) return reject(new Error(`Examples for ${options.word} were not found`));

      //Resolves on success
      resolve(results);
    });
  });
}
