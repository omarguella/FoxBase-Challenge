import { PropertyRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProduktFilter, UntergrundAuswahllInter, FarbtonAuswahlInter,AnwendungsBereichAuswahlInter,DeckkraftAuswahlInter,filterMapErstellen,filterMap} from '../models/ProduktFilter';


@Component({
  selector: 'app-auswahl-menu',
  templateUrl: './auswahl-menu.component.html',
  styleUrls: ['./auswahl-menu.component.css']
})




export class AuswahlMenuComponent implements OnInit {
  
  begin=false;
  Deckkraftkennen:string=""; // entweder Ja Oder Nein
  produktFilter: ProduktFilter= new ProduktFilter("","","",""); // Filter instanziieren


  /* Map von Kriterium die Wahl allein auszuzeigen   */

  anwendungsMap:typeof filterMap=filterMapErstellen(["Aussen","Innen"],true) ;
  untergrundMap:typeof filterMap=filterMapErstellen(["Holz","Fassade","Tapete","Putz"],true) ;
  deckkraftMap:typeof filterMap=filterMapErstellen(["Minus90","Gleich95","Gleich98","Plus99","Heller","Dunkler"],true) ;
  farbtonMap:typeof filterMap=filterMapErstellen(["Rot","Blau","Grun","Gelb","Schwarz","Weiss"],true) ;

  constructor( ) {  }

  ngOnInit(): void {
  }

  getFilterProdukt()
{  
  console.log(this.produktFilter); 
  return this.produktFilter;
}



////////////// Begin Auswahl & Clear ////////
setDefault(){
this.produktFilter= new ProduktFilter("","","","");
this.begin=false;
this.setAuswahlboolean(this.anwendungsMap,true);
this.setAuswahlboolean(this.untergrundMap,true);
this.setAuswahlboolean(this.deckkraftMap,true);
this.setAuswahlboolean(this.farbtonMap,true);
this.Deckkraftkennen="";
}

setBegin(){this.begin=true;
}
getBegin(){return this.begin;}


///////// Ausgewählt kriterium Speichern /////// 
setAuswahlboolean(mapListe: typeof filterMap, wert : boolean){
  for (let schl of mapListe.keys()) {
  mapListe.set(schl, wert);
}
}

/////////////////////Anwendungsbereich Auswahl/////////////////////

setAnwendungsBereich(bereich: string){ 
  this.produktFilter.anwendungsBereich=bereich;
  this.setAuswahlboolean(this.anwendungsMap,false);
  this.anwendungsMap.set(bereich,true)

}

/////////////////////Untergrund Auswahl////////////////////////////



setUntergrund(untergrund: string){ 
  this.produktFilter.untergrund=untergrund;
  this.setAuswahlboolean(this.untergrundMap,false);
  this.untergrundMap.set(untergrund,true)
}

//////////////////////////Kennen Sie Deckkraft  Auswahl////////////////////////////


setDeckkraftArt(){
  this.Deckkraftkennen='';
  this.produktFilter.deckkraft="";
  this.produktFilter.farbton="";
  this.setAuswahlboolean(this.deckkraftMap,true);
  this.setAuswahlboolean(this.farbtonMap,true);
}



//////////////////////////Deckkraft Auswahl////////////////////////////

  
  setDeckkraft(deckkraft: string){ 
    this.produktFilter.deckkraft=deckkraft;
    this.setAuswahlboolean(this.deckkraftMap,false);
    this.deckkraftMap.set(deckkraft,true)
  }


////////////////Farb Auswahl//////////////////////

setFarbton(farbton: string){ 
  this.produktFilter.farbton=farbton;
  this.setAuswahlboolean(this.farbtonMap,false);
  this.farbtonMap.set(farbton,true)
}



}
