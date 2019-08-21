import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule, MatInputModule],
})
export class MaterialModule { }
