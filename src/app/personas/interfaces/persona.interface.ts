export interface DB {
    personas: Persona[];
}

export interface Persona {
    id:               string;
    nombre:           string;
    fecha_nacimiento: string;
    sexo:             string;
}

