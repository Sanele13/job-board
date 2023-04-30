import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage implements OnInit {
  user: User;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }

}
