import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OtherComponent } from './other.component';

@NgModule({
    imports: [ BrowserModule ],     
    declarations: [OtherComponent],
    bootstrap: [ OtherComponent ]
})

export class OtherModule {}