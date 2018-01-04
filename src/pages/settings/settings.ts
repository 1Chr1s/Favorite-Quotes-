import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	constructor(private settingsService: SettingsService){ 

	} // End of constructor 

	onToggle(toggle: Toggle){ 
		this.settingsService.setBackground(toggle.checked);
		console.log(toggle);
	} // End of function 

	checkAltBackground(){ 
		return this.settingsService.isAltBackground();
	} // End of function

}
