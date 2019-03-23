import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturesComponent } from './factures/factures.component';
import { FactureComponent } from './factures/facture/facture.component';
import { PageAccuielComponent } from './page-accuiel/page-accuiel.component';
import { ClientComponent } from './clients/client/client.component';
import { FinalClientComponent } from './final-client/final-client.component';
import { ContratComponent } from './contrat/contrat.component';

const routes: Routes = [
  {path:'', redirectTo:'page-accuiel',pathMatch:'full'},
 // {path:'', redirectTo:'facture',pathMatch:'full'},
  {path:'factures', component:FacturesComponent},
  {path:'client', component:ClientComponent},
  {path:'final-client', component:FinalClientComponent},
  {path:'contrat', component:ContratComponent},
  {path:'page-accuiel', component:PageAccuielComponent},
  {path:'facture', children:[
  {path:'', component:FactureComponent},
  {path:'edit/:id', component:FactureComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
