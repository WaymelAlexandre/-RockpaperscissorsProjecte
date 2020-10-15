import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayreslutComponent } from './routes/displayreslut/displayreslut.component';
import { PickyourchooseComponent } from './routes/pickyourchoose/pickyourchoose.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayreslutComponent,
    PickyourchooseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
