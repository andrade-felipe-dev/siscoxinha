import { expect, jest, test } from "bun:test";
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";
import { Turno } from "../../../compartilhado/enum/Turno";
import Produto from "../../../entidade/produto/Produto";
import SalvarProduto from "./SalvarProduto";

const mockRepositorioCRUD: RepositorioCRUD<Produto> = {
    salvar: jest.fn(),
    buscarTodos: jest.fn(),
    buscarPorId: jest.fn(),
    excluir: jest.fn(),
};

test('Passar um curso valido e ir até o fim o método', async () => {
    const curso: Produto = new Produto({
        id: 1,
        nome: 'nome',
        descricao: 'descricao',
    })

    await new SalvarProduto(mockRepositorioCRUD).executar(curso)

    expect(mockRepositorioCRUD.buscarTodos).not.toHaveBeenCalledTimes(1)
    expect(mockRepositorioCRUD.salvar).toHaveBeenCalledTimes(1)
})