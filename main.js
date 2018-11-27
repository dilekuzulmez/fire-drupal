// dependencies
import $ from 'jquery';
import lozad from 'lozad';

// polyfills
import '@common/polyfills';

// common
import { FireDetect, FireComponentRecord } from '@common';

/**
 * @type function
 * @name onPageReady
 * @description
 *
 * Initialize scripts when page is ready
 *
 **/
const onPageReady = () => {
  const detect = new FireDetect();
  detect.setHtmlClasses();

  const observer = lozad(); // lazy loads elements with default selector: `.lozad`
  observer.observe();

  const componentRecord = new FireComponentRecord();
  componentRecord.registerAll();
};

// fire all scripts
$(document).ready(onPageReady);
