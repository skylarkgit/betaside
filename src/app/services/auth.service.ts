import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get<any>('http://localhost:3000/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
      }
    });
  }
}
