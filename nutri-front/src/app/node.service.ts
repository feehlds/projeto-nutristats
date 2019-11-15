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
    return 'https://nutri-stats.herokuapp.com'
  }

  pesquisaAlimentos(str){
    return this.http.get( this.getUrl() + '/pesqAlimentos?barraPesq=' + str);
  }

}
