import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  getUserInfo(uuid: string): any {
    return this.http.get(
        'localhost:8080/api/user/' + uuid
    );
  }
}
