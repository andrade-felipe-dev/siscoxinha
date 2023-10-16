import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Produto from "../../../entidade/produto/Produto";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class ExcluirProduto implements CasoDeUso<Produto, void> {
    private repo: RepositorioCRUD<Produto>

    constructor(repo: RepositorioCRUD<Produto>) {
        this.repo = repo
    }

    async executar(e: Produto): Promise<void> {
        await this.repo.excluir(e)
    }
}