import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(public http: HttpClient) { }

  get(){
    const url="https://localhost:5001/Personas";
    return this.http.get(url);
  }
  
}
