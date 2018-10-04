// dependencies
import lozad from 'lozad';

// common
import { FireDetect, FireComponentRecord } from '@common';

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

    const componentRecord = new FireComponentRecord();
    componentRecord.registerAll();
  }
}
