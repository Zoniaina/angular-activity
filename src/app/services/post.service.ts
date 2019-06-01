import {Subject} from "rxjs";
import {Post} from "../model/post.model";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

export class PostService {
  posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor(){}

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  savePost(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot)=>{
        this.posts = data.val() ? data.val(): [];
        this.emitPosts();
      }
    );
  }

  createNewPost(newPost : Post){
      this.posts.push(newPost);
      this.savePost();
      this.emitPosts();
  }

  removePost(index: number){
    this.posts.splice(index, 1);
    this.savePost();
    this.emitPosts();
  }

  loveIt(index: number){
    this.posts[index].loveIts ++;
    this.savePost();
    this.emitPosts();

}
  dontLoveIt(index: number){
    this.posts[index].loveIts --;
    this.savePost();
    this.emitPosts();
  }

}
