import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from 'src/app/shared/client.service';
import { ClientDetailsComponent } from '../client-details/client-details.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {
 
  constructor(private service:ClientService,
    private toastr:ToastrService,
    private router:Router,
    private dialog:MatDialog,
    private currentRoute: ActivatedRoute) { }


  ngOnInit() {

    
    this.resetForm();

    /*    let client_id = this.currentRoute.snapshot.paramMap.get('id');
    if (client_id == null)
      this.resetForm();
    else {
      this.service.getOrderByID(parseInt(client_id)).then(res => {
        this.service.formData = res.client;
        this.service.clientDetails = res.clientDetails;
      });
    }
*/

   
  }
  resetForm(form?:NgForm){
 
    if(form = null)
    this.resetForm(form);
    this.service.formData = {
    client_id:null,
    client_nom :'',
    client_adresse:'',
    client_siret:0,
    client_TVA:0,
    client_email:''
    };
    this.service.clientDetails= [];
  }

    
   AddOrEditClientFinal(clientDetailIndex,client_id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { clientDetailIndex,client_id };
    this.dialog.open(ClientDetailsComponent, dialogConfig);
   
  }

   /*onDeleteClient(clientDetail: number, i: number) {
    if (clientDetail != null)
      this.service.formData.DeletedClientDetailIDs += clientDetail + ",";
    this.service.clientDetails.splice(i, 1);
  }*/

    onSubmit(form: NgForm) {
    
        this.service.saveOrUpdateClient().subscribe(res => {
        this.resetForm();
        this.toastr.success('Submitted Successfully', 'CLIENT');
        this.router.navigate(['/factures']);
      })
    
  }



  }



