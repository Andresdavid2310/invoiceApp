import { Component, INJECTOR, Input } from '@angular/core';
import { RowItemComponent } from '../row-item/row-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'list-item',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input() items: Item[] = [];
}
