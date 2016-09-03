function writeNewProduct(name, price, description, photo = 'http://lorempixel.com/400/200') {
  // A post entry.
  var productData = {
    nombre: name,
    precio: price,
    descripcion: description,
    imageUrl: photo,
  };

  // Get a key for a new Product.
  var newProductKey = firebase.database().ref().child('products').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/products/' + newProductKey] = productData;


  return firebase.database().ref().update(updates);
}
