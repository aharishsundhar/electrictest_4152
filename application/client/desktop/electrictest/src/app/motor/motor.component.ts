import { Component, OnInit } from '@angular/core';
import { MotorService } from './motor.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss'],
})

export class MotorComponent implements OnInit {
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
        private motorService: MotorService,
    ) { }

    ngOnInit() {
        this.itemtag.created_by = sessionStorage.getItem('email'); 
        this.itemmotor.created_by = sessionStorage.getItem('email'); 
        this.itemframe.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.motorService.GpCreate(this.itemtag).subscribe(data => {
            this.itemtag.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}