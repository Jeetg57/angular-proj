import { Component, Input } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div>
      <div
        [routerLink]="['/events', event.id]"
        class="well hoverwell thumbnail"
      >
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
          Time: {{ event?.time }}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>

        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <br />
          <span class="pad-left"
            >{{ event?.location?.city }}, {{ event?.location?.country }}</span
          >
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .pad-left {
        margin-left: 65px;
      }
      .thumbnail {
        min-height: 210px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class ThumbnailEventComponent {
  @Input() event: any;
  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === "8:00 am";
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
