const algorithmia = require('algorithmia')
const algorithmiaApikey = require('../credentials/algorithmia.json').apiKey

function robot(content) {
	fetchContentFromWikipedia(content)
	//sanitizedContent(content)
	//breakContentIntoSentences(content)
	
	
	async function fetchContentFromWikipedia(cotent) {
	    const algorithmiaAuthenticated = algorithmia('algorithmiaApikey')
	    const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
	    const wikipediaResponde = await wikipediaAlgorithmia.pipe(content.searchTerm)
	    const wikipediaContent = wikipediaResponde.get()
	    console.log(wikipediaContent)
	}
} 

module.exports = robot
