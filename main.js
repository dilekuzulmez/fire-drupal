import $ from 'jquery';
import '@base/polyfills';
import { FireDetect, FireComponentRecord, FireLazyLoader } from '@base';

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
