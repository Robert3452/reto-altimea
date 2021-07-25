

export default interface IRepository<T> {
    store(json: object): Promise<T>;
    update(json: object, id: string): Promise<T | null>;
    delete(id: string): Promise<T | Object | null>;
    getAll(): Promise<T[]>;
    findOneById(id: string): Promise<T | null>;

}