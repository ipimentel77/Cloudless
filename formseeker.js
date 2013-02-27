function formseeker(){	
	var defaults = {
		
	};
	function loadDefaultConfiguration(){
		$('form').submit(function(event){
			procesarFormulario(this);
			return false;
		});
	}
	
	function procesarFormulario(form){
		var lista = new Array();
		$($(form).find('*')).each(function(index,element){
			var aux = $(element).attr('name');
			if(aux != undefined){
				alert('|'+aux+'|');
				lista.push(aux);
			}
		});
		alert(lista);
	}
	
	loadDefaultConfiguration();
}