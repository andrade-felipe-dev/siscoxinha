import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Produto from "../../../entidade/produto/Produto";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class BuscarTodosProdutos implements CasoDeUso<void, Produto[]> {
    private repo: RepositorioCRUD<Produto>

    constructor(repo: RepositorioCRUD<Produto>) {
        this.repo = repo
    }

    async executar(e: void): Promise<Produto[]> {
        return await this.repo.buscarTodos()        
    }
}