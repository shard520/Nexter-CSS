// Select all like buttons on Home Cards and toggle liked status on click
(function() {
	const likeBtns = document.querySelectorAll(".home__like");

	for (i = 0; i < likeBtns.length; i++) {
		likeBtns[i].addEventListener('click', ( (e) => { toggleLike(e) }));
	};

	function toggleLike(e) {
		const clickedBtn = e.currentTarget;
		if (clickedBtn.classList.contains('home__like--liked')) {
			clickedBtn.classList.remove('home__like--liked');
		} else {
			clickedBtn.classList.add('home__like--liked');
		};
	}
})();