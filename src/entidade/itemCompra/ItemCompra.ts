import Produto from "../produto/Produto"

type atributos = {
    id?: number
    produto: Produto
    quantidade: number
    preco: number
}

export default class ItemCompra {
    private _id?: number 
    private _produto: Produto
    private _quantidade: number 
    private _preco: number 

    constructor(attr: atributos) {
        this._id = attr.id
        this._produto = attr.produto
        this._quantidade = this.validarQuantidade(attr.quantidade)
        this._preco = this.validarPreco(attr.preco)
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get produto(): Produto {
        return this._produto;
    }

    set produto(value: Produto) {
        this._produto = value;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    set quantidade(value: number) {
        this._quantidade = value;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(value: number) {
        this._preco = value;
    }

    validarQuantidade(quantidade: number): number {
        if(quantidade <= 0) {
            throw new Error("A quantidade deve ser maior que 0")
        }

        return quantidade
    }
    
    validarPreco(preco: number): number {
        if(preco <= 0) {
            throw new Error("O preço deve ser maior que 0")
        }

        return preco
    }
}