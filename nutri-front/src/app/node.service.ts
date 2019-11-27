import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return 'https://nutri-stats.herokuapp.com';
  }

  pesquisaAlimentos(str) {
    return this.http.get('/pesqAlimentos?barraPesq=' + str);
  }

  updateUsuario(user){
    return this.http.post('/usuario/atualizar', user, httpOptions)
  }

  login(user) {
    return this.http.post('/usuario/login', user, httpOptions);
  }

  cadastro(user) {
    return this.http.post('/usuario/registro', user);
  }

  logout() : Observable<HttpResponse<Config>> {
    return this.http.get<Config>('/usuario/logout', {observe: 'response'})
  }

}
