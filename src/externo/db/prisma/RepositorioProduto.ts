import { PrismaClient } from "@prisma/client";
import RepositorioCRUD from "../../../casoDeUso/RepositorioCRUD";
import Produto from "../../../entidade/produto/Produto";

export default class RepositorioProduto implements RepositorioCRUD<Produto> {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async salvar(e: Produto): Promise<void> {
        const dados = {
            id: e.id,
            nome: e.nome,
            descricao: e.descricao,
        }

        try {
            if(e.id) {
                await this.prisma.produto.update({
                    where: {id: e.id},
                    data: dados
                })
                return
            } 

            await this.prisma.produto.create({
                data: dados,
            })

        } catch (error) {
            throw error
        }
    }

    async buscarTodos(): Promise<Produto[]> {
        return this.prisma.produto.findMany().then((produtos) =>
            produtos.map(
                (produto) =>
                    new Produto({
                        id: produto.id,
                        nome: produto.nome,
                        descricao: produto.descricao,
                    })
            )
        )
    }

    async buscarPorId(id: number): Promise<Produto> {
        try {
            const produto = await this.prisma.produto.findUniqueOrThrow({
                where: {
                    id: id
                }
            })

            return new Produto({
                id: produto.id,
                nome: produto.nome,
                descricao: produto.descricao
            })
        } catch(error) {
            throw new Error("Produto não encontrado")
        }
    }

     async excluir(t: Produto): Promise<void> {
        try {
            await this.prisma.produto.delete({
                where: {id: t.id}
            })
        } catch(error) {
            throw new Error("Erro ao excluir um produto")
        }
    }
}