import $ from 'jquery';

/**
 * @type public
 * @name FireSkipToMenu
 * @description
 *
 * skip to menu (accessibility) functionality
 *
 **/
export class FireSkipToMenu {
  _buildMenu() {
    $('#js-skip-to-menu').append(`
			<div id="skip-link">
				<button tab-index="0" id="skip-to-toggle" class="visually-hidden focusable">Skip to ...</button>
				<ul id="js-skip-to-select" class="skip-to-menu__select" aria-label="Skip To and Page Outline"></ul>
			</div>
		`);

    $('#js-skip-to-select').append(`
			<li class="skip-to-menu__title" role="separator">Skip to</li>
			<li class="skip-to-menu__select-item" role="presentation">
				<a class="skip-to-menu__select-anchor" href="#site-content" role="menuitem">Main content</a>
			</li>
			<li class="skip-to-menu__select-item" role="presentation">
				<a class="skip-to-menu__select-anchor" href="#site-header" role="menuitem">Main Menu</a>
			</li>
			<li class="skip-to-menu__title" role="separator">Page Outline</li>
		`);

    // Grab ALL headers and adds them to menu
    $(':header').each(function(index) {
      // Sets up anchor name/id, remove punctuation and replaces spaces with dashes
      const headerText = $(this)
        .text()
        .replace(/[.,\/#!$%\^&\*'?;:{}=\_`~()]/g, '')
        .replace(/ /g, '-')
        .toLowerCase();

      $('#js-skip-to-select').append(`
				<li class="skip-to-menu__select-item" role="presentation">
					<a class="skip-to-menu__select-anchor skip-to-menu__select-anchor--${$(this)
            .prop('tagName')
            .toLowerCase()}" href="#${headerText + '_' + index}" role="menuitem">
						${$(this)
              .prop('tagName')
              .toLowerCase()}: ${$(this).text()} 
					</a>
				</li>
			`);

      $(this).attr('id', headerText + '_' + index);
      $(this).addClass('skip-to-menu__anchor');
    });
  }

  _initEventHandlers() {
    // Prevents keyboard scrolling when body has prevention class
    window.addEventListener(
      'keydown',
      function(e) {
        if ($('body').hasClass('skip-to-menu-lock-keyboard-scroll')) {
          // space and arrow keys
          if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
          }
        }
      },
      false,
    );

    // Adds offclick to skip to selection menu
    $(document).mouseup(function(e) {
      var container = $('#js-skip-to-select');

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('skip-to-menu__select--visible');
        $('body').removeClass('skip-to-menu-lock-keyboard-scroll');
      }
    });

    // Toggles skip to menu
    $('#skip-to-toggle').click(function() {
      // Locks body when toggled
      $('body').addClass('skip-to-menu-lock-keyboard-scroll');

      // Shows skip menu and jumps to first item in list
      $('#js-skip-to-select').addClass('skip-to-menu__select--visible');
      $('#js-skip-to-select li:first-of-type a').focus();
    });

    // Tracks up & down arrow key press
    $('.skip-to-menu__select-anchor').keydown(function(event) {
      // Up arrow
      if (event.keyCode === 38) {
        // If no anchor found jump to the next menu section
        if (
          $(event.target)
            .parent()
            .prev()
            .find('a').length === 0
        ) {
          $(event.target)
            .parent()
            .prev()
            .prev()
            .find('a')
            .focus();

          // If no anchor found even after jumping, jump to last item
          if (
            $(event.target)
              .parent()
              .prev()
              .prev()
              .find('a').length === 0
          ) {
            $('.skip-to-menu__select-item:last')
              .find('a')
              .focus();
          }
        } else {
          $(event.target)
            .parent()
            .prev()
            .find('a')
            .focus();
        }
      }

      // Down arrow
      if (event.keyCode === 40) {
        // If no anchor found jump to the next menu section
        if (
          $(event.target)
            .parent()
            .next()
            .find('a').length === 0
        ) {
          $(event.target)
            .parent()
            .next()
            .next()
            .find('a')
            .focus();

          // If no anchor found even after jumping, jump to first item
          if (
            $(event.target)
              .parent()
              .next()
              .next()
              .find('a').length === 0
          ) {
            $('.skip-to-menu__select-item:first')
              .find('a')
              .focus();
          }
        } else {
          $(event.target)
            .parent()
            .next()
            .find('a')
            .focus();
        }
      }
    });

    // Jumps to selected anchor
    $('.skip-to-menu__select-anchor').click(function() {
      var anchor = $(this).attr('href');

      // Animates to anchor
      $('html, body').animate(
        {
          scrollTop: $(anchor).offset().top - $(window).height() / 2 - $(anchor).height(),
        },
        750,
      );

      // Focuses the selected anchor
      $(anchor).focus();
    });

    // Hides menu when an anchor is clicked & removes scroll lock
    $('.skip-to-menu__select-anchor').click(function() {
      $('#js-skip-to-select').removeClass('skip-to-menu__select--visible');
      $('body').removeClass('skip-to-menu-lock-keyboard-scroll');
    });
  }

  init() {
    this._buildMenu();
    this._initEventHandlers();
  }
}
