import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Produto from "../../../entidade/produto/Produto";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class BuscarPorIdProduto implements CasoDeUso<number, Produto> {
    private repo: RepositorioCRUD<Produto>

    constructor(repo: RepositorioCRUD<Produto>) {
        this.repo = repo
    }
    
    async executar(e: number): Promise<Produto> {
        return await this.repo.buscarPorId(e)
    }
}