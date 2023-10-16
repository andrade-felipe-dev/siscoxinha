type atributos = {
    id?: number,
    nome: string,
    descricao: string
}

export default class Produto {
    private _id?: number;
    private _nome: string;
    private _descricao: string;

    constructor(attr: atributos) {
        this._id = attr.id;
        this._nome = attr.nome;
        this._descricao = attr.descricao;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(novoId: number | undefined) {
        this._id = novoId;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(novaDescricao: string) {
        this._descricao = novaDescricao;
    }
}