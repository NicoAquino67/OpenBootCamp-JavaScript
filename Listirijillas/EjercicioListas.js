const shoppingList = [
    "pan",
    "leche",
    "pollo",
    "huevos",
    "lubricante"
]
shoppingList.push("Aceite de Girasol");
console.log(shoppingList);
shoppingList.pop()
console.log(shoppingList);

const favMovies = [ {
        Titulo: "Batman: the Dark Knight",
        Estreno: 2008,
        Director: "Christopher Nolan"
    }, {
        Titulo: "Interstellar",
        Estreno: 2014,
        Director:"Christopher Nolan"
    }, {
        Titulo: "Inception",
        Estreno: 2010,
        Director:"Christopher Nolan"
    }
]

const favFilterMovies = favMovies.filter(filter => filter.Estreno >= 2010);
console.log(favFilterMovies);


const MoviesDirectors = favMovies.map(dir => dir.Director);
console.log(MoviesDirectors);


const MoviesTitles = favMovies.map(dir => dir.Titulo);
console.log(MoviesTitles);

const dirAndTitles = MoviesDirectors.concat(MoviesTitles);
console.log(dirAndTitles);

const dirAndTitlesProp = [...MoviesDirectors, ...MoviesTitles]
console.log(dirAndTitlesProp);