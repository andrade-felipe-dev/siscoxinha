import {expect, test} from 'bun:test'
import Curso from './Curso'
import { Turno } from '../../compartilhado/enum/Turno'

test("Passar uma string valida e retornar um enum do tipo Turno", () => {
    expect(Curso.retornarTurno('MATUTINO')).toBe(Turno.MATUTINO)
    expect(Curso.retornarTurno('VESPERTINO')).toBe(Turno.VESPERTINO)
    expect(Curso.retornarTurno('NOTURNO')).toBe(Turno.NOTURNO)
    expect(Curso.retornarTurno('DIURNO')).toBe(Turno.DIURNO)
    expect(Curso.retornarTurno('INTEGRAL')).toBe(Turno.INTEGRAL)
})

test("Passar uma string invalida e retornar um erro", () => {
    expect(() => Curso.retornarTurno("valor invalido")).toThrow('Turno não encontrado')
})