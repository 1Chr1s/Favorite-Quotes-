import { Component, OnInit} from '@angular/core';
import { Quote } from '../../data/quote.interface';
//import { NavParams } from 'ionic-angular';

import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
	quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  	quotesPage = QuotesPage;
/*
  	constructor(private navParams: NavParams){ 
  		
  	}
*/
	ngOnInit(){ 
		this.quoteCollection = quotes;
	}
} // End of the class 
