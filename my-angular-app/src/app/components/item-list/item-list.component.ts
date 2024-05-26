// src/app/components/item-list/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  item1: Item = { id: 0, name: '', description: '' };

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
  editItem(item: Item): void {
    this.router.navigate(['/edit-item', item.id]);
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => this.loadItems());
  }

  addItem(): void {
    this.router.navigate(['/create-item']);
  }

}

