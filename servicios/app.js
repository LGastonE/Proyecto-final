let seleccionar = document.querySelector('#actividad');
let parrafo = document.querySelector('p');
let titulo = document.querySelector('h2');
var micarrusel = {};

micarrusel = [
    { imageurl: "cabalgatas.jpg", titulo: "Cabalgatas en Mendoza:", desc: "Tenemos todo organizado para realizar una cabalgata de día completo. Donde exploraremos gran parte del cordón montañoso conocido como pre-cordillera.Andar a caballo es una sensación hermosa. Si a esta actividad ancestral le sumamos el magnífico escenario la recompensa esta asegurada: múltiples vistas panorámicas hacia los cuatro puntos cardinales, silencio perpetuo y abruptas quebradas surcadas por arroyos producidos por deshielos. Al final del recorrido se culmina con un asado en la montaña." }
    , { imageurl: "Mountain-bike-en-Mendoza.jpg", titulo: "Foto #2" }
    , { imageurl: "rafting.jpg", titulo: "Foto #3" }
    , { imageurl: "traking mza.jpg", titulo: "Foto #4" }];

seleccionar.addEventListener('change', informacionActividad);

function informacionActividad() {
    let eleccion = seleccionar.value;
    titulo.textContent = '';

    if (eleccion === 'cabalgata') {
        titulo.textContent = micarrusel[0].titulo
        parrafo.textContent = micarrusel[0].desc;
        document.thumb.src = micarrusel[0].imageurl;
    } else if (eleccion === 'traking') {
        parrafo.textContent = 'En Potrerillos practicamos escalada, rapel, tirolesa y trekking en una reserva ubicada al pie de la cordillera. Un sitio ideal para vivir la aventura a cada instante. Con la ayuda de los guias podran disfrutar de una experiencia para el recuerdo. ¡Animate!';
        document.thumb.src = micarrusel[1].imageurl;
    } else if (eleccion === 'bicicleta') {
        parrafo.textContent = 'Ciclismo y Mountain-bike: Si uno quiere recorrer, llegar a rincones escondidos, vivir la aventura o estar en contacto directo con la naturaleza, no hay nada mejor que una excursión en bicicleta. Para los amantes de los paseos en bici tenemos salidas para recorrer bodegas (caminos del vino) y circuitos de Mountain-bike llenos de retos.';
        document.thumb.src = micarrusel[2].imageurl;
    } else if (eleccion === 'rafting') {
        parrafo.textContent = 'Rafting por el río Mendoza: El río Mendoza, que es catalogado como de clase 3 durante todo el año y asciende a clase 4 en los meses de verano, dibuja verdaderos paisajes de película para quienes quieran vivir emociones diferentes.Contamos con guias altamente capacitados los cuales brindan una charla de seguirdad antes de cada partida. Los mismos controlan que el equipo de protección se encuentre bien colocado en todos los pasajeros. El rafting se ha convertido en uno de los deportes preferidos de los amantes de la aventura y el aire libre.';
        document.thumb.src = micarrusel[3].imageurl;
    }else if(eleccion==='selec'){
        parrafo.textContent='';  
        document.thumb.src=''
     }
    
}








