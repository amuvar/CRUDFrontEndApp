// item-add.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.Component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  item: Item = { id: 0, name: '', description: '' };

  constructor(private itemService: ItemService, private router: Router) { }

  addItem() {
    this.itemService.createItem(this.item).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }
}
