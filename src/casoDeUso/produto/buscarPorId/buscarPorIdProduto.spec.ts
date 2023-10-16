import {expect, jest, test} from 'bun:test'
import RepositorioCRUD from '../../RepositorioCRUD'
import Curso from '../../../entidade/curso/Curso'
import { Turno } from '../../../compartilhado/enum/Turno'
import Produto from '../../../entidade/produto/Produto'
import BuscarPorIdProduto from './BuscarPorIdProduto'

const mockRepositorioCRUD: RepositorioCRUD<Produto> = {
  salvar: jest.fn(),
  buscarTodos: jest.fn(),
  buscarPorId: jest.fn().mockResolvedValue(new Produto({
    id: 1,
    nome: 'Produto Teste',
    descricao: 'Descricao',
  })),
  excluir: jest.fn(),
};


test('Teste do método buscar id por produto', async () => {
    const idProduto = 1

    const casoDeUso = new BuscarPorIdProduto(mockRepositorioCRUD)

    const resultado = await casoDeUso.executar(idProduto)

    expect(resultado.id).toBe(idProduto)
    expect(resultado.nome).toBe('Produto Teste')
    expect(resultado.descricao).toBe('Descricao')

    expect(mockRepositorioCRUD.buscarPorId).toHaveBeenCalledTimes(1)
})