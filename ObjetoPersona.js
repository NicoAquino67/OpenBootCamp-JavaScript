const hoy = new Date();
const listaPersona = {
  name: "Nicolas",
  secondName: "Andres",
  Surname: "Anriquez",
  birthday: {
    BirthMonth: "may",
    BirthDate: "23",
    BirthYear: "1997",
  },
};
listaPersona.age = hoy.getFullYear() - listaPersona.birthday.BirthYear;

listaPersona.FavoriteBooks = {
  SevenHabits: {
    titulo: "Los 7 habitos de la gente altamente efectiva",
    autor: "Stephen R. Corvey",
    Anio: "1989",
    link: "https://www.amazon.com/-/es/Stephen-R-Covey/dp/6079377063/ref=sr_1_1?keywords=7+habitos+de+la+gente+altamente+efectiva&qid=1672045350&sprefix=7+habitos,aps,328&sr=8-1",
  },
  RichPoor: {
    titulo: "Padre Rico, Padre Pobre",
    autor: "Robert T. Kiyosaki",
    Anio: "1997",
    link: "https://www.amazon.com/-/es/Robert-T-Kiyosaki/dp/1945540826/ref=sr_1_1?keywords=padre+rico+padre+pobre&qid=1672045603&sprefix=padre+%2Caps%2C524&sr=8-1",
  },
  Potter: {
    titulo: "Harry Potter Collection",
    autor: "J. K. Rowling",
    Anio: "1997",
    link: "https://www.amazon.com/-/es/Harry-Potter-colecci%C3%B3n-completa-Rowling/dp/B01GFIZG68/ref=sr_1_17?keywords=harry+potter+collection&qid=1672045853&sprefix=harry+potter+colle%2Caps%2C282&sr=8-17",
  },
};
console.log("listaPersona :>> ", listaPersona);
