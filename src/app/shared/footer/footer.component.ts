import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public form: FormGroup;
  public subscribed: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.subscribed = false;
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.controls.email.value.trim() === '') {
      return;
    } else {
      this.subscribed = true;
    }
  }

}
