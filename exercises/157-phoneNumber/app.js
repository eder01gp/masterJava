function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string = this.parenthesize(this.getAreaCode())+" "+this.getExchangeCode()+"-"+this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  this.areacode = this.slicing(0, 3);
  return this.areacode;
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  this.exchangecode = this.slicing(3, 6);
  return this.exchangecode;
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  this.linenumber = this.slicing(6, 10);
  return this.linenumber;
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slicing = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let phoneNumber157 = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);

console.log(phoneNumber157.render());