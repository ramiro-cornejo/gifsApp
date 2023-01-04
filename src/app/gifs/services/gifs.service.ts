import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'gEdT11raBYTzdoiPESPlbYiSjJ6t9QU7';
  private _historial: string[] = [];

  
  public resultados: Gif[] = [];
    
  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs( query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,15);

      localStorage.setItem('historial',JSON.stringify( this._historial ));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=gEdT11raBYTzdoiPESPlbYiSjJ6t9QU7&q=${query}&limit=15`)
      .subscribe( (resp) => {
        console.log(resp.data );
        this.resultados = resp.data;
      });
  }

}

