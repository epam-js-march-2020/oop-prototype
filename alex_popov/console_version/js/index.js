// var app = new App();
// app.start();


$(  begin );

/**
 * renders start elements that allows to choose what kind of aplication
 * you want to use.
 * console application or DOM representation
 */
function begin() {
    $('application').html('')
    App.prototype.render(structures.start, [true], '#root');

    $('#root').on('click', function(ev) {
        if (ev.target.id == 'goBack') {
            $('root').html('')
            App.prototype.render(structures.start, [true], '#root');
        }
        if(ev.target.id == 'console') {
            App.prototype.render(structures.consoleInstruction, [true], '#root');
        }
        if (ev.target.id == 'dom') {
            var app = new App();
            app.start();
        }
    })
}

