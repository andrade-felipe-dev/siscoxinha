import { expect, jest, test } from "bun:test";
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";
import { Turno } from "../../../compartilhado/enum/Turno";
import SalvarCurso from "./SalvarCurso";

const mockRepositorioCRUD: RepositorioCRUD<Curso> = {
    salvar: jest.fn(),
    buscarTodos: jest.fn(),
    buscarPorId: jest.fn(),
    excluir: jest.fn(),
};

test('Passar um curso valido e ir até o fim o método', async () => {
    const curso: Curso = new Curso({
        id: 1,
        nome: 'Curso de Teste',
        turno: Turno.DIURNO,
    })

    await new SalvarCurso(mockRepositorioCRUD).executar(curso)

    expect(mockRepositorioCRUD.buscarTodos).not.toHaveBeenCalledTimes(1)
    expect(mockRepositorioCRUD.salvar).toHaveBeenCalledTimes(1)
})