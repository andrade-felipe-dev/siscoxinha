import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class BuscarPorIdCurso implements CasoDeUso<number, Curso> {
    private repo: RepositorioCRUD<Curso>

    constructor(repo: RepositorioCRUD<Curso>) {
        this.repo = repo
    }
    
    async executar(e: number): Promise<Curso> {
        return await this.repo.buscarPorId(e)
    }
}