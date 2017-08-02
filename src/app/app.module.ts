import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { DeploymentService } from './service/deployment.service'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,WelcomeComponent ],
  bootstrap: [ AppComponent ],
  providers:[DeploymentService]
})
export class AppModule { 

}
