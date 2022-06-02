  // Codigo para la navegacion en la misma pagina
  var MainContainerAboutMe = document.getElementById("MainContainerAboutMe");
  var MainContainerTeachSkills = document.getElementById("MainContainerTeachSkills");
  var MainContainerExperience = document.getElementById("MainContainerExperience");
  var MainContainerContactme = document.getElementById("MainContainerContactme");
  var Inicio = document.getElementById("particles-js");



  function navegateTo(place) {
      if (place == "About me") {
          console.log("ir a about me");
          MainContainerAboutMe.scrollIntoView();
      } else if (place == "Teach Skills") {
          console.log("ir a Teach Skills");
          MainContainerTeachSkills.scrollIntoView();
      } else if (place == "Experience") {
          console.log("ir a Experience");
          MainContainerExperience.scrollIntoView();
      } else if (place == "Contact me") {
          console.log("ir a contact me");
          MainContainerContactme.scrollIntoView();
      } else if (place == "particles-js") {
          console.log("ir a Inicio");
          Inicio.scrollIntoView();
      } else {
          console.log("Error navegacion no valida" + place);
      }

  }


  // Funcion para en envio de correo electronico automatico
  function sendMail() {
      var link = "mailto:cesarfdez_-_@hotmail.com" +
          "?" +
          "&subject=" + encodeURIComponent("Me gustaria contactarme con usted") +
          "&body=" + encodeURIComponent("Buen dia me gustaria comunicarle que ");

      window.location.href = link;
  }

  //   Libreria Typed Configuracion
  var typed = new Typed('.typed', {
      strings: ["Junior Front End Developer.", "Computer Systems Engineering", "Master's Student", "Junior Mobile Developer"],
      typeSpeed: 30,
      backDelay: 1500,
      backSpeed: 30, // Velocidad en milisegundos para borrrar una letra,
      cursorChar: '',
      loop: true,
      loopCount: false,
      showCursor: true,
  });