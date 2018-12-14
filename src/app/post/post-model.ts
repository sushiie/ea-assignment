export class PostModel {
    title: string;
    url: string;
    created_at: string;
    author: string;

    constructor(title, url, created_at, author) {
        this.title = title;
        this.url = url;
        this.created_at = created_at;
        this.author = author;
    }
}
