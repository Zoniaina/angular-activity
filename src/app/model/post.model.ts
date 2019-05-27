export class Post {
  loveIts: number;

  constructor(public title:string,public content: string, public createdAt: Date ){
      this.loveIts = 0;
  }

}
