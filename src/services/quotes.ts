export class QuotesService{ 
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorites(quote: Quote){ 
		this.favoriteQuotes.push(quote);

	}


	removeQuoteFromFavorites(quote: Quote){ 
		const position = this.favoriteQuotes.findIndex((quote:));
		this.favoriteQuotes.splice();

	}
}