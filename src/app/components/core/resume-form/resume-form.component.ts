import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public model = {
    fullName: 'Joe Doe',
    bio: 'Lorem ipsum',
    location: 'Belgrade, Serbia',
    phoneNumber: '+321123123'
  };
  public fields: FormlyFieldConfig[] = [
    {
      key: 'fullName',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Your Full Name',
        required: true
      }
    },
    {
      key: 'bio',
      type: 'input',
      templateOptions: {
        label: 'Short bio',
        placeholder: 'Your short bio'
      }
    },
    {
      key: 'location',
      type: 'input',
      templateOptions: {
        label: 'Location',
        placeholder: 'Location'
      },
    },
    {
      key: 'phoneNumber',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        placeholder: 'Phone Number'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(model: { phoneNumber: string; fullName: string; bio: string; location: string }): void {
    console.log(this.model);
  }

  modelChange(event): void {
    console.log(event)
  }
}
