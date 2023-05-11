import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }

}
