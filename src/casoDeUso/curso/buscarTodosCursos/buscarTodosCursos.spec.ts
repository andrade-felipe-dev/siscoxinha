import {expect, jest, test} from 'bun:test'
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";
import { Turno } from '../../../compartilhado/enum/Turno';
import BuscarTodosCursos from './BuscarTodosCursos';

const mockRepositorioCRUD: RepositorioCRUD<Curso> = {
    salvar: jest.fn(),
    buscarTodos: jest.fn().mockResolvedValue([
        new Curso({
            id: 1,
            nome: 'Curso de Teste',
            turno: Turno.DIURNO,
          }
    )]),
    buscarPorId: jest.fn(),
    excluir: jest.fn(),
  };

test('testar o cenário que busca todos de forma correta', async () => {
    const casoDeUso = new BuscarTodosCursos(mockRepositorioCRUD)

    const cursos: Curso[] = await casoDeUso.executar()

    expect(cursos).toBeArrayOfSize(1)
})
  