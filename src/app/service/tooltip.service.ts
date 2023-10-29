import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor(private http: HttpClient) { }

  getData(url: string){
    return this.http.get<any>(url);
  }
}
