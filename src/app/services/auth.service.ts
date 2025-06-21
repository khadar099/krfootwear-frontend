import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://13.127.72.112:8282/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${API_URL}/login`, credentials);
  }

  register(data: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${API_URL}/register`, data);
  }
}
