import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeSeiteComponent } from './challenge-seite/challenge-seite.component';

const routes: Routes = [
  {path : "startSeite" , component: ChallengeSeiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
