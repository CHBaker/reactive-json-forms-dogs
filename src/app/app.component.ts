import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Dog {
    id: number;
    breed: string;
    name: string;
    img: string;
}

export interface Payload {
    dogs: Dog[];
    dropoffPersonNames: string[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // this is the object from the 'backend'
    // it contains dependencies for the form
    backendPayload: Payload = {
        dogs: [
            {
                id: 1,
                name: 'Nova',
                breed: 'Husky',
                img: ''
            },
            {
                id: 2,
                name: 'Jasmine',
                breed: 'Border Collie',
                img: ''
            },
            {
                id: 3,
                name: 'Nora',
                breed: 'Dachshund',
                img: ''
            },
            {
                id: 4,
                name: 'Ollie',
                breed: 'Dachshund',
                img: ''
            },
            {
                id: 5,
                name: 'Hazel',
                breed: 'Dachshund',
                img: ''
            },
            {
                id: 6,
                name: 'Zena',
                breed: 'German Shepherd',
                img: ''
            }
        ],
        dropoffPersonNames: ['Hansel', 'Derek', 'Mugatu']
    };

    _form: FormGroup;
    _formReady = false;

    JSON;

    constructor(private fb: FormBuilder) {
        // Here we declare JSON locally
        // so we can use it in the template
        this.JSON = JSON;
    }

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this._form = this.fb.group({
            dog: ['default', Validators.required],
            dropoffPersonName: ['default', Validators.required],
            dropoffDate: [null, Validators.required]
        });
        this._formReady = true;
    }

    submitForm(form: FormGroup): void {
        let dog;

        // parse JSON string
        try {
            dog = JSON.parse(form.controls['dog'].value);
        } catch {
            dog = null;
        }

        const postPayload = {
            ...form.value,
            dogObject: dog
        };

        console.log(postPayload);
    }
}
