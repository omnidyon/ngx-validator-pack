import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressChecks, ChecksDirective, PasswordChecks, WordCountChecks } from "../../../../../ngx-validator-pack/src/public-api";
import { SnippetsComponent } from '../snippets/snippets.component';
import { UsernameChecks } from '../../../../../ngx-validator-pack/src/lib/checks/username-checks';
import { EmailChecks } from '../../../../../ngx-validator-pack/src/lib/checks/email-checks';
import { PhoneChecks } from '../../../../../ngx-validator-pack/src/lib/checks/phone-checks';
import { SlugChecks } from '../../../../../ngx-validator-pack/src/lib/checks/slugs-checks';

@Component({
  selector: 'app-checked-example',
  standalone: true,
  imports: [ReactiveFormsModule, SnippetsComponent, ChecksDirective],
  templateUrl: './checked-example.component.html',
  styleUrl: './checked-example.component.scss',
})
export class CheckedExampleComponent implements OnInit {
  checkedForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}
  
  usernameChecks = UsernameChecks();
  passwordChecks = PasswordChecks();
  emailChecks = EmailChecks();
  phoneChecks = PhoneChecks();
  addressChecks = AddressChecks();
  wordCountChecks = WordCountChecks(2, 10);
  slugChecks = SlugChecks();

  ngOnInit(): void {
    this.checkedForm = this.fb.group({
      usernameChecks: [null, this.usernameChecks.validators],
      passwordChecks: [null, this.passwordChecks.validators],
      emailChecks: [null, this.emailChecks.validators],
      phoneChecks: [null, this.phoneChecks.validators],
      addressChecks: [null, this.addressChecks.validators],
      wordCountChecks: [null, this.wordCountChecks.validators],
      slugChecks: [null, this.slugChecks.validators]
    });
  }
}
