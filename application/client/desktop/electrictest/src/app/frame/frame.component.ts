import { Component, OnInit } from '@angular/core';
import { FrameService } from './frame.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})

export class FrameComponent implements OnInit {
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
        private frameService: FrameService,
    ) { }

    ngOnInit() {
        this.itemtag.created_by = sessionStorage.getItem('email'); 
        this.itemmotor.created_by = sessionStorage.getItem('email'); 
        this.itemframe.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.frameService.GpCreate(this.itemtag).subscribe(data => {
            this.itemtag.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}