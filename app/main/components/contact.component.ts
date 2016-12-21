import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {MainService} from '../services/main.service';
import {IContact} from '../models/contact';
@Component({
    selector:'[my-contact]',
    templateUrl:'./app/main/templates/contact.template.html'
})

export /**
 * ContactComponent
 */
class ContactComponent implements OnInit {
    contactForm:FormGroup;
    description:string;
    constructor(private mainService:MainService,private formBuilder:FormBuilder) {
        
    }

    ngOnInit(){
        this.contactForm=this.formBuilder.group({
            name:['',Validators.required],
            email:['',Validators.required],
            message:['',Validators.required]
        })

        this.description="Kindly fill this contact form";
    }
    
    public submitContactForm(contactForm:FormGroup){
        console.log(contactForm.controls);
    }
}