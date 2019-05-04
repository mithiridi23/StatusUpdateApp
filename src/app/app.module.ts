import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCommentComponent } from './create-comment/create-comment.component';

import { UpdatePostComponent } from './update-post/update-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentmodalComponent } from './commentmodal/commentmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCommentComponent,
    UpdatePostComponent,
    CommentmodalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
