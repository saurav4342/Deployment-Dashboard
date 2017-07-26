import { Component,OnInit } from '@angular/core';
import { DeploymentService } from '../service/deployment.service'
import { IResponse,IDeploymentMap } from '../models/deployment.model'
import { FormsModule } from '@angular/forms'

@Component({
    selector:'deploy-list',
    templateUrl: 'app/home/welcome.component.html',
    
})
export class WelcomeComponent implements OnInit{
    public pageTitle: string = 'Deployment Status';
    deployments:IResponse[]
    deploymentMaps:IDeploymentMap[]
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
this.deploymentService.getDeployments(date).subscribe( deployments => { this.deployments = deployments 
this.deployments.forEach(element => {
    this.deploymentMaps = element.deploymentMap;
    this.deploymentMaps.sort( function(name1, name2) {
	    if ( name1.deployment.pod.pod < name2.deployment.pod.pod ){
	    	return -1;
	    }else if( name1.deployment.pod.pod > name2.deployment.pod.pod ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
});
});
}
}

