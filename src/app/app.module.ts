import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeSeiteComponent } from './challenge-seite/challenge-seite.component';
import { AuswahlMenuComponent } from './auswahl-menu/auswahl-menu.component';
import { ProdukteListeComponent } from './produkte-liste/produkte-liste.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ChallengeSeiteComponent,
    AuswahlMenuComponent,
    ProdukteListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
