import pako from 'pako';

//----------
function ab2str(buf){
	return String.fromCharCode.apply(null, new Uint16Array(buf));
};
function str2ab(str){
	var array = new Uint8Array(str.length);
	for(var i = 0; i < str.length; i += 1)array[i] = str.charCodeAt(i);
	return array.buffer;
};

function unpackData(str){
	try{
		return JSON.parse(pako.inflate(str2ab(atob(str)), {to: 'string'}));
	}catch(err){
		console.error(err);
	}
	return false;
};

export default unpackData;
