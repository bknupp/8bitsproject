function mudaCorCutman() {
	$('.capacete').css('background','#646463');
	$('.tronco').css('background', '#E6E6E6');
}

function mudaCorElecman() {
	$('.capacete').css('background','#555555');	
	$('.tronco').css('background','#DEBB58');
}

function mudaCorGutsman() {
	$('.capacete').css('background','#DD5509');
	$('.tronco').css('background','#F1F1F1');
}

function mudaCorFireman() {
	$('.capacete').css('background','#D11C00');
	$('.tronco').css('background','#E3A100');
}

function mudaCorIceman() {
	$('.capacete').css('background','#0038DF');
	$('.tronco').css('background','#E8E9E8');
}
function mudaCorBombman() {
	$('.capacete').css('background','#00A500');
	$('.tronco').css('background','#E5E5E5');
}

function mudaCorMegaman() {
	$('.capacete').css('background','#0171EF');
	$('.tronco').css('background','#39BEFF');
}
/*Mudar cor dinamicamente*/
function mudaCorDinamico(cor_capacete, cor_tronco) {
	$('.capacete').css('background',cor_capacete);
	$('.tronco').css('background', cor_tronco);
}