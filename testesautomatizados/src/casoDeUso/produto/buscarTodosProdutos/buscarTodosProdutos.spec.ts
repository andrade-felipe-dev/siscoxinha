import {expect, jest, test} from 'bun:test'
import RepositorioCRUD from "../../RepositorioCRUD";
import Produto from '../../../entidade/produto/Produto';
import BuscarTodosProdutos from './BuscarTodosProdutos';

const mockRepositorioCRUD: RepositorioCRUD<Produto> = {
    salvar: jest.fn(),
    buscarTodos: jest.fn().mockResolvedValue([
        new Produto({
            id: 1,
            nome: 'Produto de Teste',
            descricao: 'descricao',
          }
    )]),
    buscarPorId: jest.fn(),
    excluir: jest.fn(),
};

test('testar o cenário que busca todos de forma correta', async () => {
    const casoDeUso = new BuscarTodosProdutos(mockRepositorioCRUD)

    const produtos: Produto[] = await casoDeUso.executar()

    expect(produtos).toBeArrayOfSize(1)

    expect(mockRepositorioCRUD.buscarTodos).toHaveBeenCalledTimes(1)
})
  