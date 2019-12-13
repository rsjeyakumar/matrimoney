import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../shared/services/http.service';
import { ENDPOINTS } from '../../shared/services/end-points.enum';
import { CommunicationService } from '../../shared/services/communication.service';
import { USER, LOGINREQUEST, REGISTERRESPONSE } from '../../models/app.models';
import { DatePipe } from '@angular/common';
import Utils from '../../shared/services/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class LoginComponent implements OnInit {
  toggleLoginReg = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginvalidation = false;
  loginSpin: boolean;
  registerSpin: boolean;
  genter = ['male', 'female'];
  city = ['bangalore', 'hyderabad', 'chennai'];
  maritalStatus = ['married', 'single', 'divorced'];
  phonePattern: RegExp = /^[7-9][0-9]{9}$/;
  regResponse: REGISTERRESPONSE;
  constructor(private http: HttpService, private router: Router, private passdata: CommunicationService, private datePipe: DatePipe) { }

  ngOnInit() {
    /* Loginform creation */
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    /* registration form creation */
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      genter: new FormControl(null, [Validators.required]),
      maritialStatus: new FormControl(null, [Validators.required]),
      emailAddress: new FormControl(null, [Validators.required, Validators.email]),
      dob: new FormControl(null, [Validators.required, Utils.validatedob]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(this.phonePattern)]),
      city: new FormControl(null, [Validators.required]),
      educationDetails: new FormControl(null, [Validators.required]),
      annualIncome: new FormControl(null, [Validators.required]),
      aboutMe: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      imageUrl: new FormControl(null, [Validators.required])
    });
    const usesession = sessionStorage.getItem('user');
    if (usesession) {

      this.router.navigate(['/home/suggestedprofile']);
    } else {
      this.router.navigate(['']);
    }

  }

  /* toggle login form and registration form */
  toggleForm() {
    this.toggleLoginReg = !this.toggleLoginReg;
  }

  /* Login api submit */
  loginSubmit() {
    const queryparams: LOGINREQUEST = {
      phoneNumber: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    const apiEndpointUrl = ENDPOINTS.LOGIN;
    this.loginSpin = true;
    this.http.createData(apiEndpointUrl, queryparams).subscribe(
      (res: USER) => {
        this.loginSpin = false;
        if (res.statusCode === 200) {
          const data = {
            userDetails: true
          };
          sessionStorage.clear();
          this.loginvalidation = false;
          sessionStorage.setItem('user', JSON.stringify(res));
          this.passdata.sendMessage(data);
          this.router.navigate(['/home/suggestedprofile']);
        } else {
          sessionStorage.clear();
          this.loginvalidation = true;
        }
      }
    );
  }

  /* Register api submit */
  registerFormSubmit() {
    const registerform = {
      name: this.registerForm.value.name,
      gender: this.registerForm.value.genter,
      maritialStatus: this.registerForm.value.maritialStatus,
      emailAddress: this.registerForm.value.emailAddress,
      dob: this.datePipe.transform(this.registerForm.value.dob, 'yyyy-MM-dd'),
      phoneNumber: this.registerForm.value.phoneNumber,
      password: this.registerForm.value.password,
      city: this.registerForm.value.city,
      educationDetail: this.registerForm.value.educationDetails,
      annualIncome: Number(this.registerForm.value.annualIncome),
      aboutMe: this.registerForm.value.aboutMe,
      imageUrl: this.registerForm.value.imageUrl
    };
    this.registerSpin = true;
    const apiEndpointUrl = ENDPOINTS.REGISTRATION;
    this.http.createData(apiEndpointUrl, registerform).subscribe(
      (res: REGISTERRESPONSE) => {
        this.registerSpin = false;
        this.regResponse = res;
      }
    );
  }

  /* Reset Register form */
  resetRegiserform() {
    this.registerSpin = false;
    this.registerForm.reset();
  }


}
