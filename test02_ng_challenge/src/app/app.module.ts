import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

// import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
// import { ItemsComponent } from './item/items.component'
// import { ItemDetailComponent } from './item/item-detail.component'
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component'

import { NativeScriptFormsModule} from '@nativescript/angular'

@NgModule({
  bootstrap: [AppComponent],

  // imports: [NativeScriptModule, AppRoutingModule],
  imports: [NativeScriptModule,  NativeScriptFormsModule,],
  // declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  declarations: [AppComponent,CurrentChallengeComponent,],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
