import $ from 'jquery';

import { FireComponent, FireHelpers } from '@common';

export class ConvertToInlineSvg extends FireComponent {
  constructor(id) {
    super(id);

    this.url = this.$component.attr('src');
    this.id = this.$component.attr('id');
    this.classes = this.$component.attr('class');
    this.color = this.$component.attr('data-color') ? this.$component.attr('data-color') : null;
  }

  init() {
    if (!this.componentExists) return;

    FireHelpers.convertSourceToSVG(this.$component, this.url, this.color, this.classes, this.id);
  }
}
