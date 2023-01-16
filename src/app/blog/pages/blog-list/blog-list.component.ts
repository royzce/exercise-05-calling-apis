import { AfterViewInit, Component} from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements AfterViewInit{
   
  constructor(private blogService: BlogService, private sharedService: SharedService){
  }
  ngAfterViewInit(): void {
    this.sharedService.showElement()
  }

  getListOfBlog(){
    return this.blogService.getListOfBlog()
  }
}
