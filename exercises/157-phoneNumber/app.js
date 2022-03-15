function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  this.areacode = this.slicing(0, 2);
  return this.areacode;
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  this.exchangecode = this.slicing(3, 5);
  return this.exchangecode;
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  this.linenumber = this.slicing(6, 8);
  return this.linenumber;
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slicing = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let phoneNumber157 = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);


console.log(typeof(phoneNumber157.getAreaCode()));