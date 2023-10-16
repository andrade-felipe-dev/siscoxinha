import { EstadoCompra } from "../../compartilhado/enum/EstadoCompra"
import ItemCompra from "../itemCompra/ItemCompra"

type atributos = {
    id?: number
    data: Date
    estadoCompra: EstadoCompra
    listaItemCompra: ItemCompra[]
}

export default class Compra {
    private _id?: number 
    private _data: Date
    private _estadoCompra: EstadoCompra
    private _listaItemCompra: ItemCompra[]

    constructor(attr: atributos) {
        this._id = attr.id
        this._data = attr.data
        this._estadoCompra = attr.estadoCompra
        this._listaItemCompra = attr.listaItemCompra
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number | undefined) {
        this._id = id;
    }

    get data(): Date {
        return this._data;
    }

    set data(data: Date) {
        this._data = data;
    }

    get estadoCompra(): EstadoCompra {
        return this._estadoCompra;
    }

    set estadoCompra(estado: EstadoCompra) {
        this._estadoCompra = estado;
    }

    get listaItemCompra(): ItemCompra[] {
        return this._listaItemCompra;
    }

    set listaItemCompra(lista: ItemCompra[]) {
        this._listaItemCompra = lista;
    }

    static retornarEstadoCompra(turnoString: string) {
        switch (turnoString) {
            case "PGTO_EM_ABERTO":
                return EstadoCompra.PGTO_EM_ABERTO;
            case "PGTO_CONFIRMADO":
                return EstadoCompra.PGTO_CONFIRMADO;
            default:
                throw new Error("Estado de pagamento não encontrado")
        }
    }
}