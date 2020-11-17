
function validaForm(){
	
	
	if(document.frminscricao.participar.checked==false){
		alert("Check o campo Participar.");
		document.frminscricao.participar.focus();
		return false;
	}
	
	var nome = document.frminscricao.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	
	if (!expRegNome.test(nome)) {
		alert("Preencha o campo Nome corretamente.");
		document.frminscricao.txtnome.focus();
		return false;
	}
	
	if (document.frminscricao.gender.value =="") {
		alert("Preencha o campo Gênero.");
		document.frminscricao.gender.focus();
		return false;
	}
	
	var data = document.frminscricao.textdatanasc.value;
	var expRegData = new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$");
	if (!expRegData.test(data)) {
		alert("Preencha o campo Data corretamente.")
		document.frminscricao.textdatanasc.focus();
		return false;
	
	}
	
	var email = document.frminscricao.txtemail.value;
	var expRegEmail = new RegExp("^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$");
	if (!expRegEmail.test(email)) {
		alert("Preencha o campo Email corretamente.");
		document.frminscricao.txtemail.focus();
		return false
		
	}
	
	if (document.frminscricao.txtemail.value=="") {
		alert("Preencha o campo E-mail.");
		document.frminscricao.txtemail.focus();
		return false;
	}
	
	var fone = document.frminscricao.txtfone.value;
	var expRegFone= new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if (!expRegFone.test(fone)) {
		alert("Preencha o campo Telefone corretamente.");
		document.frminscricao.txtfone.focus();
		
		return false;
	}
	
	
	return true;
	
	

}//Fim função validaForm

//Assim que o documento HTML for carregado por completo..

$(document).ready(function(){
	//Carrega cabeçalho, menu e rdoapé aos respectivos locais
	$("header").load("/projetoFaClube/pages/site/general/cabecalho.html");
	$("nav").load("/projetoFaClube/pages/site/general/menu.html");
	$("footer").load("/projetoFaClube/pages/site/general/rodape.html");
});
