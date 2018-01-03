import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
	quoteGroup: {category: string, quotes: Quote[], icon: string};
	
	constructor(private navParams: NavParams, 
		private alertCtrl: AlertController){ 
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


	onAddToFavorite(selectedQuote: Quote){ 

		const alert = this.alertCtrl.create({
			title: 'Add Quote',
			subtitle: 'Are you sure?',
			message: 'Are you want to add the quote?',
			buttons: [{
				text: 'Yes, indeed', 
				handler: () => {
					console.log('Yes button was pressed');
				}
			},
				{
					text: 'No, I changed my mind', 
					handler: () => { 
						console.log('No button was pressed');
					}
						
			}]
		});
		alert.present();
	} // End of the onAddToFavorite() function
} // End of QuotesPage class 
