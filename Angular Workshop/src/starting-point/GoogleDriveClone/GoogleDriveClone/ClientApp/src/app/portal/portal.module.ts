import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { portalRoutes } from "./portal.routing";
import { SharedModule } from "../app.shared.module";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, RouterModule.forChild(portalRoutes), SharedModule],
  exports: [],
  providers: []
})
export class PortalModule {}
