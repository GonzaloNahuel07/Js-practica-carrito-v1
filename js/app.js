const frutas = [];
const fruta = promptt('Bienvenido! ¿Que fruta desea comprar?');

frutas.push(fruta);

while(confirm('¿Desea agregar otra fruta al carrito?')) {
    const fruta = prompt('¿Que fruta desea comprar?');
    frutas.push(fruta);
}

console.log('Usted compro: ');
for(let fruta of frutas) {
    console.log(fruta);
}
