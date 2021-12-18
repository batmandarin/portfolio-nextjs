if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function (registration) {
      // Registration was successful``
      console.log("ServiceWorker registration successful");
    })
    .catch(function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed");
    });
}
