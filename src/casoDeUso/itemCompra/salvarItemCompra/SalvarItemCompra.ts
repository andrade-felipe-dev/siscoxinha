import CasoDeUso from "../../../compartilhado/CasoDeUso";
import ItemCompra from "../../../entidade/itemCompra/ItemCompra";
import RepositorioCD from "../../RepositorioCD";

export default class SalvarItemCompra implements CasoDeUso<ItemCompra, void>{
    private repo: RepositorioCD<ItemCompra>
    
    constructor(repo: RepositorioCD<ItemCompra>) {
        this.repo = repo
    }

    async executar(e: ItemCompra): Promise<void> {
        await this.repo.salvar(e)
    }
}