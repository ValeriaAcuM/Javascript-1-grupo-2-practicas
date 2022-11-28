  let listaPersonas = []

  const imprimirInformacion = (lista) => {
    const peopleList = document.getElementById('peopleList');
    peopleList.innerHTML = '';
        
    listaPersonas.forEach((persona) => {
      const contenedor = document.createElement('div');
      const Id = document.createElement('h2');
      const firstName = document.createElement('h3');
      const lastName = document.createElement('h3');
      const userAccount = document.createElement('h4');
      const email = document.createElement('p');
      const description = document.createElement('p');


    //PERSONAS
    Id.textContent = `Id: ${persona.Id}`;
    firstName.textContent = `FirstName: ${persona.firstName}`;
    lastName.textContent = `LastName: ${persona.lastName}`;
    userAccount.textContent = `UserAccount: ${persona.userAccount}`;
    email.textContent = `Email: ${persona.email}`;
    description.textContent = `Descripcion: ${persona.descripcion}`;

    contenedor.append(Id, firstName, lastName, userAccount, email, description);

        
    });
}

  const data = {
    Id: 0,
    email: "",
    age: 0,
    userAccount: "",
    firstName: "",
    lastName: "",
    description: "",
    resumen: function () {
      return `Id: ${this.Id}. email: ${this.email}. age: ${this.age}. userAccount: ${this.userAccount}. fisrtName: ${this.firstName}. lastName: ${this.lastName}. description ${this.description} `
  },
    ingresarPersona: function (data) {
      for (let key in data) {
        this[key] = data[key]
      }
    },
  }

  const personaUno = Object.create (data);
  personaUno.ingresarPersona ({
    Id: 7,
    email: "michael.lawson@reqres.in",
    age: 30,
    userAccount: "Premium",
    firstName: "Michael",
    lastName: "Lawson",
    description: "Lorem ipsum"
  });

  const personaDos = Object.create (data);
  personaDos.ingresarPersona ({
    Id: 8,
    email: "lindsay.ferguson@reqres.in",
    age: 78,
    userAccount: "Basic",
    firstName: "Lindsay",
    lastName: "Ferguson",
    description: "Lorem ipsum"
  });

  const personaTres = Object.create (data);
  personaTres.ingresarPersona ({
    Id: 9,
    email: "tobias.funke@reqres.in",
    age: 23,
    userAccount: "Basic",
    firstName: "Tobias",
    lastName: "Funke",
    description: "Lorem ipsum"
  });

  const personaCuatro = Object.create (data);
  personaCuatro.ingresarPersona ({
    Id: 10,
    email: "byron.fields@reqres.in",
    age: 86,
    userAccount: "Basic",
    firstName: "Byron",
    lastName: "Fields",
    description: "Lorem ipsum"
  });

  const personaCinco = Object.create (data);
  personaCinco.ingresarPersona ({
    Id: 11,
    email: "george.edwards@reqres.in",
    age: 30,
    userAccount: "Premium",
    firstName: "George",
    lastName: "Edwards",
    description: "Lorem ipsum"
  });

  const personaSeis = Object.create (data);
  personaSeis.ingresarPersona ({
    Id: 12,
    email: "rachel.howell@reqres.in",
    age: 67,
    userAccount: "Premium",
    firstName: "Rachel",
    lastName: "Howell",
    description: "Lorem ipsum"
  });

  const personaSiete = Object.create (data);
  personaSiete.ingresarPersona ({
    Id: 13,
    email: "adrian.bell@reqres.in",
    age: 54,
    userAccount: "Basic",
    firstName: "Adrian",
    lastName: "Bell",
    description: "Lorem ipsum"
  });

  const personaOcho = Object.create (data);
  personaOcho.ingresarPersona ({
    Id: 14,
    email: "adrian.bell@reqres.in",
    age: 54,
    userAccount: "",
    firstName: "Adrian",
    lastName: "Bell",
    description: "Lorem ipsum"
  });

  listaPersonas.push(personaUno)
  listaPersonas.push(personaDos)
  listaPersonas.push(personaTres)
  listaPersonas.push(personaCuatro)
  listaPersonas.push(personaCinco)
  listaPersonas.push(personaSeis)
  listaPersonas.push(personaSiete)
  listaPersonas.push(personaOcho)