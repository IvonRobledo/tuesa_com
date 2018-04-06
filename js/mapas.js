$(document).ready(function(){
	$("#mapa_ruta").hide();
	$(".tabs-recorridos").hide();
	var _aux = "";
	var _aux_r = "";

	$(".our-work-container").click(function(){
		$(".tabs-recorridos").hide();
		var rec = $(this).attr("_recorridos");
		//alert(rec);
		if(rec != ""){
			var _file = "kml/" + $(this).attr("_file") + ".kml";	
			if(_aux != _file)
			{
				$("#mapa_ruta").slideUp( "slow", function() {
					$("#"+rec).slideDown( "slow", function() {
					//$(".lbl-recorrido.active-btn").trigger("click");
						$("#tab-content").slideDown("slow", function(){
							_aux = _file;
			  			});
					});
			  	});
			}
			else{
				_aux = "";
				$("#mapa_ruta").slideUp( "slow", function() {
					$("#tab-content").slideUp("slow", function(){
						$("#"+rec).slideUp("slow", function() {
			  			});
			  		});
				});
			}			//$("#tabs-recorridos").show();
		}
		else{
			var _file = "kml/" + $(this).attr("_file") + ".kml";		
			var _lat = $(this).attr("_lat");
			var _lng = $(this).attr("_lng");
			var map;

			function init_map(){
			  	map = new google.maps.Map(document.getElementById("mapa_ruta"), {
			  		center: new google.maps.LatLng(_lat, _lng),
			    	zoom: 13,
			    	mapTypeId: 'roadmap'
			  	});

				var myParser = new geoXML3.parser({map: map, zoom: false});
				myParser.parse(_file);
			}
			if(_aux != _file)
			{
				_aux = _file;
				$("#mapa_ruta").slideDown( "slow", function() {
		    		init_map();
		 		});
			}
			else{
				_aux = "";
				$("#mapa_ruta").slideUp("slow", function() {
		  		});
			}
		}
	});

	$(".lbl-recorrido").click(function(){
		var _file = "kml/" + $(this).attr("_file") + ".kml";
		var _lat = $(this).attr("_lat");
		var _lng = $(this).attr("_lng");
		var map;
		
		function init_map(){
			map = new google.maps.Map(document.getElementById("mapa_ruta"), {
			 	center: new google.maps.LatLng(_lat, _lng),
			    zoom: 13,
			    mapTypeId: 'roadmap'
			});
			
			var myParser = new geoXML3.parser({map: map, zoom: false});
			myParser.parse(_file);
		}
		if(_aux_r != _file)
		{
			$("#mapa_ruta").slideDown( "slow", function() {
				init_map();
				_aux_r = _file;
		  	});
		}
	});
});

function init_map(file_param){
  	map = new google.maps.Map(document.getElementById("mapa_ruta"), {
  		center: new google.maps.LatLng(_lat, _lng),
    	zoom: 13,
    	mapTypeId: 'roadmap'
  	});

	var myParser = new geoXML3.parser({map: map, zoom: false});
	myParser.parse(file_param);
}