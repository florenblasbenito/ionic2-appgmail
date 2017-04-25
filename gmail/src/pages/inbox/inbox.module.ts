import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Inbox } from './inbox';

@NgModule({
  declarations: [
    Inbox,
  ],
  imports: [
    IonicModule.forChild(Inbox),
  ],
  exports: [
    Inbox
  ]
})
export class InboxModule {}
