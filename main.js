// dependencies
import $ from 'jquery';
import 'jquery-once';
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

  // lazy loads elements with default selector: `.lozad`
  const observer = lozad('.lozad', {
    loaded: (el) => {
      el.onload = () => {
        el.classList.add('lozad--loaded');
      };
    },
    rootMargin: '0% 0% 100%',
  });
  observer.observe();

  const componentRecord = new FireComponentRecord();
  componentRecord.registerAllComponents();

  // display page
  $('body').addClass('has-loaded');
};

// fire all scripts
$(document).ready(onPageReady);
