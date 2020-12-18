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
