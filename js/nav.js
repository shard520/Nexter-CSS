(function(){
    const checkbox = document.querySelector('.navigation__checkbox');
    const overlay = document.querySelector('.navigation__overlay');
    const navBtn = document.querySelector('.navigation__button');
	// Select all links in navigation
	const navLinks = document.querySelectorAll('.navigation__link');
	// Select all tabbable elements
	const tabbableElements = document.querySelectorAll('.btn, .btn-text, .footer-nav__link, .copyright__link');

	// Close navigation overlay when link is clicked
	for (const link in navLinks) {
    	navLinks[link].onclick = () => {
    	    checkbox.checked = false;
            changeTabbableElements();
   	    };
    };
    
    // Close overlay when overlay is clicked
    overlay.addEventListener('click', ( () => {checkbox.checked = false} ) );

    // Toggle nav open or closed when pressing Enter key
    navBtn.addEventListener('keypress', ( (e) => {
        if (e.keyCode === 13 && (checkbox.checked)) {
            checkbox.checked = false;
        } else if (e.keyCode === 13 && (!checkbox.checked)) {
            checkbox.checked = true;
        };
    }));

	// Change which elements can get keyboard focus depending on if navigation is open or not
    function changeTabbableElements() {
        // if navigation is open, make nav links tabbable but not page elements
        if (checkbox.checked) {
            for (i = 0; i < tabbableElements.length; i++) {
                tabbableElements[i].setAttribute('tabindex', '-1');
            };
            for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].removeAttribute('tabindex'); 
            };
        // if navigation is closed, make page elements tabbable but not nav links
        } else {
            for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].setAttribute('tabindex', '-1');
            };
            for (i = 0; i < tabbableElements.length; i++) {
                tabbableElements[i].removeAttribute('tabindex');
            };
        };
    }

	checkbox.onchange = ( () => {changeTabbableElements()} );

    changeTabbableElements();
}());