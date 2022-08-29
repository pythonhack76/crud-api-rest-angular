import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private static serverUrl: string = `http://localhost:9000`; // json-sedver url

  constructor(private httpClient: HttpClient) { 


  }

  public getAllContacts():Observable<IContact[]> {
    let dataURL: string = `$(this.serverUrl)/contacts`;
    return this.httpClient.get<IContact[]>(dataURL).pipe();

  }


}


