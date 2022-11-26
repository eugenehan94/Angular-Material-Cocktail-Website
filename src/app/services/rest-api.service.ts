import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}
  // For "home-first-component"
  getFirstComponentCardOne() {
    return this.http.get('http://localhost:3000/FirstComponentCardOne');
  }
  // For "home-first-component"
  getFirstComponentCardTwo() {
    return this.http.get('http://localhost:3000/FirstComponentCardTwo');
  }
  // For "home-first-component"
  getFirstComponentCardThree() {
    return this.http.get('http://localhost:3000/FirstComponentCardThree');
  }
  // For "home-third-component"
  getThirdComponentCard() {
    return this.http.get('http://localhost:3000/ThirdComponentCard');
  }
  // For "Bourbon page"
  getBourbonCard() {
    return this.http.get('http://localhost:3000/BourbonCard');
  }
}
