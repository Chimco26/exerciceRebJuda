import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-comp',
  templateUrl: './post-list-comp.component.html',
  styleUrls: ['./post-list-comp.component.css']
})
export class PostListCompComponent implements OnInit {
  @Input() posts;

  constructor() { }

  ngOnInit(): void {
  }

}
