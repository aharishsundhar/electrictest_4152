import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class GpsearchitemService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpSearch(electricadd): Observable<any> {
        const temp = [];
 	 	const objectKeyPair = Object.entries(electricadd);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.DESKTOP_API + `/electricadd/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
    }
    GpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.DESKTOP_API + '/electricadd' + `?jwt_token=${jwt_token}`);
    }
}