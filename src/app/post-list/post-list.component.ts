import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Post} from "../model/post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
  posts : any[];
  postsSubscription : Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[])=>{
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  onDeletePost(post: Post){
      this.postService.removePost(post);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
}
