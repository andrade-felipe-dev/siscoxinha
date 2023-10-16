import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Compra from "../../../entidade/compra/Compra";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class ExcluirCompra implements CasoDeUso<Compra, void> {
    private repo: RepositorioCRUD<Compra>

    constructor(repo: RepositorioCRUD<Compra>) {
        this.repo = repo
    }

    async executar(e: Compra): Promise<void> {
        await this.repo.excluir(e)
    }
}