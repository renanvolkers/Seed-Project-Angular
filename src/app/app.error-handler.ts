import {Response} from '@angular/http'//http vem do modulo do angular
import { Observable } from 'rxjs/Observable';

export class ErroHandler{
static handlerError(error: Response|any){
    let errorMessage : string
    if(error instanceof Response)
    {
        errorMessage = `Erro${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    }else{
        errorMessage = error.toString()
    }

    console.log(errorMessage)
    return Observable.throw(errorMessage)
}

}
