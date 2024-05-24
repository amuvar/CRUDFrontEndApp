import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.getItem();
    });
  }
}
