	$('#target').submit(function() {
		var tamanho = $("input").val();
		tamanho = tamanho+'px';
		$('.minimo').css('width',tamanho);
		redimensiona();
		return false;
});

function redimensiona() {
	//var tamanho = $('.minimo').css('width');
	var tamanho = 10;
	var tamanho2 = tamanho*2+'px !important';
	var tamanho3 = tamanho*3+'px !important';
	var tamanho4 = tamanho*4+'px !important';
	var tamanho5 = tamanho*5+'px !important';
	var tamanho6 = tamanho*6+'px !important';
	var tamanho7 = tamanho*7+'px !important';
	var tamanho8 = tamanho*8+'px !important';
	var tamanho9 = tamanho*9+'px !important';
	var tamanho10 = tamanho*10+'px !important';
	$('.blocosMegaman').css('width',tamanho+'px');
	$('.blocosMegaman').css('height',tamanho+'px !important');
	$('.width60').css('width',tamanho2);
	$('.width90').css('width', tamanho3);
	$('.width120').css('width', tamanho4);
	$('.width150').css('width', tamanho5);
	$('.width180').css('width', tamanho6);
	$('.width210').css('width', tamanho7);
	$('.width240').css('width', tamanho8);
	$('.width270').css('width', tamanho9);
	$('.left30').css('left', tamanho);
	$('.left60').css('left', tamanho2);
	$('.left90').css('left', tamanho3);
	$('.left120').css('left', tamanho4);
	$('.left150').css('left', tamanho5);
	$('.left180').css('left', tamanho6);
	$('.left210').css('left', tamanho7);
	$('.left240').css('left', tamanho8);
	$('.left270').css('left', tamanho9);
	$('.left300').css('left', tamanho10);
}

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