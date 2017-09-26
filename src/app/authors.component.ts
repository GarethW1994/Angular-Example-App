import { log } from 'util';
import { Component } from '@angular/core';
import { AuthorsService } from './authors.services';

//component declaration
@Component({
    selector: 'authors',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css']
})

export class AuthorsComponent {
    title : string = 'List of Authors';
    authors;
    viewMode: string = 'map';
    courses = [
        {id: 1, name: 'course1'},
        {id: 2, name: 'course2'},
        {id: 3, name: 'course3'}
    ]
    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
    }

    haveAuthors() {
        if (this.authors.length > 0) {
            return true;
        } else if (this.authors.length === 0){
            console.log("no authors found")            
            return false;
        }
    }

    onAdd() {
        this.courses.push({id: 4, name: "course4"})
    }

    onRemove(course) {
        let index = this.courses.indexOf(course);
        console.log(index);
        this.courses.splice(index, 1);
    }
}