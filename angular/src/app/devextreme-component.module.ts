import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
    imports: [
        DxButtonModule,
        DxDataGridModule
    ],
    exports: [
      DxButtonModule,
      DxDataGridModule
    ]
})
export class DevextremeComponentModule { }
