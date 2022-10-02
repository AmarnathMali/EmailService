import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url:string ="http://localhost:9999";
  constructor(private http:HttpClient) { }

  sendEmail(data:any){
    return this.http.post(`${this.url}/sendemail`,data);
  }
}
