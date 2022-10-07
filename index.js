const lookup={
  0: "Hello World",
  1: "Welcome to earth",
  2: "Swagatham",
  3: "Bonjour le monde",
};

export default {
  fetch(request) {
    if (request.method != 'GET'){
      return new Response(request.method + " " + "method is not allowed",{
        headers:{
          'content-type':'application/json',
        },
      });
    }
    else{
      function number(max) {
        return Math.floor(Math.random() * max);
      }
      const num = number(4);
      const ret = num + ":" + lookup[num];
      return new Response(ret,{
        headers:{
        'content-type': 'application/json',
        },
      });
    }
  },
};
