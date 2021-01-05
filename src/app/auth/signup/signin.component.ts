import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class LoginComponent {
  onLogin(form: NgForm): void {
    console.log(form.value);
  }
}
