import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Blog } from 'src/app/model/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;
  rating = [1, 2, 3, 4, 5];
  constructor(public blogsService: BlogService, private router: Router) { }

  ngOnInit(): void { }

  //Scenario 2 Answer
  deleteBlog(blog: Blog) {
    
    const index = this.blogsService.blogs.indexOf(blog);
    if(index !== -1) {
      this.blogsService.blogs.splice(index, 1);
    }
    console.log(this.blogsService.blogs);
  }

  //Scenario 4 Answer
  editBlog(id: number){
    this.router.navigate(['create-blog',id]);
  }

  onClickStar(i: number) {
    if(this.blog.rating=== i){
      this.blog.rating=0;
    }else{
      this.blog.rating=i;
    }
    console.log(i)
  }
}
