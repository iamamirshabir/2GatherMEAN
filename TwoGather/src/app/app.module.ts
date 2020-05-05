import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import 'hammerjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelsComponent } from './channels/channels.component';
import { ThreadComponent } from './thread/thread.component';

import {ThreadService} from"./services/thread.service"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChannelsComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [ ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
