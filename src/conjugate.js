//Requires
const htmlToJson = require('html-to-json');
const https = require('https');

//Conjugation function
module.exports.conjugate = function(options){

  //Results from scraping
  var results = [];

  //Promise creation
  return new Promise((resolve, reject) => {

    //Errors
    if (typeof options !== 'object') return reject(new Error('The conjugate function only takes an object'));
    if (!options.tense) return reject(new Error('No tense provided'));
    if (!options.person) return reject(new Error('No person provided'));

    //Request url
    const url = 'https://www.spanishdict.com/conjugate/' + options.word;

    //Makes the request
    https.get(url, (response) => {

      //Data recieved
      var data = '';

      //Recieves data
      response.on('data', (chunk) => {
        data += chunk;
      });

      //Checks for end
      response.on('end', () => {
        if (response.statusCode === 302){
          if (options.translateOnError === true && response.statusCode === 302){
            require(__dirname + '/translate.js').translate(options).then(resolve).catch(reject);
          }else{
            reject(new Error('The word given was not a verb'));
          }
        }else{

          //Parses the data
          htmlToJson.parse(data, {

            //Searches the page for all div tags with the tense and person defined by the user
            div: ['div', function($div){
              if ($div.attr('data-tense') === options.tense && options.tense !== 'any') return;
              if ($div.attr('data-person') === options.person && options.person !== '6') return;
              results.push($div.text());
            }],

            //Searches the page for all anchor tags with the tense and person defined by the user
            a: ['a', function($a){
              if ($a.attr('data-tense') === options.tense && options.tense !== 'any') return;
              if ($a.attr('data-person') === options.person && options.person !== '6') return;
              results.push($a.text());
            }]

          }, (err, res) => {

            //Rejects error
            if (err) return reject(err);

            //Resolves on success
            resolve(results);
          });
        }
      });
    });
  });
}
