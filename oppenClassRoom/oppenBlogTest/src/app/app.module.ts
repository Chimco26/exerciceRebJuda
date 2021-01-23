import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListCompComponent } from './comp/post-list-comp/post-list-comp.component';
import { PostItemCompComponent } from './comp/post-item-comp/post-item-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListCompComponent,
    PostItemCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
