var myZodiac = "Aries";
var myMonth = "April";
var myDate = 9;
var lucky = 9;
var description = "Aries people are bold, energetic, full of vitality, charismatic, fun, lively, passionate, and driven by their hearts and desires.";
var believe = true;

var myMood = 3.7;
var partner1Mood = 3.2;
var partner2Mood = 3;
var avgMood = ((myMood + partner1Mood + partner2Mood) / 3).toFixed(1);

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mySign = signs[3];
var partner1Sign = signs[7];
var partner2Sign = signs[11];

var horoscopes = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

var myDescr = horoscopes[2];
var partner1Descr = horoscopes[7];
var partner2Descr = horoscopes[11];

horoscopes[0] = "Seize the day!";

var type = document.getElementById('sign');
type.innerHTML = myZodiac;

var dates = document.getElementsByClassName('birthday');
dates[0].innerHTML += myMonth + " " + myDate + "th";

var nums = document.getElementsByClassName('luckyNum');
nums[0].innerHTML += lucky;

var descr = document.getElementsByTagName('p');
descr[0].innerHTML = description;
descr[1].innerHTML += '<strong>' + believe + '</strong>';
descr[2].innerHTML = "Today's mood rating for Aries: " + myMood + " out of 5. The average mood rating of Aries, Leo, and Sagittarius is: " + avgMood + " out of 5.";
descr[3].innerHTML = "My zodiac sign is: " + mySign + ".";
descr[4].innerHTML = "Junrong's zodiac sign is: " + partner1Sign + ".";
descr[5].innerHTML = "Ethan's zodiac sign is: " + partner2Sign + ".";

descr[3].innerHTML += "<br> Aries Horoscope: " + myDescr;
descr[4].innerHTML += "<br> Leo Horoscope: " + partner1Descr;
descr[5].innerHTML += "<br> Sagittarius Horoscope: " + partner2Descr;

