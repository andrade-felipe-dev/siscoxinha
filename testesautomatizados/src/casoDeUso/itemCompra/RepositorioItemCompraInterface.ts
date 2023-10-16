import Compra from "../../entidade/compra/Compra"
import ItemCompra from "../../entidade/itemCompra/ItemCompra"

export default interface RepositorioItemCompraInterface {
    salvar(compra: Compra, itemCompra: ItemCompra): Promise<void>
    excluir(t: ItemCompra): Promise<void>
}