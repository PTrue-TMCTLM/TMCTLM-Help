function RNG(seed) {
    // constantes de GCC
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;
  
    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
  }
function genPass(){
  RNG.prototype.nextInt = function() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
  }
  RNG.prototype.nextFloat = function() {
    // en el rango [0,1]
    return this.nextInt() / (this.m - 1);
  }
  RNG.prototype.nextRange = function(start, end) {
    // en el rango [inicio, fin)
    var rangeSize = end - start;
    var randomUnder1 = this.nextInt() / this.m;
    return start + Math.floor(randomUnder1 * rangeSize);
  }
  RNG.prototype.choice = function(array) {
    return array[this.nextRange(0, array.length)];
  }
  
  var contraseñas = [];
  
  var rng = new RNG(20);
  var caracteres = "abcdefghijkmnpqrtuvwxyz2346789".split('');
  for (var w = 0; w < 330; w++) {
    var contraseña = "";
    for (var i = 0; i < 30; i++) {
      contraseña += rng.choice(caracteres);
    }
    contraseñas.push(contraseña);
  }
  console.log(contraseñas);
}