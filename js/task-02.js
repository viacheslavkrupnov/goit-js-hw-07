// Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию в список 
// ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const  ingredientsListRef = document.querySelector('#ingredients');
// console.log(ingredientListRef);

const createIngredient = ingredient => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = ingredient;
    return listItemRef;
};
const ingredientItemRef = ingredients.map(ingredient =>
    createIngredient(ingredient),
    );
//  console.log(ingredientItemRef);
ingredientsListRef.append(...ingredientItemRef);