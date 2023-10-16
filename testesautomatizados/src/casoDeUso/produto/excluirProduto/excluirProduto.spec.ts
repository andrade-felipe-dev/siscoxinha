import { expect, jest, test } from "bun:test";
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";
import { Turno } from "../../../compartilhado/enum/Turno";
import ExcluirProduto from "./ExcluirProduto";
import Produto from "../../../entidade/produto/Produto";

const mockRepositorioCRUD: RepositorioCRUD<Produto> = {
    salvar: jest.fn(),
    buscarTodos: jest.fn(),
    buscarPorId: jest.fn(),
    excluir: jest.fn(),
};

test('Passar um curso valido e ir até o fim o método', async () => {
    const produto: Produto = new Produto({
        id: 1,
        nome: 'nome',
        descricao: 'descricao',
    })

    await new ExcluirProduto(mockRepositorioCRUD).executar(produto)

    expect(mockRepositorioCRUD.buscarTodos).not.toHaveBeenCalledTimes(1)
    expect(mockRepositorioCRUD.excluir).toHaveBeenCalledTimes(1)
})