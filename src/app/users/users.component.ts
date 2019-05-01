import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, stagger, transition, query } from '@angular/animations';

import { DataService } from '../data.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [
        trigger('userListAnimation', [
            transition('* <=> *', [
                query(':enter', [
                    style({opacity: 0, transform: 'translateY(-15px)'}),
                    stagger(
                        '50ms', 
                        animate(
                            '550ms ease-in', 
                            style({
                                opacity: 1, 
                                transform: 'translateY(0)'
                            })
                        )
                    )
                ], {optional: true}),
                query(':leave', [
                    animate('50ms',
                    style({opacity: 0}))
                ], {optional: true}
                )
            ])
        ])
    ]
})
export class UsersComponent implements OnInit {

  users:object;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getUsers().subscribe(
      data => this.users = data
    );
  }

}
