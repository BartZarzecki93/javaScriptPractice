var findElevenFifty = /elevenfifty/;
var re = new RegExp('JavaScript Rules!');


var efaString = `Eleven Fifty Consulting is for people, not profit. We believe in developing you,
    the whole you.That’s why our coding academy programs are designed to help you discover 
    and develop your strengths. At Eleven Fifty Consulting, it’s not just about developing the 
    coding skills. We work with our students to develop the soft skills that employers are 
    looking for in employees. We believe a new educational alternative is the solution to the 
    growing technology skills gap. Our immersive learning programs develop polished entry-level
    professionals in weeks not years. We understand you’re looking to launch or change your career 
    now. Results shouldn’t take years or cost you tens of thousands of dollars. We’re the coding 
    academy focused on you.    We believe our job isn’t done until graduates find thiers. As a 
    coding academy, we partner with employers to craft our curriculum and we measure our success 
    by the placement and progression of our students. With our internship and apprenticeship programs, 
    you gain real-world and hands-on experiences and set yourself up for future employment success.?`;

    function checkStringForMatch(sampleString) {
        var patternOne = /Consulting/g;
        var result = sampleString.match(patternOne);
        console.log(result);
    }
    checkStringForMatch(efaString);

    function replaceConsulting(sampleString){
        var patternOne = /Consulting/g;
        var patternTwo = "Academy";
        var newString = sampleString.replace(patternOne, patternTwo)
        console.log(newString);
    }
    
    replaceConsulting(efaString);

    function checkStringForMatch(sampleString) {
        var patternOne1 = /thier/g;
        var result1 = sampleString.match(patternOne1);
        console.log(result1);
    }
    checkStringForMatch(efaString);

    function replaceConsulting(sampleString){
        var patternOne2 = /thier/g;
        var patternTwo2 = "their";
        var newString1 = sampleString.replace(patternOne2, patternTwo2)
        console.log(newString1);
    }
    replaceConsulting(efaString);