import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

import { AlertController } from 'ionic-angular';

import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
	quoteGroup: {category: string, quotes: Quote[], icon: string};
	
	constructor(private navParams: NavParams, 
		private alertCtrl: AlertController, 
		private quotesService: QuotesService){ 
		// Can retrieve data from constructor but going to try another way 
		
	}

	ngOnInit(){ 
		this.quoteGroup = this.navParams.data;
	} // End of ngOnInit() function
/*
	ionViewDidLoad() { 
		// Retrieving the data:
		// Must add the elvis operator(?) in the template to use this:
		this.quoteGroup = this.navParams.data;

	} // End of ionViewDidLoad() function.
*/



onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }

onRemoveFromFavorites(quote: Quote){ 
	this.quotesService.removeQuoteFromFavorites(quote);
	
} // End of function.

isFavorite(quote: Quote){ 
	return this.quotesService.isQuoteFavorite(quote);
} // End of function

} // End of QuotesPage class 
