import { Routes} from "@angular/router"

import{HomeComponent} from './home/home.component'
import { AboutComponent } from "./about/about.component"
import { RestaurantsComponent } from "./restaurants/restaurants.component"


//Utilização de Parametrização
//Aula 45 :Parametrizando as Rotas:
//Abaixo poderia passar um parametro 
//{path:'restaurants/:CODIGO',componet:RestaurantsComponet}
//recebendo o parametro
//no html do component:<a [routerLink]=['/restaurant',restaurant.CODIGO]>Bakery</a>
export const ROUTES: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'restaurants',component:RestaurantsComponent  }
]