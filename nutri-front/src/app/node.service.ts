import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class NodeService {
  httpHeaders = new HttpHeaders

  constructor(private http: HttpClient) { }

  getOptions() {
		return {
			'Content-Type': 'application/json'
		};
  }
  
  getUrl(){
    return 'https://nutri-stats.herokuapp.com';
  }

  pesquisaAlimentos(str){
    return this.http.get('/pesqAlimentos?barraPesq=' + str);
  }

  login(user){
    return this.http.post('/usuario/login', user);
  }

  cadastro(user){
    return this.http.post('/usuario/registro', user);
  }

  logout(){
    return this.http.get('/usuario/logout');
  }

}
