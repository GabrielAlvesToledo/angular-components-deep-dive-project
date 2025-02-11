import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    imports: [ButtonComponent, ControlComponent, FormsModule],
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css'
})

export class NewTicketComponent implements AfterViewInit{
    //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
    @Output() add = new EventEmitter<{title: string, text: string}>();
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

    constructor(){
        afterRender(() => {
            console.log('afterRender');
        });

        afterNextRender(() => {
            console.log('afterNextRender');
        });
    }

    ngAfterViewInit(): void {
        console.log(this.form().nativeElement);
    }
    onSubmit(title: string, text: string){
        this.add.emit({title: title, text: text});
        this.form().nativeElement.reset()
    }

}