import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { DeploymentService } from './service/deployment.service'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ModalComponent } from './home/modal.component'
@NgModule({
  imports: [ BrowserModule,HttpModule,RouterModule,FormsModule ],
  declarations: [ AppComponent,WelcomeComponent,ModalComponent ],
  bootstrap: [ AppComponent ],
  providers:[DeploymentService]
})
export class AppModule { 

}
