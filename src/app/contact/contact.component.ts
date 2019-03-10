import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
//create injection with private, take in the function FormBuilder
//inside the constructor make sure to create the form, in the array first value is empty, and second is the validator
  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      
    })
   }

  onSubmit(){
    this.submitted = true;
      //invalid is a built in method
    if(this.messageForm.invalid){
      return;
    }else{
      this.success = true;
    }
  }

  ngOnInit() {
  }

}
