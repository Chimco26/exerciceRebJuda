import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oppenBlogTest';

  posts = [{
    title: "Mon premier post",
    content: "Je suis un grand poster! Je suis un grand poster!Je suis un grand poster! Je suis un grand poster! Je suis un grand poster!",
    loveIts: 0,
    created_at: new Date(),
  },
  {
    title: "Mon second post",
    content: "Je suis un grand poster! Je suis un grand poster!Je suis un grand poster! Je suis un grand poster! Je suis un grand poster!",
    loveIts: 0,
    created_at: new Date(),
  },
  {
    title: "Mon dernier post",
    content: "Je suis un grand poster! Je suis un grand poster!Je suis un grand poster! Je suis un grand poster! Je suis un grand poster!",
    loveIts: 0,
    created_at: new Date(),
  }]
}
