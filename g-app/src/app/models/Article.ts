export class Article {
    public ArticleId: number;
    public ISSN : String;
    public Price: number;
    public Title: String;
    public PublisherID: number; 
    public PlublishDate: Date;
    public ImageUrl: String;
    public Abstract: String;
    public FileUrl: String;
    public Status: String;

    public updateArticle(src: Article): void{
        this.ArticleId = src.ArticleId;
        this.ISSN = src.ISSN;
        this.Price = src.Price;
        this.Title = src.Title;
        this.PublisherID = src.PublisherID;
        this.FileUrl = src.FileUrl;
    }
}
