$ ( функция () {
    консоль . log (from);
    var from =  $ ( ' #from ' );
    var to =  $ ( ' #to ' );
    var func =  $ ( ' #func ' );
    var out =  $ ( ' #output ' );
    $ ( ' #plot ' ). click ( функция ( событие ) {
        событие . preventDefault ();
        var x =  parseFloat ( from . val ());
        var end =  parseFloat ( to . val ());
        вар = (конец - ?) /  100 ;
        startAnim (x, end, dx, func . val ());
    });

    функция  startAnim ( x , end , dx , func ) {
        var array = [];
        var interval =  setInterval ( function () {
            консоль . log (массив);
            массив . push ([x, eval (func)]);
            $ . plot (out, [{label : func, data : array}]);
            x + = dx;
            end - = dx;
            if (end <  0 ) clearInterval (интервал);
        }, 100 );
        интервал возврата ;
    }
});
