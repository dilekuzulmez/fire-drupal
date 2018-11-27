import $ from 'jquery';

import { FireComponent } from '@common';

export class SiteHeader extends FireComponent {
  constructor(id) {
    // register the component by calling `super()` and passing in the component id
    // this creates an instance of the `FireComponent` Class that we extended above
    // giving us access to the `this.$component` variable which contains a reference to the registered HTML element
    // as well as `this.$componentExists` to check if the component exists on the page yet
    super(id);
  }

  init() {
    // don't run anymore scripts if component doesn't exist on the page
    if (!this.componentExists) return;
    // run scripts here
  }
}
