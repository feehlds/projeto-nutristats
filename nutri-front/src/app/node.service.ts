import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  login(user) {
    return this.http.post('/usuario/login', user, httpOptions);
  }

  cadastro(user) {
    return this.http.post('/usuario/registro', user);
  }

  logout() {
    return this.http.get('/usuario/logout');
  }

}
