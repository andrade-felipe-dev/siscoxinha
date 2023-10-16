import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class BuscarTodosCursos implements CasoDeUso<void, Curso[]> {
    private repo: RepositorioCRUD<Curso>

    constructor(repo: RepositorioCRUD<Curso>) {
        this.repo = repo
    }

    async executar(e: void): Promise<Curso[]> {
        return await this.repo.buscarTodos()        
    }
}