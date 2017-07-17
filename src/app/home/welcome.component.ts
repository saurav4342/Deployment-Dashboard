import { Component } from '@angular/core';
import { DeploymentService } from '../service/deployment.service'
import { IDeployment,IPod } from '../models/deployment.model'
import { OnInit } from '@angular/core'
import {FormsModule } from '@angular/forms'

@Component({
    selector:'deploy-list',
    templateUrl: 'app/home/welcome.component.html',
    
})
export class WelcomeComponent implements OnInit{
    public pageTitle: string = 'Deployment Status';
    deployments:IDeployment[]
    pods:IPod[]
    date:number
    constructor(private deploymentService : DeploymentService){
    
    }
    ngOnInit(){ 
     this.getDeploymentsByDate(Date.now())
    }
    getData(formValue:any){
        this.date= new Date(formValue.date).getTime();
        this.getDeploymentsByDate(this.date)
    }
getDeploymentsByDate(date:number){
this.deploymentService.getDeployments(date).subscribe( deployments => { this.deployments = deployments });

}

}

