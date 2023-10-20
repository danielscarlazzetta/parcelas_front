import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { ParcelaListarIntarface } from '../interface/listar.interface';

@Injectable({
  providedIn: 'root'
})
export class ParcelaServiceService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  listarParcelas(): Observable<ParcelaListarIntarface[]>{
    const url = `${this.baseUrl}/parcela`;
    return this.http.get<ParcelaListarIntarface[]>(url);
  }
}
