import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { ApicallComponent } from 'src/app/pipe-module/apicall/apicall.component';
import { FilterPPipe } from 'src/app/filter-p.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilterPipeComponent,
    ApicallComponent,
    FilterPPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[FilterPipeComponent,ApicallComponent]
})
export class PipeModuleModule { }
