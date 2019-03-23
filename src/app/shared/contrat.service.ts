import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) { }
  getContratList() {
   return this.http.get(environment.apiURL+'/Contrat').toPromise();
  }
}
