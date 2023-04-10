var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');

var codeResult = '\n'+ 
'<p>Salut et bienue sur ma page de motivation. Comme <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Conficius</cite></a> a dit à son temps :</p>\n'+ 
'<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n'+ 
'  <p>La lenteur avec laquelle vous allez n\'a pas d\'importance tant que vous ne vous arrêtez pas.</p>\n'+ 
'</blockquote>\n'+ 
'<p>J\'aime aussi le concept de pensée positive <q cite="http://www.affirmationsforpositivethinking.com/index.html">Il est nécessaire d\'éliminer le discours négatif sur soi-même</q> (comme dit dans <a href="http://www.affirmationsforpositivethinking.com/index.html"><cite>Affirmations for Positive Thinking</cite></a></p>\n'+ 
'';
var htmlCodeInit = '\n'+ 
'<p>Salut et bienue sur ma page de motivation. Comme Conficius a dit à son temps :</p>\n'+ 
'\n'+ 
'    <p>La lenteur avec laquelle vous allez n\'a pas d\'importance tant que vous ne vous arrêtez pas.</p>\n'+ 
'\n'+ 
'<p>J\'aime aussi le concept de pensée positive "Il est nécessaire d\'éliminer le discours négatif sur soi-même" (comme dit dans Affirmations for Positive Thinking</p>\n'+ 
'';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);