import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule,} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureComponent } from './factures/facture/facture.component';
import { FactureDetailsComponent } from './factures/facture-details/facture-details.component';
import { FactureService } from './shared/facture.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PageAccuielComponent } from './page-accuiel/page-accuiel.component';
import {MatNativeDateModule} from '@angular/material';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { FinalClientComponent } from './final-client/final-client.component';
import { ContratComponent } from './contrat/contrat.component';
import { ClientService } from './shared/client.service';

@NgModule({
  declarations: [
    AppComponent,
    FacturesComponent,
    FactureComponent,
    FactureDetailsComponent,
    PageAccuielComponent,
    ClientsComponent,
    ClientComponent,
    ClientDetailsComponent,
    FinalClientComponent,
    ContratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTreeModule, MatIconModule, MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatNativeDateModule,
    ReactiveFormsModule

  ],
  entryComponents:[FactureDetailsComponent, ClientDetailsComponent],
  providers: [FactureService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
