import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.module";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient) {}

    getPosts() {
        this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts')
            .subscribe((responseData) => {
                this.posts = responseData.posts; 
                this.postsUpdated.next([...this.posts]);
            });
    }

    getPostUpdatedListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = { id: null, title: title, content: content };
        this.http.post<{ message: string, post: Post }>('http://localhost:3000/api/posts', post)
            .subscribe((responseData) => {
                this.posts.push(responseData.post); 
                this.postsUpdated.next([...this.posts]); 
            });
    }
}
