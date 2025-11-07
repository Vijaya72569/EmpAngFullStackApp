import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Employees {
  eid?: number;
  ename: string;
 
  esal: number;
}
@Injectable({
  providedIn: 'root',
})
export class Empservice {
  private api="https://localhost:44343/api/Employee";
  constructor(private http:HttpClient){

  }
  getAll(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.api);
  }
  getById(id: number): Observable<Employees> {
    return this.http.get<Employees>(`${this.api}/${id}`);
  }
  add(emp: Employees): Observable<Employees> {
    return this.http.post<Employees>(this.api, emp);
  }
  update(emp: Employees): Observable<void> {
    return this.http.put<void>(`${this.api}/${emp.eid}`, emp);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
  
}
