// dependencies
import lozad from 'lozad';

// common
import { FireSkipToMenu, FireDetect } from '@common';

/**
 * @type class
 * @name FireGlobal
 * @description
 *
 * All global scripts should be initiated here
 *
 **/
export class FireGlobal {
  init() {
    const detect = new FireDetect();
    detect.setHtmlClasses();

    const observer = lozad(); // lazy loads elements with default selector: `.lozad`
    observer.observe();

    const skipToMenu = new FireSkipToMenu();
    skipToMenu.init();
  }
}
