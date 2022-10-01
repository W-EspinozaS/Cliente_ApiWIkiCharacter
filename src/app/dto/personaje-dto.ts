export interface PersonajeDTO {
    // _id:         string;
    nombre:      string;
    alias:       string;
    descripcion: string;
    foto:        string;
    lanzamiento: string;
    status:      string;
    apariciones: Apariciones[];
    // __v:         number;
}

export interface Apariciones{
    idAparicion: number;
    pelicula:    string;
    estreno:     string;
    sinopsis:    string;
}
