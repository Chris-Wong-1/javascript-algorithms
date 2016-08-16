var test = [2, 18, 6, 21, 7, 9, 3]

function bubbleSort(array) {
	var swapped;
	do {
		swapped = false;
		for (var i=0; i < array.length-1; i++) {
			if (array[i] > array[i+1]) {
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}

bubbleSort(test);
console.log(test);