export class Article {
    id: number;
    name: string;
    image: string;
    status: string;
    description: string;
    constructor(id: number, name: string, image: string, status: string, description: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.status = status;
        this.description = description;
    }
}
