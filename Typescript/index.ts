const input1 = document.getElementById('n1') as HTMLInputElement;
const input2 = document.getElementById('n2') as HTMLInputElement;
const button = document.getElementById('btn');

function Add(x: number, y: number){
	return x + y;
}

button.addEventListener('click', ()=>{
	console.log(Add(Number(input1.value), Number(input2.value)));
});