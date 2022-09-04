addEventListener('fetch', event => {
  const data = {
    success: true,
    worker_location: "FRANCE PARIS",
  };


  const json = JSON.stringify(data, null, 2);


  return event.respondWith(
    new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  );

});
