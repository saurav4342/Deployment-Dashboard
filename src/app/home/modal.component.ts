import { Component,OnInit,Input } from '@angular/core'
import { DeploymentService } from '../service/deployment.service'
import { IDeployment } from '../models/deployment.model'

@Component({
    selector:'test-modal',
    template: `<div class="modal fade" id="test-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal.body">
        <ng-content></ng-content>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
})

export class ModalComponent{
 @Input() deployment:IDeployment;
}
