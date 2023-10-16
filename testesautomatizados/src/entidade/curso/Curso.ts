import { Turno } from "../../compartilhado/enum/Turno"

type atributos = {
    id?: number,
    nome: string,
    turno: Turno
}


export default class Curso {
    private _id?: number
    private _nome: string 
    private _turno: Turno 

    constructor(attr: atributos) {
        this._id = attr.id 
        this._nome = attr.nome
        this._turno = attr.turno
    }

    get id(): number|undefined {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get turno(): Turno {
        return this._turno;
    }

    set turno(turno: Turno) {
        this._turno = turno;
    }

    static retornarTurno(turnoString: string) {
        switch (turnoString) {
            case "MATUTINO":
                return Turno.MATUTINO;
            case "VESPERTINO":
                return Turno.VESPERTINO;
            case "NOTURNO":
                return Turno.NOTURNO;
            case "DIURNO":
                return Turno.DIURNO;
            case "INTEGRAL":
                return Turno.INTEGRAL;
            default:
                throw new Error("Turno não encontrado")
        }
    }
}
