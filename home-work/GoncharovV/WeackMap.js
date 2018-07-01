const Color = (function () {
	let _colors = new WeakMap();
	class Color {
		constructor(name, hex, rgb) {
			this.name = name;
      _colors.set(this, {hex,rgb});
		}
		printHex() {
			console.log(_colors.get(this).hex);
    }
    printRgb() {
			console.log(_colors.get(this).rgb);
    }
	}
  return Color;
})();
const red = new Color('Red','FF0000', '255.0.0');
console.log(red.name);
red.printHex(); 
red.printRgb();
