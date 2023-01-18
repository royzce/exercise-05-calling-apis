import { AfterViewInit, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements AfterViewInit{
  blogForm: FormGroup;
  commentsArray : FormArray;
  constructor(private formBuilder: FormBuilder, 
              private blogService: BlogService,
              private route: ActivatedRoute){
    this.blogForm = this.formBuilder.group({
      title:[''],
      description:[''],
      author:[''],
      comments:this.formBuilder.array([])
    })
    this.commentsArray = this.blogForm.get('comments') as FormArray;
  }
  id : number | undefined
  ngAfterViewInit(): void {
    this.id = +this.route.snapshot.queryParams['id']
    this.populateFormById()
  }
  populateFormById(){
    if(this.id === undefined || Number.isNaN(this.id)){
      return
    }
    this.patchForm()
  }
  patchForm(){
    this.blogForm.patchValue({
      title: this.blogService.arrBlog.find(blog => blog.id === this.id)?.title,
      description: this.blogService.arrBlog.find(blog => blog.id === this.id)?.description,
      author: this.blogService.arrBlog.find(blog => blog.id === this.id)?.author,
    })
    this.setCommets()
  }
  setCommets(){
    let control = <FormArray>this.blogForm.controls['comments']
    this.blogService.arrBlog.find(blog => blog.id === this.id)?.comments.forEach(data => {
      control.push(new FormControl(data))
    })
  }
  deleteComment(i:number){
    this.commentsArray.removeAt(i)
  }
  addComment(){
    this.commentsArray.push(new FormControl())
  }
  onSubmit(){
    var generateId = this.id
    if(Number.isNaN(generateId) || generateId === undefined){
      generateId = this.blogService.arrBlog.length+1
    }
    this.blogService.arrBlog.push({
      "id":generateId,
      "title":this.blogForm.value.title,
      "description":this.blogForm.value.description,
      "author":this.blogForm.value.author,
      "comments":this.blogForm.value.comments,})
    this.blogService.removeDuplicates()
  }
}
