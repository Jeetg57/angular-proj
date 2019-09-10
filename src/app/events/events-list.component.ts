import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Component({
  template: `
    <div>
      <h1 class="text-center" style="color:black;">Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <event-thumbnail
          #thumbnail
          *ngFor="let event of events"
          [event]="event"
          class="col-md-5"
          (click)="handleThumbnailClick(event.name)"
        ></event-thumbnail>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
