import {Component} from '@angular/core'

@Component({
    selector:'app-warning-alert',
    template:`<p>This is a warning</p>`,
    styles:[
      `  p{
            padding: 20 px;
            background-color:red;
            border:1px solid red;
        }
      `
    ]
})
export class WarningAlertComponent{

}