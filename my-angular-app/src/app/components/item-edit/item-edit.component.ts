import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  myForm : FormGroup;
  item: Item = { id: 0, name: '', description: '' };
  

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  updateItem(): void {
    
    this.itemService.updateItem(this.item.id, this.item).subscribe(() => this.router.navigate(['/items']));
    
  }
}