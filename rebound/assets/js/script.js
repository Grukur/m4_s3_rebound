

/* array de productos seleccionados, funciona como contador tambien */
let bIngridients = [];

/* actua sobre cada seleccion de checkbox (ingredientes) */
$('input').on('click', function () {
    /* actuamos sobre los input checked */
    if ($(this).prop('checked')) {
        adding(this.value)
    /* al eliminar productos al desmarcar */
    } else if (!$(this).prop('checked')) {
        removing(this.value)
    }
})

/* adiciona selecciones */
const adding = (data)=>{
    bIngridients.push(data)
        if(bIngridients.length>3){
            let sum = (bIngridients.length-3)*800
            $('#extraCash').text(`$${sum}`)
            $('#bIngridients').text(`${bIngridients} `)
            $('#eIngridients').text(`${bIngridients.slice(3)} `)
        }else{
            $('#bIngridients').text(`${bIngridients} `)
        }
}

/* elimina selecciones */
const removing = (data)=>{
    bIngridients = bIngridients.filter(ing => ing != data)
        if(bIngridients.length>=3){
            let sum = (bIngridients.length-3)*800
            $('#extraCash').text(`$${sum}`)  
            $('#bIngridients').text(`${bIngridients} `)    
            $('#eIngridients').text(`${bIngridients.slice(3)} `)      
        }else{
            $('#eIngridients').text(``)
            $('#bIngridients').text(`${bIngridients} `)  
        }
}

/* al hacer click dentro de dar propina, agrega por default 1.000 */
const start = ()=>{
    $('#tip').text(`$1000`)
}

/* actualiza la propina segun keypressing */
const keyPress = ()=>{
    $('#tip').text(`$${$('#tipInput').val()}`)
}

/* dispara los alert al dar click en el boton */
$('button').on('click', function(){
    if($('#tipInput').val() >0){
        alert(`Su propina de $${$('#tipInput').val()} ha sido enviada`)
    }else{
        alert(`Aún no ha definido una propina`)
    }
})








