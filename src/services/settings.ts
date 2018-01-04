export class SettingsService{ 
	private altBackground = false;

	setBackground(isAlt: boolean){ 
		this.altBackground = isAlt;
	}

	isAltBackground(){ 
		return this.altBackground;
	}
} // End of class 