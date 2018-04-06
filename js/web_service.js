$(document).ready(function(){
	$("#lbl_correo").hide();
	  $('.form-control').keypress(function(){
      $(this).css("border", "1px solid rgba(100,100,100,0.2)");
  });
});

function validarForm(){
	var error = 0;
    var url = "index.html"; 

	$('.form-control').each(function(i, elem){
        if($(elem).val().trim() == ''){
        	$(elem).css("border", "2px solid rgba(255,0,0,0.5)");
            error++;
        }
    });
    if(error==0 && !isEmail($('#chr_correo').val())){
    	$('#chr_correo').css("border", "2px solid rgba(255,0,0,0.5)");
    		$("#lbl_correo").show();
            error++;
    }
            
    if(error > 0){
    event.preventDefault();
    }
    else{
    	var correoC = $('#chr_correo').val();
		var nombreC = $('#chr_nombre').val();
		var comentarioC = $('#txt_comentario').val();
		var parametros = { action: "guardarComentario", correo: correoC, nombre: nombreC, comentario: comentarioC };
		$.ajax({
		     type: "POST",
		     url: "web_service/funcionalidad.php",
			async: true,
			data: parametros, 
			 success: function(respuesta){
		 		$(location).attr('href',url);
		 	}
		});
    }
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

