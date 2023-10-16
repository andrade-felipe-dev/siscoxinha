import CasoDeUso from "../../../compartilhado/CasoDeUso";
import Curso from "../../../entidade/curso/Curso";
import RepositorioCRUD from "../../RepositorioCRUD";

export default class SalvarCurso implements CasoDeUso<Curso, void>{
    private repo: RepositorioCRUD<Curso>
    
    constructor(repo: RepositorioCRUD<Curso>) {
        this.repo = repo
    }

    async executar(e: Curso): Promise<void> {
        await this.repo.salvar(e)
    }
}