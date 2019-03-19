// dependencies
import $ from 'jquery';

// polyfills
import '@common/polyfills';

// common
import { FireDetect, FireComponentRecord, FireLazyLoader } from '@common';

const detect = new FireDetect();
const componentRecord = new FireComponentRecord();
const lazyLoader = new FireLazyLoader();

/**
 * @type function
 * @name onPageReady
 * @description
 *
 * Initialize scripts when page is ready
 *
 **/
const onPageReady = () => {
  detect.setHtmlClasses();
  lazyLoader.init();
  lazyLoader.observer.observe();
  componentRecord.registerAllComponents();

  // display page
  $('body').addClass('has-loaded');
};

// fire all scripts
$(document).ready(onPageReady);
