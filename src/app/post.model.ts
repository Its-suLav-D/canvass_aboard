export class Post {
  constructor(
    public id: string,
    public username?: string,
    public title?: string,
    public subtitle?: string,
    public postUrl?: string,
    public avatar?: string,
    public timestamp?: number,
    public comments?: Post[],
    public like?: number,
    public votes?: number
  ) {}
}
