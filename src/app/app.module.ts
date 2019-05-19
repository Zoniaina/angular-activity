import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {FormsModule} from "@angular/forms";
import {PostService} from "./services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
