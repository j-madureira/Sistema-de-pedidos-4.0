//Boas vindas ao cliente
alert(`Bem vindo ao sistema de pedidos bacanca!`);

//Recebendo o nome do cliente
var nome;
var nomeChance = 1;

if(nome = prompt(`Digite seu nome:`)){
    alert(`${nome}, agora só falta o cadastro!`);
}
else{
    while(nome == "", nomeChance <2 ){
    alert(`Você ainda não informou seu nome, insira para o
    cadastro`);
    if(nome = prompt(`Digite seu nome para continuar`)){
    alert(`${nome}, agora só falta o cadastro!`)
    ++nomeChance;    
}
}
}

//Cadastro Cliente
var nomeUsuarioChances = 1;
var nomeUsuario;

if(nomeUsuario = prompt(`Crie seu nome de usuário:`)){
    alert(`Tudo certo, agora falta sua senha!`);
}
else{
    while(nomeUsuario == "", nomeUsuarioChances < 2){
    alert(`Você ainda não criou seu nome de usuário!`);
    if(nomeUsuario = prompt(`Crie seu nome de usuário:`)){
    alert(`Tudo certo, agora falta sua senha!`);
    ++nomeUsuarioChances;
}
}
}

var senhaUsuarioChances = 1;
var senhaUsuario;

if(senhaUsuario = prompt(`Crie sua senha para login:`)){
    alert(`Tudo certo, agora você pode fazer login!`);
}
else{
    while(senhaUsuario == "", senhaUsuarioChances < 2){
    alert(`Você ainda não criou sua senha!`);
    if(senhaUsuario = prompt(`Crie sua senha:`)){
    alert(`Tudo certo, agora você pode fazer login!`);
    ++senhaUsuarioChances;
}
}
}
//Login
var nomeUsuarioLoginChances = 1;
var nomeUsuarioLogin = prompt(`Digite seu nome de usuário`);
if(nomeUsuarioLogin == nomeUsuario){
   alert(`Agora, sua senha`);
}
else{
    while(nomeUsuarioLogin != nomeUsuario && nomeUsuarioLoginChances < 2){
    alert(`Seu nome de usuário está incorreto, tente novamente!`)
    nomeUsuarioLogin = prompt(`Digite seu nome de usuário:`)
    if(nomeUsuarioLogin == nomeUsuario){
    alert(`Agora, sua senha`);
    ++nomeUsuarioLoginChances;
}
}
}

var senhaUsuarioChances = 1;
var senhaUsuarioLogin = prompt(`Digite sua senha:`);
if(senhaUsuarioLogin == senhaUsuario){
    alert(`Login feito com sucesso!`);
    console.log(`O usuário ${nome}, está conectado ao sistema`);
    var pedidoLanche = prompt(`Peça um lanche:`);
    var pedidoBebida = prompt(`Peça um refrigerante para acompanhar seu lanche!`);
    var pedidoSobremesa = prompt(`Peça uma sobremesa para acompanhar seu lanche e seu refrigerante:`);
}
else{
    while(senhaUsuarioLogin != senhaUsuario && senhaUsuarioChances < 2){
    alert(`Sua senha está incorreta, tente novamente!`);
    senhaUsuarioLogin = prompt(`Digite sua senha:`);
    if(senhaUsuarioLogin == senhaUsuario){
    alert(`Login feito com sucesso!`);
    console.log(`O usuário ${nome}, está conectado ao sistema`);
    var pedidoLanche = prompt(`Peça um lanche:`);
    var pedidoBebida = prompt(`Peça um refrigerante para acompanhar seu lanche!`);
    var pedidoSobremesa = prompt(`Peça uma sobremesa para acompanhar seu lanche e seu refrigerante:`);
    ++senhaUsuarioChances;
}
}
}

//Localização do Cliente

var cidadeCliente = prompt(`Informe sua cidade para a entrega`);
var bairroCliente = prompt(`Informe seu bairro para a entrega`);
var ruaCliente = prompt(`Informe a sua rua para a entrega:`);
var numeroCasa = prompt(`Informe o número da sua casa para a entrega`);
alert(`Tudo certo com seu pedido ${nome}, seu pedido está saindo para entrega ^^`)

//Informando ao sistema o pedido do cliente para a entrega
console.log(`O cliente ${nome}, fez um pedido: \n
Um ${pedidoLanche}, um refrigerante: ${pedidoBebida} e uma sobremesa: ${pedidoSobremesa} \n
Entregar em, cidade: ${cidadeCliente}, bairro: ${bairroCliente}\n
rua: ${ruaCliente}, Nº: ${numeroCasa}`);

