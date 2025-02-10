import { AfterViewInit, Component, ContentChild, ElementRef, inject, input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-control',
    standalone: true,
    templateUrl: './control.component.html',
    styleUrl: './control.component.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'control',
        '(click)': 'onClick()'
    }
}) 

export class ControlComponent implements AfterViewInit{
    label = input.required<string>(); 

    private el = inject(ElementRef);

    @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

    ngAfterViewInit(): void {
        console.log('...');
        console.log(this.control?.nativeElement);
    }

    onClick(){
        console.log("Clicked");
        console.log(this.el);
    }

}