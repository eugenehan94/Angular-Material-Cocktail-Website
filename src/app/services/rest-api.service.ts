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
  getBourbonTiles() {
    return this.http.get('http://localhost:3000/BourbonTiles');
  }
  // For "Brandy page"
  getBrandyCard() {
    return this.http.get('http://localhost:3000/BrandyCard');
  }
  getBrandyTile() {
    return this.http.get('http://localhost:3000/BrandyTiles');
  }
  // For "Gin" page
  getGinCard() {
    return this.http.get('http://localhost:3000/GinCard');
  }
  getGinTile() {
    return this.http.get('http://localhost:3000/GinTiles');
  }
  // For "Liqueur" page
  getLiqueurCard() {
    return this.http.get('http://localhost:3000/LiqueurCard');
  }
  getLiqueurTile() {
    return this.http.get('http://localhost:3000/LiqueurTiles');
  }
  // For "Rum" page
  getRumCard() {
    return this.http.get('http://localhost:3000/RumCard');
  }
  getRumTile() {
    return this.http.get('http://localhost:3000/RumTiles');
  }
  // For "Rye Whiskey" page
  getRyeWhiskeyCard() {
    return this.http.get('http://localhost:3000/RyeWhiskeyCard');
  }
  getRyeWhiskeyTile() {
    return this.http.get('http://localhost:3000/RyeWhiskeyTiles');
  }
  // For "Scotch" page
  getScotchCard() {
    return this.http.get('http://localhost:3000/ScotchCard');
  }
  getScotchTile() {
    return this.http.get('http://localhost:3000/ScotchTiles');
  }
}
