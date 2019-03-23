import { Component, OnInit } from '@angular/core';
import { FinalClientService } from '../shared/final-client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-final-client',
  templateUrl: './final-client.component.html',
  styles: []
})
export class FinalClientComponent implements OnInit {

 
  constructor(private service:FinalClientService,
    private toastr:ToastrService, private router:Router) { }


  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
 
    if(form = null)
    this.resetForm(form);
    this.service.formData = {
      final_client_id:0,
      final_client_nom:'',
      final_client_adresse:'',
      final_client_contact:'',
      final_client_email:''
    };
  
  }
  onSubmit(form: NgForm){
   
    this.service.saveOrUpdateOrder().subscribe(res=> {
      this.resetForm();
      this.toastr.success('Bien Enregistrée', 'FINAL CLIENT');
      this.router.navigate(['/factures']);
    });
    }

}
