import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ItemListComponent } from './components/item-list/item-list.component';
// import { ItemCreateComponent } from './components/item-create/item-create.component';

// import { ItemDeleteComponent } from './components/item-delete/item-delete.component';

@NgModule({
  declarations: [
    AppComponent
    // ItemListComponent,
    // ItemCreateComponent,
   
    // ItemDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatInputModule,
    MatCardModule
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }