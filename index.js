function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
} 
function logShout(hello) {
    console.log(hello.toUpperCase());
    
}
function logWhisper(what) {
    console.log(what.toLowerCase());
    
}

function sayHiToGrandma(hello) {
    var cant = "I can't hear you!";
    var yes = "YES INDEED!";
    var love = "I love you, too.";
    if (hello.toLowerCase(hello) === hello) {
      return cant;
    }
    else if (hello.toUpperCase(hello) === hello) {
        return yes;
      }
      else if ('I love you,Grandma.') {
        return love
      }
    }