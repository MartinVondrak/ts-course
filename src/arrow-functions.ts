// klasická definice funkce
function createPerson(name: string, age: number): object {
    return {name: name, age: age};
}

// anonymní funkce přiřazená do proměnné, takže se dá jinde normálně volat
const createPersonVar = function (name: string, age: number): object {
    return createPerson(name, age);
}

// arrow funkce s jedním výrazem, klíčové slovo return je zde implicitně, tzn. vrací se výsledek volání funkce createPerson
const createPersonArrow = (name: string, age: number): object => createPerson(name, age)

// arrow funkce s delším kódem, nutné složené závorky a klíčové slovo return
const createPersonArrowDecorator = (name: string, age: number): object => {
    name += " Sr.";
    age += 10;
    return createPerson(name, age)
}

// arrow funkce jsou vždy anonymní

export {createPerson, createPersonVar, createPersonArrow, createPersonArrowDecorator}