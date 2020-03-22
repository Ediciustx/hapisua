var NumberOfWords = 24
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkurl.org/aovwe" 
words[2] = "https://shrinkurl.org/Yo9V" 
words[3] = "https://shrinkurl.org/Iok9wj" 
words[4] = "https://shrinkurl.org/6XPTJC8" 
words[5] = "https://shrinkurl.org/PSDVnQpn" 
words[6] = "https://shrinkurl.org/skbAW" 
words[7] = "https://shrinkurl.org/Dk6VaTba" 
words[8] = "https://shrinkurl.org/aBKK" 
words[9] = "https://shrinkurl.org/L7ER" 
words[10] = "https://shrinkurl.org/RO8Qus" 
words[11] = "https://shrinkurl.org/NLtRvVwr" 
words[12] = "https://shrinkurl.org/3KEkm4zW" 
words[13] = "https://shrinkurl.org/DUxneV" 
words[14] = "https://shrinkurl.org/JYbbwO" 
words[15] = "https://shrinkurl.org/Myr2XM4" 
words[16] = "https://shrinkurl.org/2JJc" 
words[17] = "https://shrinkurl.org/mvBNel" 
words[18] = "https://shrinkurl.org/PNqqgk7B" 
words[19] = "https://shrinkurl.org/DJNZHYQ" 
words[20] = "https://shrinkurl.org/bt4EJ" 
words[21] = "https://shrinkurl.org/WrsmKso" 
words[22] = "https://shrinkurl.org/2Wd4sq" 
words[23] = "https://shrinkurl.org/PKVX" 
words[24] = "https://shrinkurl.org/k44I5BG" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}