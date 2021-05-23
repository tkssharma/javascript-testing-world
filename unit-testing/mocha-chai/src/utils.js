const removeDuplicates = (array) => {
  if(!array) {
    return null;
  }
  if(Array.isArray(array)) {
    return [...new Set(array)];
  }
}

const  stringReverse = (input) => {
	let result = "";
	input = input.toString();
	for (let i = input.length-1; i >= 0; i--) {
  	result += input[i];
	}
	return result;
}

const isSeparator = (char) => {
	let allSeparators = " ,.:;!?¡¿&%/^*+-_<>\v\f\r\n\t\\";
	if (allSeparators.includes(char)) {
		return true;
	}
	return false;
}


module.exports = { removeDuplicates, stringReverse, isSeparator  };