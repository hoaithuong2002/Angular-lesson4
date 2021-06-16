import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like: any;

  constructor() { }

  ngOnInit(): void {
  }
  likeThis() {
    this.like++;
  }
}
