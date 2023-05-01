import { useRef } from "react";

function TouchSensitive() {
	const touchSurfaceRef = useRef(null);

	function handleTouchStart(event) {
		const startX = event.touches[0].clientX;
		const startY = event.touches[0].clientY;
		touchSurfaceRef.current.startX = startX;
		touchSurfaceRef.current.startY = startY;
	}

	function handleTouchMove(event) {
		event.preventDefault();
	}

	function handleTouchEnd(event) {
		const deltaX = event.changedTouches[0].clientX - touchSurfaceRef.current.startX;
		const deltaY = event.changedTouches[0].clientY - touchSurfaceRef.current.startY;
		const swipeDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";

		if (swipeDirection === "horizontal") {
			if (deltaX > 0) {
				// right swipe
				console.log('right swipe')


				touchSurfaceRef.current.style.backgroundColor = "blue";
			} else {
				// left swipe
				console.log('left swipe')


				touchSurfaceRef.current.style.backgroundColor = "green";
			}
		}
	}

	return (
		<div
			className="touch-sensitive"
			ref={touchSurfaceRef}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<h1>ehrduehreuhr</h1>
		</div>
	);
}

export default TouchSensitive;
