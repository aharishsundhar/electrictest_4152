import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})

export class CatalogComponent implements OnInit {
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
        private catalogService: CatalogService,
    ) { }

    ngOnInit() {
        this.electricadd.created_by = sessionStorage.getItem('email'); 
        this.itemtaglist.created_by = sessionStorage.getItem('email'); 
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.catalogService.GpGetAllValues().subscribe(data => {
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