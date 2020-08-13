import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  
  id: number;
  constructor(private activeRoter: ActivatedRoute, private blogService: BlogService) { }
  
  //Scenario 3 - Answer
  public getBlog() : Blog {
    return this.blogService?.blogs?.find(blog => blog.id === this.id);
  }

  ngOnInit(): void {
    this.id = +this.activeRoter?.snapshot?.paramMap?.get('id');
    console.log(this.id);
  }
  
}
