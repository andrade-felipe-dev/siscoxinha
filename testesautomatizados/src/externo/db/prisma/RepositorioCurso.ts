import { PrismaClient } from "@prisma/client";
import RepositorioCRUD from "../../../casoDeUso/RepositorioCRUD";
import Curso from "../../../entidade/curso/Curso";
import { Turno } from "../../../compartilhado/enum/Turno";

export default class RepositorioCursoPrisma implements RepositorioCRUD<Curso> {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async salvar(e: Curso): Promise<void> {
        const dados = {
            id: e.id,
            nome: e.nome,
            turno: e.turno,
        }

        try {
            if(e.id) {
                await this.prisma.curso.update({
                    where: {id: e.id},
                    data: dados
                })
                return
            } 

            await this.prisma.curso.create({
                data: dados,
            })
        } catch (error) {
            throw error
        }
    }

    async buscarTodos(): Promise<Curso[]> {
        return this.prisma.curso.findMany().then((cursos) =>
            cursos.map(
                (curso) =>
                    new Curso({
                        id: curso.id,
                        nome: curso.nome,
                        turno: Curso.retornarTurno(curso.turno),
                    })
            )
        )
    }

    async buscarPorId(id: number): Promise<Curso> {
        try {
            const curso = await this.prisma.curso.findUniqueOrThrow({
                where: {
                    id: id
                }
            })

            return new Curso({
                id: curso.id,
                nome: curso.nome,
                turno: Curso.retornarTurno(curso.turno)
            })
        } catch(error) {
            throw new Error("Curso não encontrado")
        }
    }

     async excluir(t: Curso): Promise<void> {
        try {
            await this.prisma.curso.delete({
                where: {id: t.id}
            })
        } catch(error) {
            throw new Error("Erro ao excluir um curso")
        }
    }
}