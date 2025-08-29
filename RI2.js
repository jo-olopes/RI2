function Cliente(nome, telefone, endereco) {
  this.nome = nome;
  this.telefone = telefone;
  this.endereco = endereco;

  this.getNome = function() { return this.nome; };
  this.setNome = function(n) { this.nome = n; };

  this.getTelefone = function() { return this.telefone; };
  this.setTelefone = function(t) { this.telefone = t; };

  this.getEndereco = function() { return this.endereco; };
  this.setEndereco = function(e) { this.endereco = e; };

  this.getNomeUpper = function() { return this.nome.toUpperCase(); };
  this.getNomeLower = function() { return this.nome.toLowerCase(); };

  this.getInfo = function() {
    return `Cliente: ${this.nome}, Telefone: ${this.telefone}, Endereço: ${this.endereco}`;
  };
}

function Telefone(ddd, numero) {
  this.ddd = ddd;
  this.numero = numero;

  this.getTelefone = function() { return `(${this.ddd}) ${this.numero}`; };
}

function Endereco(rua, numero, cidade) {
  this.rua = rua;
  this.numero = numero;
  this.cidade = cidade;

  this.getEndereco = function() {
    return `${this.rua}, ${this.numero} - ${this.cidade}`;
  };
}

function ordenarClientesPorNome(clientes) {
  return clientes.slice().sort(function(a, b) {
    return a.getNome().localeCompare(b.getNome());
  });
}

let tel1 = new Telefone("11", "9999-1111");
let end1 = new Endereco("Rua A", 123, "São Paulo");

let tel2 = new Telefone("21", "8888-2222");
let end2 = new Endereco("Av. B", 456, "Rio de Janeiro");

let cliente1 = new Cliente("Carlos", tel1.getTelefone(), end1.getEndereco());
let cliente2 = new Cliente("Ana", tel2.getTelefone(), end2.getEndereco());

console.log(cliente1.getInfo());
console.log(cliente2.getInfo());

console.log(cliente1.getNomeUpper());
console.log(cliente2.getNomeLower());

let lista = [cliente1, cliente2];
let ordenada = ordenarClientesPorNome(lista);

console.log("Ordenados:");
for (let c of ordenada) {
  console.log(c.getInfo());
}
