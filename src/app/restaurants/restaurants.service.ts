import {Injectable}from "@angular/core"
import {Http} from "@angular/http"

import {Restaurant} from "./restaurant/restaurant.mode"
import {MEAT_API} from "../app.api"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErroHandler} from '../app.error-handler'

//Como vamos receber um serviço http temos que marcar a classe
@Injectable()
export class RestaurantsService {
//Atividade Relacionada com a Aula 43:Adicionando Http ao Restaurantes

constructor(private http: Http){

}
restaurants(): Observable<Restaurant[]>{

    //'${MEAT_API}= TemplateString usado para concatenar
    return this.http.get(`${MEAT_API}/restaurants`)//O response aqui vem o success,erro,fail, json precisamos apenas do json
    //Operador map(import 'rxjs/add/operator/map') que uma função que transforma um objeto response em arry de json em restaurante
    .map(response=>response.json());
    //.catch(ErroHandler.handlerError)
    
}

}