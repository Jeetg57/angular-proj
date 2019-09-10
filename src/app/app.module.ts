import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventService } from "./events/shared/event.service";
import { NavBarComponent } from "./nav/navbar.component";
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { ThumbnailEventComponent } from "./events/event.thumbnail.component";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)] /* Routes*/,
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailEventComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, fo you really want to cancel?"
    );
  } else {
    return true;
  }
}
