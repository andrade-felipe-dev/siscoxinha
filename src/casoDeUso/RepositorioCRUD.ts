export default interface RepositorioCRUD<T> {
    salvar(e: T): Promise<void>
    buscarTodos(): Promise<T[]>
    buscarPorId(id: number): Promise<T>
    excluir(t: T): Promise<void>
}