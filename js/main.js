console.log("hello");

const allThings = [];

function masterBuilder(things) {
	return `
		<div>
			<h2>Things I NEED: ${things.name}</h2>
			<p>WHERE CAN GET: ${things.address}</p>
		</div>
	`;
}

document.querySelector("#saveEntry").addEventListener("click", event => {
	const faveThing = document.querySelector("#faveThings").value;
	const location = document.querySelector("#store").value;
	const things = {
		name: faveThing,
		store: location
	};
	allThings.push(things);
	document.querySelector("#favesList").innerHTML += masterBuilder(things);
	console.log(things);
});
