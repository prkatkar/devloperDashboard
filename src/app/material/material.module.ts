import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {FlexLayoutModule} from '@angular/flex-layout';


const MaterialComponent =[MatButtonModule,
MatToolbarModule,MatIconModule,FlexLayoutModule
];
@NgModule({
 
  imports: [MatButtonModule
  ],
  exports:[MaterialComponent]
})
export class MaterialModule { }
