 
function image ()
{
var query = document.myform.query.value;
var finalQuery= query+" +(jpg|png|bmp|gif|tif|tiff|psd) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
window.open(url);
}
function music ()
{
var query  = document.myform.query.value;
var finalQuery= query+" +(mp3|wav|ac3|ogg|flac|wma|m4a) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
window.open(url);
}

function movies ()
{
var query  = document.myform.query.value;
var finalQuery= query+" +(mkv|mp4|avi|mov|mpg|wmv) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
window.open(url);
}

function softwares()
{
var query  = document.myform.query.value;
var finalQuery= query+" +(exe|iso|tar|rar|zip|apk) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
window.open(url);
}


function books()
{
var query  = document.myform.query.value;
var finalQuery= query+" +(MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
window.open(url);
}


function others()
{
var query  = document.myform.query.value;
var finalQuery= query+" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
window.open(url);
}

 










