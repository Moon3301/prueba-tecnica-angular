import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { TabsModule } from 'primeng/tabs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';


@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    AvatarModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    DividerModule,
    TabsModule,
    SelectButtonModule,
    TableModule,
    DatePickerModule

  ]
})
export class PrimengModule { }
