import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable, throwError } from 'rxjs';
import {retry, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="https://localhost:5001/Persona";
  
  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error ocurred', error.error.message);
    }else{
      console.error(
        `Backend returned code ${error.status}`+
        `Body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  get():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }

  post(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, JSON.stringify(persona), this.httpOptions)
    .pipe(
      tap(_ => console.log("Datos enviados")),
      catchError(this.handleError)
    );
  }

  delete(id:string){
    return this.http.delete<string>(this.url + '/'+ id, this.httpOptions)
    .pipe(
      tap(_ => console.log("Persona eliminada")),
      catchError(this.handleError)
    );
  }
  
}
