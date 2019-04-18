# **spanish-dict-client**

[![npm version](https://badge.fury.io/js/spanish-dict-client.svg)](https://badge.fury.io/js/spanish-dict-client)

## **Disclaimer**

This is an ***unofficial*** client. This package is not endorsed by, or correlated to, SpanishDict or Curiosity Media Inc., it simply scrapes [www.spanishdict.com](https://www.spanishdict.com/) and returns data from the site.

## Info

This package currently can only translate and conjugate. I will expand the project if there is enough interest.

## Installation

Paste this into your command line:<br>
`npm install spanish-dict-client`

Put this at the top of your JavaScript file:<br>
`const dict = require('spanish-dict-client');`

## Functions
### Translate `.translate(<word>)`

The `translate` function translates a verb from either Spanish to English, or English to Spanish.<br>

The function takes in one parameter, the word. This parameter can either be a `string` or an `object` with the key of `word`. It returns a promise which if resolved, returns an array with the translations, or if rejected returns an error.<br>

**Example:**
```javascript
dict.translate('ser')
  .then(console.log)
  .catch(console.log);

//Outputs: [ 'to be' ]  
```

### Conjugate `.conjugate(<options>)`

The `conjugate` function conjugates a Spanish verb, even if the verb is already conjugated.<br>

The function takes in one `object`, options. Here are the potential keys that can be used:

* `word`: A `string` which is the verb to be conjugated.
* `tense`: A `string` which is the tense to be conjugated to. See further down for details.
* `person`: A `string` which is the person to be conjugated to. See further down for details.
* `translateOnError`: *Optional* A `boolean` which, if true, translates the word instead of conjugating it if the word is not a Spanish verb.

**Example:**
```javascript
var options = {
  word: 'hacer',
  tense: 'preteritIndicative',
  person: '4',
  translateOnError: true
};

dict.conjugate(options)
  .then(console.log)
  .catch(console.log);

//Outputs: [ 'hicisteis' ]
```

## Tenses

### Indicative Tenses

|  Verb Tense 	| Tense (Put this in your program) 	|
|:-----------:	|:--------------------------------:	|
|   Present   	|         presentIndicative        	|
|  Preterite  	|        preteritIndicative        	|
|  Imperfect  	|        imperfectIndicative       	|
| Conditional 	|       conditionalIndicative      	|

### Subjunctive Tenses

|  Verb Tense 	| Tense (Put this in your program) 	|
|:-----------:	|:--------------------------------:	|
|   Present   	|        presentSubjunctive        	|
|  Imperfect  	|       imperfectSubjunctive       	|
| Imperfect 2 	|       imperfectSubjunctive2      	|
|    Future   	|         futureSubjunctive        	|

### Imperative Tenses

|  Verb Tense 	| Tense (Put this in your program) 	|
|:-----------:	|:--------------------------------:	|
| Affirmative 	|            imperative            	|
|   Negative  	|        negativeImperative        	|

### Continuous / Progressive Tenses

|  Verb Tense 	| Tense (Put this in your program) 	|
|:-----------:	|:--------------------------------:	|
|   Present   	|         presentContinuous        	|
|  Preterite  	|        preteritContinuous        	|
|  Imperfect  	|        imperfectContinuous       	|
| Conditional 	|       conditionalContinuous      	|
|    Future   	|         futureContinuous         	|

### Perfect Tenses

|  Verb Tense 	| Tense (Put this in your program) 	|
|:-----------:	|:--------------------------------:	|
|   Present   	|          presentPerfect          	|
|  Preterite  	|          preteritPerfect         	|
|     Past    	|            pastPerfect           	|
| Conditional 	|        conditionalPerfect        	|
|    Future   	|           futurePerfect          	|

### Perfect Subjunctive Tenses

| Verb Tense 	| Tense (Put this in your program) 	|
|:----------:	|:--------------------------------:	|
|    Past    	|     presentPerfectSubjunctive    	|
|   Present  	|      pastPerfectSubjunctive      	|
|   Future   	|     futurePerfectSubjunctive     	|

### Misc. Tenses

| Verb Tense 	| Tense (Put this in your program) 	|
|:----------:	|:--------------------------------:	|
|     Any    	|                any               	|

## Persons

|        Person       	| Person code (Put this in your program) 	|
|:-------------------:	|:--------------------------------------:	|
|          Yo         	|                    0                   	|
|          Tú         	|                    1                   	|
|    Él/Ella/Usted    	|                    2                   	|
|       Nosotros      	|                    3                   	|
|       Vosotros      	|                    4                   	|
| Ellos/Ellas/Ustedes 	|                    5                   	|
|         Any         	|                    6                   	|
