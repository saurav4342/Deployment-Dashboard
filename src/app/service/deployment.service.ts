import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IResponse,IPod } from '../models/deployment.model'

@Injectable()
export class DeploymentService{
constructor(private http : Http){

}
getDeployments(date:number):Observable<IResponse[]>{
    return this.http.get("http://localhost:8080/api/deploy/all/"+date).map((response:Response) => {
       return <IResponse>response.json();
    }).catch(this.handleError)  
}

private handleError(error : Response){
return Observable.throw(error.statusText)
}
showTestDetails(deployment:IResponse){
    return deployment;
}

}