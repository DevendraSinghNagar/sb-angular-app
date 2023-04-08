import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: UntypedFormGroup;
  submitted: Boolean = false;
  success: Boolean = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })

  }

  onSubmit() {
    this.submitted = true;

    if(this.formGroup.invalid) {
      this.success = false;
      return;
    }
    this.success = true;
  }

}
