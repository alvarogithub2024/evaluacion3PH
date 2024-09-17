import { Injectable } from '@angular/core';
import { ResultadosApiCategoriasViajes, ResultadosLugares } from './API/Viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesLugaresService {

 baseUrl: string = "https://api.opentripmap.com/0.1/en/places/autosuggest?name=museo&radius=23000&lon=-70.64355796087551&lat=-33.43524260023446&apikey=5ae2e3f221c38a28845f05b66201f131af8f7b37ddb213a2490cd050"
 
 constructor() { }

 async getCategorias() :Promise<ResultadosApiCategoriasViajes> {
  const url = `${this.baseUrl}list.php?c/=list`
  const respuesta = await fetch (url)
  const data: ResultadosApiCategoriasViajes = await respuesta.json ()
  return data
 }


async getLugares (categoria:string) :Promise<ResultadosLugares> {
  const url = `${this.baseUrl}list.php?c=${categoria}`
  const respuesta = await fetch(url)
  const data :ResultadosLugares = await respuesta.json ()
  return data
 }
}