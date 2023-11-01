interface genericItem {
    register?: string | number;
    fullName: string;
}

export interface IService<T> {
    Items: T[];
    getItems: () => Promise<T[]>;
}

export class GenericService<T> implements IService<T> {
    public Items: T[];
    protected Url: string;
    
    async getItems(): Promise<T[]> {
        const response: Response = await fetch(this.Url);
        const list: T[] = await response.json();
        return list;
    };
}

export class UserService<T extends genericItem> extends GenericService<T> {
    Url: string = 'http://localhost:5011/users';

    getItemsById(id: number): T | undefined {
        return this.Items ? this.Items.find((item) => item.register = id) : undefined;
    };

    getItemsByName(name: string): T | undefined {
        return this.Items ? this.Items.find((item) => item.fullName = name) : undefined;
    };
} 