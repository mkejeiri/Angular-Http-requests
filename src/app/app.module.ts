import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerService} from './server.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule //       V E R Y   I M P O R T A N T!!!
               //don't forget to import also HttpModule, otherwise the ServerService
               //won't work!!!
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
