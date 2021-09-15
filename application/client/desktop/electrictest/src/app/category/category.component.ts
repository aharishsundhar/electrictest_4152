import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})

export class CategoryComponent implements OnInit {
    public itemtag = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }
    public itemmotor = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }
    public itemframe = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private categoryService: CategoryService,
    ) { }

    ngOnInit() {
        this.itemtag.created_by = sessionStorage.getItem('email'); 
        this.itemmotor.created_by = sessionStorage.getItem('email'); 
        this.itemframe.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.categoryService.GpCreate(this.itemtag).subscribe(data => {
            this.itemtag.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}