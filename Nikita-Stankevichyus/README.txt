Greetings!
Welcome to "OOP Prototype" browser application.
------------------------------------------------------------------------------------------------------------------------------------------------------------

This application uses browserify utilite to form bundle from all JavaScript files via 'browserify' CLI command.
It was meant to implement gulp and SASS into project, but it didn't work out yet.


Terms:

static element -- which is rendered regardless of application state (hard-coded into html file).
dynamic element -- which rendering depends on application state.


Documentation:

1. file-dependencies.svg -- diagramm of file dependencies in SVG format.
2. class-object-relations.svg -- diagramm of class and object relations in SVG format.



File structure:

index.css -- basic (spaghetti) css code. Some styles beyond bootstrap functionality.
index.html -- basic html template with hard-coded static elements and storaged dynamic ones (lodash templates).
index.js -- defines two polyfills directly in prototypes (String and Array). Sets Select-Option vidget.
bundle.js -- file generated via 'browserify' CLI command. That is the file (not index.js) included into index.html.

  src/javascript:
    abstract_class_food.js -- prototype object for all FOOD heirs. Define mosts methods and contains "databases" for prices and calories.
    class_drink.js -- extends FOOD class via prototype. Constructor for Drink objects.
    class_hamburger.js -- contains two constructors: for Stuffing objects and Hamburger objects. Both extend FOOD class via prototype.
    class_salad.js -- extends FOOD class via prototype. Constructor for Salad objects.
    const_food_params.js -- storages constant values for FOOD heirs objects.
    order_local_object.js -- contains one object (ORDER) and one constructor (Position). 
                             ORDER handles dynamic elements and storagin FOOD heirs objects.
                             Position objects are auxiliary objects which store jQuery object for HTML element corresponding to each FOOD heir object.


Known issues:

1. Styles are not perfect in mobile version, but still decent.
2. It would be better to storage consts as three objects, not separate values.
3. CSS code has unsatisfactory quality. But it can be neglected due to simple styles and bootstrap. 
