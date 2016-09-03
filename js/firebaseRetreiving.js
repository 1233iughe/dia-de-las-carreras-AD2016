function getProducts() {
    return firebase.database().ref('/products').once('value').then(function(snapshot) {
      var products = snapshot.val();
      jQuery.each( products, function( i, val ) {
          $( "#products" ).append('<div class="ui fluid card"><div class="image"><img src="'+val.imageUrl+'" alt="'+val.nombre+'" /></div><div class="content"><div class="header">'+val.nombre+'</div><p>'+val.precio+'</p><p>'+val.descripcion+'</p><form action="/charge" method="POST"><script src="https://checkout.stripe.com/checkout.js"class="stripe-button"data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"data-image="/img/icon.png"data-name="ISC Online Store"data-description="'+val.nombre+' ($'+val.precio+')"data-amount="'+val.precio*100+'"></script></form></div></div>');
        });
    });
}
getProducts();
