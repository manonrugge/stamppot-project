// I create my main empty object where my functionality will live inside of
//dish can be named everything

const dish = {};

const recipes = {
    beets : {
        title: "Stamppot Beets and Smoked Sausage",
        ingredients: ["1 kilo potatoes", "bunch fresh kale", "2 onions chopped", "50g butter"],
        illustrations: "images/tools_white.svg",
        photo: "images/recipe-03.jpg",
        direction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias delectus repellendus! Cupiditate delectus optio velit dolore harum, possimus quis asperiores, cum et id impedit? Aliquam accusantium voluptates deserunt et?"
    },
    kale : {
        title: "Stamppot Kale and Smoked Sausage",
        ingredients: ["1 kilo potatoes", "bunch fresh kale", "2 onions chopped", "50g butter"],
        illustrations: "images/tools_white.svg",
        photo: "images/recipe-03.jpg",
        direction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias delectus repellendus! Cupiditate delectus optio velit dolore harum, possimus quis asperiores, cum et id impedit? Aliquam accusantium voluptates deserunt et?"
    },   

};

function createCarouselCell(recipeIngredient) {

    var title = $('<h2>').text(recipes[recipeIngredient].title)
    
    var ingredientArray = recipes[recipeIngredient].ingredients
    
    var ingredientsList = $('<ul>') 
    
    for (let ind = 0; ind < ingredientArray.length; ind = ind + 1) {
        $('<li>').text(ingredientArray[ind]).appendTo(ingredientsList);
    } 

    var recipeIngredients = $('<div>').addClass('recipe-ingredients').append('<h4>Ingredients</h4>', ingredientsList)
    
    var illustrations = $('<img>').attr("src", recipes[recipeIngredient].illustrations);
    
    var recipeIllustration = $('<div>').addClass('recipe-illustrations').append('<h4>Tools</h4>', illustrations)

    var subInfoContainer = $('<div>').addClass('recipe-container wrapper').append(recipeIngredients, recipeIllustration);

    var recipePhoto = $('<div>').addClass('recipePhoto').append($('<img>').attr("src", recipes[recipeIngredient].photo));
    
    var direction = $('<p>').text(recipes[recipeIngredient].direction)
    
    var recipeMethod = $('<div>').addClass('recipe-method').append('<h4>Directions</h4>', direction);

    var infoContainer = $('<div>').addClass('recipe-info wrapper').append(recipePhoto, recipeMethod);
    
    var carouselCell = $('<div>').addClass('carouselCell').append(title, subInfoContainer, infoContainer);

    $('.main-carousel').append(carouselCell);

};

function carousel() {
    $('.main-carousel').flickity({
        wrapAround: true,
        cellSelector: '.carouselCell'
    });
}


dish.events = function () {
   
    $('form').on('radio', function (event) {
        event.preventDefault();
        //this stops the form in this case from refreshing the page.
    });

    var ingredients = []

    $('input[name=ingredient]').on('change',function(){
       
        const selected = $('input[name=ingredient]:checked').val();

        $(`.${selected}`).removeClass('secHidden');        
        $(`.secIngredient`).removeClass('hidden');
        if (selected === 'potato') {
            $(`.mainIngredient .sweet-potato`).addClass('hidden');
            // $('ul').append(`<li> <span class="fa fa-square-o"></span> ${toDoItem} </li>`);
            // $('input').val('');
        } else {
            $(`.mainIngredient .potato`).addClass('hidden');
        }
        ingredients.push(selected);

        $('html').animate({
            scrollTop: $('.secIngredient').offset().top
        });
    });

    $('input[name=secIngredient]').on('change',function(){
        const nextSelected = $('input[name=secIngredient]:checked').val();
        if (nextSelected === 'kale') {
            $(`.vegetable`).addClass('hidden'),
            $(`.kale`).removeClass('hidden'),
            $(`.toppings`).show('slow')
            $(`.toppings .kale-toppings`).show();
        } else if (nextSelected === 'beets') {
            $(`.vegetable`).addClass('hidden'),
            $(`.beets`).removeClass('hidden')
            $(`.toppings`).show('slow')
            $(`.toppings .beets-toppings`).show();
        } else if (nextSelected === 'raw-endive') {
            $(`.vegetable`).addClass('hidden'),
            $(`.raw-endive`).removeClass('hidden')
            $(`.toppings`).show('slow')
            $(`.toppings .raw-endive-toppings`).show();
        } else if (nextSelected === 'spinach'){
            $(`.vegetable`).addClass('hidden'),
            $(`.spinach`).removeClass('hidden')
            $(`.toppings`).show('slow')
            $(`.toppings .spinach-toppings`).show();
        } else {
            $(`.vegetable`).addClass('hidden'),
            $(`.sprouts`).removeClass('hidden')
            $(`.toppings`).show('slow')
            $(`.toppings .sprouts-toppings`).show();
        };

        $('html').animate({
            scrollTop: $('.toppings').offset().top
        });



        ingredients.push(nextSelected); 
        
    });

    $('input[name=toppings]').on('change', function () {
        const finalSelection = $('input[name=toppings]:checked').val();
        console.log(finalSelection)

        if (finalSelection === 'beets-toppings') {
        $(`.result-recipe`).removeClass('hidden')
            createCarouselCell("beets");
            createCarouselCell("kale");
     
        } else if (finalSelection === 'kale-toppings') {
            createCarouselCell("kale");


        } else if (finalSelection === 'raw-endive-toppings') {

        } else if (finalSelection === 'spinach-toppings') {

        } else {

        };

        carousel()

    });
}



dish.events ();









// $(.selectedElementIWantToShow’).removeClass(‘hidden’)
// With JS you can use.addClass() and.removeClass()
// Yes, the same for the ingredient
// $(‘.selectedElement).addClass(‘hidden’)


// var mainIngredient = '.mainIngredient input[name = ingredient]';

// var ingredients = ['kale', 'bacon', 'cheese'];

// for (var i = 0; i < ingredients.lenght; i++)
//     ingredient = ingredients[i]
// 	// do something with it




// if (input[name] === potatoes) {
//     ingredients = potatoeIngredients
// } else {
//     ingredients = sweetPotatoesIngredients


//     If(input[name] == potato) { Var ingredients = [‘butter’, ‘egg’] }

// let product = $('select').val();
// foodAhoy.inventory[product] = foodAhoy.inventory[product] - 1;
// $('ul').empty();
// foodAhoy.displayInventory();


//But what you can do to, if you can select all of them in JS and add autocomplete to all of them on page init 

//but if you want to remove or add a class, you need to select the element
//try to console.log the lement itself to see if you are targetting the correct one
//so you have to think on a few things while targeting element with JS
//if you want to add a class, remove a class, add an effect, you need to get the element.
//but to target them, you need to exact name of the selector in JS
//if it's class, and my class is topping, if I do $(".toppings"), JS will look for the exact selector so it will not work
//It the same for the value, you want to target the exact element, but this time to apply another method.val() to get the value, instead of.addClass, .removeClass, .fadeIn()
// when you use it, always think of what is the element and what it's the best attribute to use


//elementIWantToShow.show(optionOnHowIWantToShow)