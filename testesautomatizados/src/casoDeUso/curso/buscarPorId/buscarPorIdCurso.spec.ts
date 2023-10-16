import {expect, jest, test} from 'bun:test'
import RepositorioCRUD from '../../RepositorioCRUD'
import Curso from '../../../entidade/curso/Curso'
import { Turno } from '../../../compartilhado/enum/Turno'
import BuscarPorIdCurso from './BuscarPorIdCurso'

const mockRepositorioCRUD: RepositorioCRUD<Curso> = {
  salvar: jest.fn(),
  buscarTodos: jest.fn(),
  buscarPorId: jest.fn().mockResolvedValue(new Curso({
    id: 1,
    nome: 'Curso de Teste',
    turno: Turno.DIURNO,
  })),
  excluir: jest.fn(),
};


test('Teste do método buscar id por curso', async () => {
    const idCurso = 1

    const casoDeUso = new BuscarPorIdCurso(mockRepositorioCRUD)

    const resultado = await casoDeUso.executar(idCurso)

    expect(resultado.id).toBe(idCurso)
    expect(resultado.nome).toBe('Curso de Teste')
    expect(resultado.turno).toBe(Turno.DIURNO)

    expect(mockRepositorioCRUD.buscarPorId).toHaveBeenCalledTimes(1)
})