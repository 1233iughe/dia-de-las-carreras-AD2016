function getProducts() {
    return firebase.database().ref('/products').once('value').then(function(snapshot) {
      var products = snapshot.val();
      console.log(products);
    });
}


getProducts();
