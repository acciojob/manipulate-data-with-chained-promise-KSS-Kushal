//your JS code here. If required.
const arr = [1,2,3,4];
const outputHTML = document.getElementById('output');

const calculate = () => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(arr.filter(a => a%2==0));
		}, 1000);
	})
}

const calculate2 = (arr1) => {
	return new Promise((resolve, reject)=>{
		const newArr = arr1.map(v => (v*2))
		setTimeout(()=>{
			resolve(newArr);
		}, 2000);
	})
}

calculate().then((data)=>{
	outputHTML.textContent = data;
	calculate2(data).then((data2)=>{
		outputHTML.textContent = data2;
		})
});