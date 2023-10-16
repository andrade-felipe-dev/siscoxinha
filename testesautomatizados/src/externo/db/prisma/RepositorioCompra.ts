import { PrismaClient } from "@prisma/client";
import RepositorioCRUD from "../../../casoDeUso/RepositorioCRUD";
import Compra from "../../../entidade/compra/Compra";
import ItemCompra from "../../../entidade/itemCompra/ItemCompra";
import Produto from "../../../entidade/produto/Produto";
import RepositorioItemCompra from "./RepositorioItemCompra";

export default class RepositorioCompra implements RepositorioCRUD<Compra> {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async salvar(e: Compra): Promise<void> {
        const dados = {
            id: e.id,
            data: e.data,
            estado_compra: e.estadoCompra
        }

        try {
            if(e.id) {
                await this.prisma.compra.update({
                    where: {id: e.id},
                    data: dados
                })

                return
            } 

            const salvo = await this.prisma.compra.create({
                data: dados,
            })

            e.id = salvo.id
        } catch (error) {
            throw error
        }
    }
    
    async buscarTodos(): Promise<Compra[]> {
        try {
            const compras = await this.prisma.compra.findMany({
                include: {
                item_compra: {
                    include: {
                    produto: true
                    }
                }
            }
        });

        const listaCompras = compras.map((compra) => {
            const listaItemCompra = compra.item_compra.map((item) => {
            return new ItemCompra({
                id: item.id,
                preco: item.preco,
                quantidade: item.quantidade,
                produto: new Produto({
                    id: item.produto.id,
                    descricao: item.produto.descricao,
                    nome: item.produto.nome
                    })
                })
            });
    
            return new Compra({
                id: compra.id,
                data: compra.data,
                estadoCompra: Compra.retornarEstadoCompra(compra.estado_compra),
                listaItemCompra: listaItemCompra
            })
        });

        return listaCompras;
        } catch (error) {
            throw error;
        }
    }
    async buscarPorId(id: number): Promise<Compra> {
        try {
            const compra = await this.prisma.compra.findUniqueOrThrow({
                where: {
                    id: id
                },

                include: {
                    item_compra: {
                        include: {
                            produto: true
                        }
                    }
                },
            })

            const listaItemCompra = compra.item_compra.map((item) => {
                return new ItemCompra({
                    id: item.id,
                    preco: item.preco,
                    quantidade: item.quantidade,
                    produto: new Produto({
                        id: item.produto.id,
                        descricao: item.produto.descricao,
                        nome: item.produto.nome
                    })
                })
            })

            return new Compra({
                id: compra.id,
                data: compra.data,
                estadoCompra: Compra.retornarEstadoCompra(compra.estado_compra),
                listaItemCompra: listaItemCompra
            })
        } catch(error) {
            throw new Error("Produto não encontrado")
        }
    }

    async excluir(t: Compra): Promise<void> {
        try {
            await this.prisma.compra.delete({
                where: {
                  id: t.id
                }
            });
        } catch (error) {
            throw error
        }
    }
}