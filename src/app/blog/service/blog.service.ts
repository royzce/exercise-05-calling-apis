import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  arrBlog:Blog [] = [
    {
      id: 1,
      title: 'Up Up and Away!',
      description: 'Took time off to recuperate and recover my energy. Now back from paradise, rejuvenated and ready to take on the beast again. All eyes on the prize, one more trip to deliver the coup de grace to that other beast in the west.',
      author: 'Lester Morales',
      comments: ['Good I was inspired', 'Great Work']
    },
    {
      id: 2,
      title: 'Do Nots',
      description: 'purred on by my observations at work, I have come up with a list of things to avoid as a doctor in a hospital setting (especially for interns and medical students). Don\'t wear jeans under your white coat. Its unprofessional.',
      author: 'James Smith',
      comments: ['Very good my guy', 'Nice I did not thing that it will work']
    },
    {
      id: 3,
      title: 'Times they are a changin\'',
      description: 'Major changes have recently occured in my life, both personally and professionally. We\'re approaching five years since the inception of this blog, and going back to read the posts from May 04 is quite the experience.',
      author: 'Author 3',
      comments: ['Awesome content', 'Cool very inspiring']
    }
  ]
  getListOfBlog(){
    return this.arrBlog;
  }
  constructor() { }
}
