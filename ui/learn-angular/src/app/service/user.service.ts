import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://api.github.com/users"

  constructor(private http: HttpClient) { }

  getListUsers () {
    return this.http.get(`${this.apiUrl}?per_page=10`)
  }

  getUser(name: string) {
    return this.http.get(`${this.apiUrl}/${name}`)
  }
}
