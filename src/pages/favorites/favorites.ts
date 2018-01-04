import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
	// Array of quotes:
	quotes: Quote[];

	constructor(private quotesService: QuotesService,
		private modalCtrl: ModalController,
		private settingsService: SettingsService){

	} // End of the constructor.

	ionViewWillEnter(){ 
		this.quotes = this.quotesService.getFavoriteQuotes();
	} // End of function.

	onViewQuote(quote: Quote){ 
		const modal = this.modalCtrl.create(QuotePage, quote);
		modal.present();
		// Getting the "remove" from the quote.ts file: 
		modal.onDidDismiss((remove: boolean) => {
			if(remove){
				this.onRemoveFromFavorites(quote);
			}	
		});
	} // End of onViewQuote function.

	onRemoveFromFavorites(quote: Quote){ 
		this.quotesService.removeQuoteFromFavorites(quote);
		// Refreshing the page underneath:
		this.quotes = this.quotesService.getFavoriteQuotes();
	} // End of function().

	getBackground(){
		return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
	} // End of function.

} // End of class 
