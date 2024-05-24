// src/app/components/item-create/item-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService, Item } from '../../services/item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  item: Item = { id: 0, name: '', description: '' };

  constructor(private itemService: ItemService, private router: Router) { }

  addItem(): void {
    this.itemService.addItem(this.item).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }
}
