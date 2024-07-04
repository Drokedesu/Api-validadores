$(document).ready(function() {
    $.get('http://fakestoreapi.com/products', function(data) {
        $.each(data, function(i, item) {
            var tarjetaProducto = `
			<div class="col m-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">
				<div class="card" id="carta-producto">
					<img src="${item.image}" class="card-img-top mx-auto d-block" style="height: 240px; width: 240px;">
					<div class="card-body">
						<h5 class="card-title text-center">${item.title}</h5>
						<h5>
							<p class="card-text text-center">
                                <span class="badge text-bg-info">${item.category.toUpperCase()}</span>
							</p>
						</h5>
						<p>${item.description}</p>
					</div>
					<div class="card-footer text-center">
						<button class="btn btn-success mx-2" type="button" id="verFicha${i}"><i class="bi bi-amazon"></i> Ver en Amazon</button>
					</div>
				</div>
			</div>
			`;
            $('#row-contenedor-productos').append(tarjetaProducto);
        });
    });
});
