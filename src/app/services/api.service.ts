import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = environment.apiEndpoint;

  // most viewd/recentely added | suggestions | search results | details
  user_signIn = `${this.apiUrl}/auth/authentication`;
  logout=`${this.apiUrl}/auth/updatelogouttime`;
  insertuserpoints=`${this.apiUrl}/count/insertuserpoints`;
  inseruservisitpages=`${this.apiUrl}/count/insertuservisitpages`;
  getuserleaderpoints=`${this.apiUrl}/count/getuserleaderpoints`;
  googleFormsSubmit=`https://script.google.com/macros/s/AKfycbx9Lmmjm6X_O2_W7fA5xD1Q7qgAMkZG0GaHLwqRKw/exec`;
  constructor(private http: HttpClient) { }

  post(url: string, data: any): Observable<any> {
  //  let token = localStorage.getItem('token');
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': token
  //     })
  //   };
    return this.http.post(url, data);
  }

  get(url: string): Observable<any> {

    return this.http.get(url);
    
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }

}
