import { Component, OnInit } from '@angular/core';
import { GpsearchitemService } from './gpsearchitem.service';

@Component({
  selector: 'app-gpsearchitem',
  templateUrl: './gpsearchitem.component.html',
  styleUrls: ['./gpsearchitem.component.scss'],
})

export class GpsearchitemComponent implements OnInit {
    columnDefs: any = [{ headerName: 'category', field: 'category'  },{ headerName: 'frame', field: 'farme'  },{ headerName: 'motor', field: 'motor'  },];
    public electricadd = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        category: '',
        farme: '',
        motor: '',
    }
    public itemtaglist = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        category: '',
        farme: '',
        motor: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private gpsearchitemService: GpsearchitemService,
    ) { }

    ngOnInit() {
        this.electricadd.created_by = sessionStorage.getItem('email'); 
        this.itemtaglist.created_by = sessionStorage.getItem('email'); 
        this.GpGetAllValues();
    }
    GpSearch() {
        this.gpsearchitemService.GpSearch(this.electricadd).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.gpsearchitemService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}