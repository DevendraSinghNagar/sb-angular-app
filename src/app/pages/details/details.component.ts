import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

	user: Object;

	constructor(private route: ActivatedRoute, private ds: DataService) {
		this.route.params.subscribe(
			params => this.user = params.id
		)
	}

	ngOnInit() {
		this.ds.getUser(this.user).subscribe(
			data => this.user = data
		)
	}

}
