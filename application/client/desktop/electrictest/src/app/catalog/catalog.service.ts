import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CatalogService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.DESKTOP_API + '/electricadd' + `?jwt_token=${jwt_token}`);
    }
}