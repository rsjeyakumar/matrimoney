import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../../shared/services/http.service';
import { ENDPOINTS } from '../../../shared/services/end-points.enum';
import { CommunicationService } from '../../../shared/services/communication.service';
import {
  PROFILEDETAILRESPONSE, SHOWINTRESTRESPONSE, SHOWINTRESTREQUEST,
  PROFILEDASBOARDRESPONSE, PROFILE, INTRESTEDPROFILERES
} from '../../../models/app.models';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [MessageService]
})
export class LandingComponent implements OnInit {

  display = false;
  profileDetail: PROFILEDETAILRESPONSE;
  loginId: number;
  matrimonyId: number;
  profiles: PROFILE[];
  currentPage: string;
  constructor(private http: HttpService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginId = JSON.parse(sessionStorage.getItem('user')).matrimonyId;
    this.route.params.subscribe(
      (res) => {
        this.currentPage = res.key;
        if (res.key === 'myintrest') {
          this.myinterests();
        } else if (res.key === 'matches') {
          this.matches();
        } else {
          this.profiledashboard();
        }
      }
    );
  }

  profiledashboard() {
    this.profiles = [];
    const endpoint = `${ENDPOINTS.USERS}/${this.loginId}/dashboard`;
    this.http.readData(endpoint).subscribe(
      (res: PROFILEDASBOARDRESPONSE) => {
        if (res.statusCode === 200) {
          this.profiles = res.profiles;
        } else if (res.statusCode === 404) {

        }

      }
    );
  }
  matches() {
    this.profiles = [];
    const endpoint = `${this.loginId}/preferredprofiles`;
    this.http.readData(endpoint).subscribe(
      (res: PROFILEDASBOARDRESPONSE) => {
        if (res.statusCode === 200) {
          this.profiles = res.profiles;
        } else if (res.statusCode === 404) {

        }

      }
    );
  }
  myinterests() {
    this.profiles = [];
    const endpoint = `${this.loginId}/${ENDPOINTS.INTEREST}`;
    this.http.readData(endpoint).subscribe(
      (res: INTRESTEDPROFILERES) => {
        if (res.statusCode === 200) {
          this.profiles = res.interestedProfiles;
        } else if (res.statusCode === 404) {

        }

      }
    );
  }


  viewDetailsProfile(matrimonyid: number) {
    this.matrimonyId = matrimonyid;
    const endpoint = `${ENDPOINTS.USERS}/${matrimonyid}/${this.loginId}`;

    this.http.readData(endpoint).subscribe(
      (res: PROFILEDETAILRESPONSE) => {
        this.profileDetail = res;
      }
    );

    this.display = true;
  }




  viewintrested() {
    const matrimonyId = this.matrimonyId;
    const intrestedMatId: SHOWINTRESTREQUEST = {
      interestMatrimonyId: matrimonyId
    };
    const endpoint = `${ENDPOINTS.USERS}/${this.loginId}`;
    this.http.createData(endpoint, intrestedMatId).subscribe(
      (res: SHOWINTRESTRESPONSE) => {
        this.messageService.add({ severity: 'success', summary: res.message });
      }
    );
  }

}
