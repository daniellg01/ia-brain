    
        var modelo = null;
    
        (async() => {
          console.log("Cargando modelo...");
          modelo = await tf.loadLayersModel("./model.json");
          console.log("Modelo cargado");
        })();
    
