import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  posts: Object;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getPosts().subscribe(
      data => this.posts = data
    )
  }

}
