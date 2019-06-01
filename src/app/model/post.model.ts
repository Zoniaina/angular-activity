export class Post {
  loveIts: number;

  constructor(public title:string,public content: string, public created_at : string ){
      this.loveIts = 0;
  }

}
