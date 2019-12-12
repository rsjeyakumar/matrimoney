import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  /* POST API logic is done by using createData method and it takes  */
  createData(endPoints, body) {
    const url = environment.apiUrl + endPoints;
    return this.http.post(url, body);
  }

  /* GET API logic is done by using createData method and it takes  */
  readData(endPoints) {
    const url = `${this.apiUrl}${endPoints}`;
    return this.http.get(url);
  }


  /* UPDATE API logic is done by using createData method and it takes  */
  updateData() {

  }

  /* Delete API logic is done by using createData method and it takes  */
  delteData() { }



}
