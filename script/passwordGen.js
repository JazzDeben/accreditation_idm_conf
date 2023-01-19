(function (){
    let pwd = generatePassword();
    return { password : pwd };
})();

function generatePassword() {
    var pwd = '';
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var special = '!*()';
    var numbers = '0123456789';
              
    for (let x = 0; x < 16; x++) {
        switch (true) {
            case ((x >= 0) && ( x < 4)):
                var loc = Math.floor(Math.random() * (capital.length -1) +1 );
                pwd += capital.charAt(loc);
                break;
            case ((x >= 4) && ( x < 8)):
                var loc = Math.floor(Math.random() * (lowercase.length -1) +1 );
                pwd += lowercase.charAt(loc);
                break;
            case ((x >= 8) && ( x < 12)):
                var loc = Math.floor(Math.random() * (special.length -1) +1 );
                pwd += special.charAt(loc);
                break;
            case ((x >= 12) && ( x < 16)):
                var loc = Math.floor(Math.random() * (numbers.length -1) +1 );
                pwd += numbers.charAt(loc);
        }
    }

    var a = pwd.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
