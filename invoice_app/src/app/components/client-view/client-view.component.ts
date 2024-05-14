import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {
  @Input() client: Cliente = new Cliente();

}
