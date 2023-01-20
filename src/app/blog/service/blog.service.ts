import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  serverUrl = 'http://localhost:3000'
  constructor (private http:HttpClient){

  }

  getBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`)
  }
  deleteBlog(id:number){
    return this.http.delete(`${this.serverUrl}/blogs/${id}`)
  }
  createBlog(blog: Blog) {
    return this.http.post(`${this.serverUrl}/blogs`, blog)
  }
  updateBlog(id:number, blog: Blog) {
    return this.http.put(`${this.serverUrl}/blogs/${id}`, blog)
  }
}
