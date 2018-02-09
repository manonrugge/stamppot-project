


// I create my main empty object where my functionality will live inside of
const dish = {};

//dish can be named everything
// using the on method we can listen for when the form has been submitted
//this stops the form in this case from refreshing the page.

dish.events = function () {
   
    $('form').on('radio', function (event) {
        event.preventDefault();
    });

    
    var sweetPotatoIngredients = ['kale', 'spinach'];
    var potatoIngredients = ['kale', 'raw-endive', 'beets'];
    var ingredients = []

    $('.mainIngredient input[name=ingredient]').on('change',function(){
        console.log(this); // this equals the selected ingredient
        const selected = $(this).val();
        
        if (selected === 'potato') {
            $(`.${selected}`).show();
            $(`.sweet-potato`).hide();
            // ingredients = potatoIngredients,
            
        } else if (selected === 'sweet-potato') {
            $(`.${selected}`).show();
            $(`.potato`).hide();
            // ingredients = sweetPotatoIngredients
        };

       console.log(selected)//Array of ingredients

        // $(`.${selected}`).show('potato');
        // $(`.${selected}`).hide('sweet-potato');
        
    });

    // (input[name] === sweet - potato) 
    // var mainIngredient = '.mainIngredient input[name = ingredient]';
}

dish.events ();


// $(.selectedElementIWantToShow’).removeClass(‘hidden’)
// With JS you can use.addClass() and.removeClass()
// Yes, the same for the ingredient
// $(‘.selectedElement).addClass(‘hidden’)


var mainIngredient = '.mainIngredient input[name = ingredient]';

var ingredients = ['kale', 'bacon', 'cheese'];

for (var i = 0; i < ingredients.lenght; i++)
    ingredient = ingredients[i]
	// do something with it




// if (input[name] === potatoes) {
//     ingredients = potatoeIngredients
// } else {
//     ingredients = sweetPotatoesIngredients


//     If(input[name] == potato) { Var ingredients = [‘butter’, ‘egg’] }

// let product = $('select').val();
// foodAhoy.inventory[product] = foodAhoy.inventory[product] - 1;
// $('ul').empty();
// foodAhoy.displayInventory();


