import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well-list/well/well.component';
import { FormsModule } from '@angular/forms';
import { WebappBuilderComponent } from './webapp-builder/webapp-builder.component';
import { ComponentGeneratorService } from './webapp-builder/component-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellListComponent,
    WellComponent,
    WebappBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ComponentGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
