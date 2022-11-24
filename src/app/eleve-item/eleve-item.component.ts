import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eleve-item',
  templateUrl: './eleve-item.component.html',
  styleUrls: ['./eleve-item.component.css']
})
export class EleveItemComponent {

@Input()
Nomeleve :String | undefined;
@Input() 
Cineleve:String | undefined;
@Input() Index:number | undefined;
  Dataeleve=[
    {cin:'09724208',nom:'arij chetoui',age:'22 ans ' ,adresse:'rue chtawa Tozeur 2200 '},
    {cin:'09711203',nom:'ibrahim benyounes',age:'25 ans ' ,adresse:'rue chtawa Tozeur 2200 jar arij bent youssef '}
  ]
  lastModified = new Date();
 
}
