import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'

import {
  FormsModule,
  FormGroup,
  Validators,
  RequiredValidator,
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms'

import {
  IonicModule,
  ToastController,
  isPlatform,
  LoadingController,
  AlertController

} from '@ionic/angular' 

import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  credentials!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loadController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController
  ) { }

  public get email() { return this.credentials.get('email') }
  public get password() { return this.credentials.get('password') }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


}
