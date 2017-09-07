import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BlogAdminService} from '../adminShared/blog-admin.service';
import {Blog} from '../adminShared/blog';

@Component({
    selector: 'blog-add',
    templateUrl: './blog-add.component.html'
})
export class BlogAddComponent {
    imgTitle: string;
    imageSRC: string;
    postTitle: string;
    content: string;
    post: Blog;

    constructor(){}
}