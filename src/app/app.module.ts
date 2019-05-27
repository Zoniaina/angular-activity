import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostService} from "./services/post.service";
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes= [
  {path: 'posts', component: PostListComponent},
  {path: 'post/new', component: NewPostComponent},
  {path: '',redirectTo: 'posts', pathMatch: 'full'},
  {path: '**',redirectTo: 'posts'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
