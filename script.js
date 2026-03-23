//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async (e) => {
	e.preventDefault();
	const desc = document.getElementById('text').value.trim();
	const timeDelay = document.getElementById('delay').value;

	if(desc === ""){
		return;
	}
	
	await sleepTime(timeDelay);

	document.getElementById("output").innerHTML = `${desc}`;
})

const sleepTime = (del = 0) => {
	return new Promise((res, rej) => {
		setTimeout(res, del)
	})
}