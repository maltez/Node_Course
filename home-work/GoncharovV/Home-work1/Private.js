//scoped 
const Color = (function () {
	const _hex = Symbol('hex');
	const _rgb = Symbol('rgb');

	class Color {
  	constructor(hex, rgb) {
    	this[_hex] = hex;
    	this[_rgb] = rgb;
  	}
  
  	get rgb() {
    	return this[_rgb];
  	}
    get hex() {
    	return this[_hex];
    }
	}
  return Color;
})();
const red = new Color('FF0000', '255.0.0');

console.log(red.hex, red.rgb);
console.log(Object.getOwnPropertyNames(red));
console.log(Object.getOwnPropertySymbols(red));
console.log(JSON.stringify(red));
