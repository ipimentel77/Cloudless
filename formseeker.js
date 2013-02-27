function formseeker(){	
	var defaults = {
		
	};
	function loadDefaultConfiguration(){
		$('form').submit(function(event){
			procesarFormulario(this);
			return false;
		});
	}
	function procesarLista(){
	
	}
	
	function procesarFormulario(form){
		var lista = new Array();
		$($(form).find('*')).each(function(index,element){
			var aux = $(element).attr('name');
			if(aux != undefined){
				lista.push(aux);
			}
		});
		procesarLista();
		alert(lista);
	}
	
	loadDefaultConfiguration();
}