import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogId: number;

  blogForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    date: new FormControl(),
    imgUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  constructor(private activeRoter: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  //Scenario 4 - Answer
  public getBlog() : Blog {
    return this.blogService.blogs.find(blog => blog.id === this.blogId);
  }

  ngOnInit(): void {
    this.blogId = +this.activeRoter.snapshot.paramMap.get('id');
    if(this.blogId != null && this.blogId != undefined && this.blogId !== 0) {
      this.blogForm.setValue({
        id: this.getBlog().id,
        title: this.getBlog().title,
        date: this.getBlog().date,  
        imgUrl: this.getBlog().imgUrl,
        description: this.getBlog().description
      })
    }
    console.log(this.blogId + "here")
  }

  onFormSubmit() {
    if(this.blogId != null && this.blogId != undefined && this.blogId !== 0){
      this.blogService.blogs.forEach(element => {
        if(element.id == this.blogId){
          const index = this.blogService.blogs.indexOf(element);
          this.blogService.blogs[index] = this.blogForm.value;
        }
      });
      this.router.navigate(['']);
    } else {
      if (this.blogForm.valid) {
        this.blogForm.controls.id.setValue(this.getId() + 1);
        this.blogForm.controls.date.setValue(new Date());
        this.blogService.addBlog(this.blogForm.value)
        this.router.navigate([''])
      }else{
        console.log(this.blogForm.valid)
      }
    }
  }

  getId() {
    return Math.max.apply(Math, this.blogService.blogs.map(function (o) { return o.id; }))
  }

  get imageUrl() {
    return this.blogForm.value.imgUrl;
  }
}
