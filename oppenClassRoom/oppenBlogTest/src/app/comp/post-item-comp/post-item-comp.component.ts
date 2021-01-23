import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item-comp',
  templateUrl: './post-item-comp.component.html',
  styleUrls: ['./post-item-comp.component.css']
})
export class PostItemCompComponent implements OnInit {
  @Input() post;

  constructor() { }

  ngOnInit(): void {
  }

  moreLove(): void {
    this.post.loveIts += 1;
  }

  lessLove(): void {
    this.post.loveIts -= 1;
  }

}
