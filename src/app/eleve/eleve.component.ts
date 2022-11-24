import { Component } from '@angular/core';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent {
  [x: string]: any;
  Dataeleve=[
    {cin:'09724208',nom:'arij chetoui',age:'22 ans ' ,adresse:'rue chtawa Tozeur 2200 '},
    {cin:'09711203',nom:'ibrahim benyounes',age:'25 ans ' ,adresse:'rue chtawa Tozeur 2200 jar arij bent youssef '}
  ]

 
  onmodifier() {
    this.Dataeleve.forEach((app: { cin: string; }) => {
      app.cin = '09724208';
    });
  }

  
  }

