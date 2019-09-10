import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventService } from "./events/shared/event.service";
import { NavBarComponent } from "./nav/navbar.component";
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { ThumbnailEventComponent } from "./events/event.thumbnail.component";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailEventComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
