import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Compra from "../../../entidade/compra/Compra";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class BuscarTodasCompras implements CasoDeUso<void, Compra[]> {
    private repo: RepositorioCRUD<Compra>

    constructor(repo: RepositorioCRUD<Compra>) {
        this.repo = repo
    }

    async executar(e: void): Promise<Compra[]> {
        return await this.repo.buscarTodos()        
    }
}