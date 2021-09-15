import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(itemtag): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.DESKTOP_API + '/itemtag' + `?jwt_token=${jwt_token}`, itemtag);
    }
}