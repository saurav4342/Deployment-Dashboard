export interface IResponse{
	release:string;
	deploymentMap:IDeploymentMap[];
}

export interface IDeploymentMap{
	 deploymentId:string;
	 deployment : IDeployment;
	 deployed : boolean;
	  application : string;
	 version : string;
	 systemCheck : boolean;
}

export interface IDeployment{
     pod : IPod
     hosts : IHost[]
  lastDeploymentTime : string
  deploymentStatus : string
}

export interface IPod{
pod : string
}

export interface IHost{
 hostName : string
 components : string[]
deploymentStatus : string
 isOnline : boolean
}