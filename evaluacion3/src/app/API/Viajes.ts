export interface ViajesCategoria {
        feature : string
    }

export interface ResultadosApiCategoriasViajes { 
    Viajes : ViajesCategoria []
}

export interface ViajesLugares{
       Name : String
       image : string
       id : string
    }

export interface ResultadosLugares {
    Lugares : ViajesLugares []
}