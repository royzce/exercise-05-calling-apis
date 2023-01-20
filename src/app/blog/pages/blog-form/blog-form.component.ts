import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements AfterViewInit, OnInit{

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

  id !: number
  highestID!: number; 
  
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blog:Blog[]) => {
      this.highestID = Math.max(...blog.map(b => b.id))
    }) 
  }

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
    this.blogService.getBlogs().subscribe((res:any) => {
      let filteredBlog = res.find((blog: Blog) => blog.id === this.id)
      this.blogForm.patchValue({
        title: filteredBlog.title,
        description: filteredBlog.description,
        author: filteredBlog.author
      })
    })
    this.setComments()
  }

  setComments(){
    let control = <FormArray>this.blogForm.controls['comments']
    this.blogService.getBlogs().subscribe((res:any) => {
      res.find((blog: Blog) => blog.id == this.id).comments.
      forEach((comments: any) => control.push(new FormControl(comments)))
    })
  }

  addComment = () => {
    this.commentsArray.push(new FormControl())
  }
  deleteComment = (i:number) => {
    this.commentsArray.removeAt(i)
  }

  onSubmit(){
    let blog:any = {
      title: this.blogForm.value.title,
      description: this.blogForm.value.description,
      author: this.blogForm.value.author,
      comments: this.blogForm.value.comments
    }
    if(Number.isNaN(this.id) || this.id === undefined){
      //create Blog
      blog.id = this.highestID+1
      this.blogService.createBlog(blog).subscribe()
    }{
      //update Blog
      blog.id = this.id
      this.blogService.updateBlog(this.id,blog).subscribe()
    }
  }
}
