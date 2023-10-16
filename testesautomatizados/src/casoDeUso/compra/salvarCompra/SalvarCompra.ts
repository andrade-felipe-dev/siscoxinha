import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Compra from "../../../entidade/compra/Compra";
import RepositorioCRUD from "../../RepositorioCRUD";
import RepositorioItemCompraInterface from "../../itemCompra/RepositorioItemCompraInterface";

export default class SalvarCompra implements CasoDeUso<Compra, void>{
    private repoCompra: RepositorioCRUD<Compra>
    private repoItemCompra: RepositorioItemCompraInterface
    
    
    constructor(repoCompra: RepositorioCRUD<Compra>, repoItemCompra: RepositorioItemCompraInterface) {
        this.repoCompra = repoCompra
        this.repoItemCompra = repoItemCompra
    }

    async executar(e: Compra): Promise<void> {
        await this.repoCompra.salvar(e)
    
        e.listaItemCompra.forEach(async (itemCompra) => {
            await this.repoItemCompra.salvar(e, itemCompra)
        })
    }
}