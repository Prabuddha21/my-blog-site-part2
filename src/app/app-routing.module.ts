import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogsComponent } from './blogs/blogs.component';


const routes: Routes = [{ path: 'create-blog/:id', component: CreateBlogComponent }, 
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'view-blog/:id', component: ViewBlogComponent }, 
  { path: '', component: BlogsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
