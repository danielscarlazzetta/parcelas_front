import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);

  public myFormRegister: FormGroup = this.fb.group({
    name:['', [ Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    email:['', [ Validators.required, Validators.email ]],
    password:['', [ Validators.required, Validators.minLength(6)]],
  })

  register(){
    console.log(this.myFormRegister.value)
  }

}
