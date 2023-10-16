import SalvarCompra from "./casoDeUso/compra/salvarCompra/SalvarCompra"
import SalvarItemCompra from "./casoDeUso/itemCompra/salvarItemCompra/SalvarItemCompra"
import SalvarProduto from "./casoDeUso/produto/salvarProduto/SalvarProduto"
import { EstadoCompra } from "./compartilhado/enum/EstadoCompra"
import Compra from "./entidade/compra/Compra"
import ItemCompra from "./entidade/itemCompra/ItemCompra"
import Produto from "./entidade/produto/Produto"
import RepositorioCompra from "./externo/db/prisma/RepositorioCompra"
import RepositorioItemCompra from "./externo/db/prisma/RepositorioItemCompra"
import RepositorioProduto from "./externo/db/prisma/RepositorioProduto"

const produto = new Produto({
    id: 1,
    nome: 'coxinha',
    descricao: 'coxinha com frango'
})

const itemCompra = new ItemCompra({
    quantidade: 1,
    preco: 1,
    produto: produto
})

const compra = new Compra({
    data: new Date(),
    estadoCompra: EstadoCompra.PGTO_EM_ABERTO,
    listaItemCompra: [itemCompra]
})

const repoCompra = new RepositorioCompra()
const repoItemCompra = new RepositorioItemCompra()

await new SalvarCompra(repoCompra, repoItemCompra).executar(compra)




const repo = new RepositorioItemCompra()

await new SalvarItemCompra(repo).executar(itemCompra)


