

	export interface FarbtonAuswahlInter {
		Rot : boolean,
		Blau:boolean,
		Grun : boolean,
		Gelb:boolean,
		Schwarz:boolean,
		Weiss:boolean
	}

	export interface AnwendungsBereichAuswahlInter {
		Aussen : boolean,
		Innen:boolean,
		
	}
	
	export interface UntergrundAuswahllInter {
	Holz: boolean,
    Fassade:boolean,
    Tapete:boolean,
    Putz:boolean
	}
	

	export interface DeckkraftAuswahlInter
	{
		Minus90: boolean,
  	 	Gleich95:boolean,
   		Gleich98:boolean,
		Plus99:boolean,
		Heller:boolean,
		Dunkler:boolean,
	}


	 export let filterMap = new Map<string, boolean>();

	export function filterMapErstellen (keyListe: string[], wert:boolean){
		let newMap = new Map<string, boolean>();
		for (let key of keyListe) {
			newMap.set(key, wert);
		}
		return newMap;
	}

export class ProduktFilter {
	constructor(
		public anwendungsBereich: string,
		public untergrund: string,
		public deckkraft: string,
        public farbton: string)
         {
		this.anwendungsBereich = anwendungsBereich;
		this.untergrund = untergrund;
		this.deckkraft = deckkraft;
		this.farbton = farbton;
	}
}