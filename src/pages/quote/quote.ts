import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
	// Variables: 
	person: string;
	text:string;

	constructor(private viewCtrl: ViewController, 
		private navParams: NavParams){

	} // End of constructor. 
	ionViewDidLoad(){ 
		this.person = this.navParams.get('person');
		this.text = this.navParams.get('text');
	}

	onClose(remove = false){ 
		this.viewCtrl.dismiss(remove);
	} // End of function.
} // End of the class.
