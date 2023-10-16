export default interface CasoDeUso<E,S> {
    executar(e: E): Promise<S>
}