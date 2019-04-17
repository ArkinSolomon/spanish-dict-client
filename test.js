const dict = require('./index.js');

function main(){
  return dict.conjugate({
    word: 'batir',
    tense: 'preteritIndicative',
    person: '1'
  });
}
main().then(console.log).catch(console.log);
