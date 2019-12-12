import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Router } from '@angular/router';
import { USER } from '../../models/app.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subjectData: object;
  suserDetails: USER;
  showMobileMenu = false;
  constructor(private comser: CommunicationService, private router: Router) { }

  ngOnInit() {
    this.headerReference();
    this.streamData();
  }
  streamData() {
    this.comser.getMessage().subscribe(
      (res) => {
        console.log('receiving from header component');
        console.log(res);
        this.subjectData = res;
        this.headerReference();
      }
    );
  }
  headerReference() {
    this.suserDetails = JSON.parse(sessionStorage.getItem('user'));
  }
  logOut() {
    sessionStorage.clear();
    this.headerReference();
    this.router.navigate(['']);
  }

  toggleNavbar() {
    this.showMobileMenu = !this.showMobileMenu;
  }



}

