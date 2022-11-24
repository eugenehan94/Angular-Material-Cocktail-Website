import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  getFirstComponentCardOne() {
    return this.http.get('http://localhost:3000/FirstComponentCardOne');
  }
  getFirstComponentCardTwo() {
    return this.http.get('http://localhost:3000/FirstComponentCardTwo');
  }
  getFirstComponentCardThree() {
    return this.http.get('http://localhost:3000/FirstComponentCardThree');
  }
  getThirdComponentCard() {
    return this.http.get('http://localhost:3000/ThirdComponentCard');
  }
}
