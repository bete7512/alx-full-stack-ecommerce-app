// Only change code below this line
class Thermostat{
    constructor(temp){
      this.temperature = temp;
    }
    get getter(){
      return 5/9 * (this.temperature - 32);
    };
    set setter(temp){
      this.temperature = temp * 9.0 / 5 + 32
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  console.log(thermos.temperature);
  thermos.setter = 26;
  console.log(thermos.temperature);
let temp2 = thermos.getter; // 26 in Celsius
console.log(temp2);
  temp = thermos.temperature; // 26 in Celsius