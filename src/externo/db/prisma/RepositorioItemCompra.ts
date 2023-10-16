import { PrismaClient } from "@prisma/client";
import ItemCompra from "../../../entidade/itemCompra/ItemCompra";
import RepositorioItemCompraInterface from "../../../casoDeUso/itemCompra/RepositorioItemCompraInterface";
import Compra from "../../../entidade/compra/Compra";

export default class RepositorioItemCompra implements RepositorioItemCompraInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async salvar(compra: Compra, itemCompra: ItemCompra): Promise<void> {
        console.log(itemCompra)
        const dados = {
            id: itemCompra?.id,
            quantidade: itemCompra.quantidade,
            preco: itemCompra.preco,
            produto_id: itemCompra.produto.id,
            compra_id: compra.id
        }

        try {
            if(itemCompra?.id) {
                await this.prisma.item_compra.update({
                    where: {id: itemCompra.id},
                    data: dados
                })
                return
            } 

            await this.prisma.item_compra.create({
                data: dados,
            })
        } catch (error) {
            throw error
        }
    }

    async excluir(t: ItemCompra): Promise<void> {
        try {
            await this.prisma.item_compra.delete({
                where: {id: t.id}
            })
        } catch(error) {
            throw new Error("Erro ao excluir um item_compra")
        }
    }
}