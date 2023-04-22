const Prompt = require("prompt-sync")({ sigint: true });
const signObject = {
    Aries: {
      start: 321,
      end: 419,
      personality:
        "Aries are known for being courageous, determined, confident, enthusiastic, optimistic, honest, passionate, and physical. They are also known for being impatient, moody, short-tempered, impulsive, aggressive, and selfish.",
      compatibility:
        "Aries are most compatible with Leo, Sagittarius, and Aquarius.",
      monthly:
        "Aries Monthly Horoscope: https://www.astrology.com/horoscope/monthly/aries.html",
      daily: [
        "Aries Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Sunday",
        "Aries Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Monday",
        "Aries Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Tuesday",
        "Aries Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Wednesday",
        "Aries Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Thursday",
        "Aries Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Friday",
        "Aries Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aries#Saturday",
      ],
    },
    Taurus: {
      start: 420,
      end: 520,
      personality:
        "Taurus are known for being reliable, patient, practical, devoted, responsible, stable, and appreciative of the arts. They are also known for being stubborn, possessive, uncompromising, and greedy.",
      compatibility:
        "Taurus are most compatible with Virgo, Capricorn, and Pisces.",
      monthly:
        "Taurus Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/taurus.html",
      daily: [
        "Taurus Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Sunday",
        "Taurus Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Monday",
        "Taurus Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Tuesday",
        "Taurus Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Wednesday",
        "Taurus Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Thursday",
        "Taurus Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Friday",
        "Taurus Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=taurus#Saturday",
      ],
    },
    Gemini: {
      start: 521,
      end: 621,
      personality:
        "Gemini are known for being gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas. They are also known for being nervous, inconsistent, indecisive, and superficial.",
      compatibility: "Gemini are most compatible with Libra, Aquarius, and Leo.",
      monthly:
        "Gemini Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/gemini.html",
      daily: [
        "Gemini Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Sunday",
        "Gemini Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Monday",
        "Gemini Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Tuesday",
        "Gemini Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Wednesday",
        "Gemini Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Thursday",
        "Gemini Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Friday",
        "Gemini Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Gemini#Saturday",
      ],
    },
    Cancer: {
      start: 622,
      end: 722,
      personality:
        "Cancer are known for being tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive, and sensitive. They are also known for being moody, pessimistic, suspicious, manipulative, insecure, and passive-aggressive.",
      compatibility:
        "Cancer are most compatible with Taurus, Virgo, Scorpio, and Pisces.",
      monthly:
        "Cancer Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/cancer.html",
      daily: [
        "Cancer Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Sunday",
        "Cancer Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Monday",
        "Cancer Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Tuesday",
        "Cancer Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Wednesday",
        "Cancer Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Thursday",
        "Cancer Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Friday",
        "Cancer Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Cancer#Saturday",
      ],
    },
    Leo: {
      start: 723,
      end: 822,
      personality:
        "Leo are known for being creative, passionate, generous, warm-hearted, cheerful, humorous, and organized. They are also known for being arrogant, stubborn, self-centered, lazy, and inflexible.",
      compatibility:
        "Leo are most compatible with Aries, Gemini, Libra, and Sagittarius.",
      monthly:
        "Leo Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/leo.html",
      daily: [
        "Leo Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Sunday",
        "Leo Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Monday",
        "Leo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Tuesday",
        "Leo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Wednesday",
        "Leo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Thursday",
        "Leo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Friday",
        "Leo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Leo#Saturday",
      ],
    },
    Virgo: {
      start: 823,
      end: 922,
      personality:
        "Virgo are known for being loyal, analytical, kind, hardworking, practical, and helpful. They are also known for being shyness, worry, overly critical of self and others, all work and no play.",
      compatibility:
        "Virgo are most compatible with Taurus, Cancer, Scorpio, and Capricorn.",
      monthly:
        "Virgo Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/virgo.html",
      daily: [
        "Virgo Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Sunday",
        "Virgo Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Monday",
        "Virgo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Tuesday",
        "Virgo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Wednesday",
        "Virgo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Thursday",
        "Virgo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Friday",
        "Virgo Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Virgo#Saturday",
      ],
    },
    Libra: {
      start: 923,
      end: 1022,
      personality:
        "Libra are known for being cooperative,diplomatic, gracious, fair-minded, social, and they hate being alone. They are also known for being indecisive, avoids confrontations, will carry a grudge, self-pity, and can be vain and arrogant.",
      compatibility:
        "Libra are most compatible with Aries, Gemini, Leo, Libra, Sagittarius, and Aquarius.",
      monthly:
        "Libra Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/libra.html",
      daily: [
        "Libra Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Sunday",
        "Libra Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Monday",
        "Libra Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Tuesday",
        "Libra Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Wednesday",
        "Libra Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Thursday",
        "Libra Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Friday",
        "Libra Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Libra#Saturday",
      ],
    },
    Scorpio: {
      start: 1023,
      end: 1121,
      personality:
        "Scorpio are known for being resourceful, brave, passionate, stubborn, a true friend, and a lover. They are also known for being distrusting, jealous, secretive, violent, and unemotional.",
      compatibility:
        "Scorpio are most compatible with Cancer, Virgo, Capricorn, and Pisces.",
      monthly:
        "Scorpio Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/scorpio.html",
      daily: [
        "Scorpio Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Sunday",
        "Scorpio Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Monday",
        "Scorpio Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Tuesday",
        "Scorpio Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Wednesday",
        "Scorpio Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Thursday",
        "Scorpio Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Friday",
        "Scorpio Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Scorpio#Saturday",
      ],
    },
    Sagittarius: {
      start: 1122,
      end: 1221,
      personality:
        "Sagittarius are known for being generous, idealistic, great sense of humor, and a good teacher. They are also known for being tactless, restless, irresponsible, and impatient.",
      compatibility:
        "Sagittarius are most compatible with Aries, Leo, Libra, and Aquarius.",
      monthly:
        "Sagittarius Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/sagittarius.html",
      daily: [
        "Sagittarius Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Sunday",
        "Sagittarius Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Monday",
        "Sagittarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Tuesday",
        "Sagittarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Wednesday",
        "Sagittarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Thursday",
        "Sagittarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Friday",
        "Sagittarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Sagittarius#Saturday",
      ],
    },
    Capricorn: {
      start: 1222,
      end: 119,
      personality:
        "Capricorn are known for being responsible, disciplined, self-control, good managers, and great organizers. They are also known for being know-it-all, unforgiving, condescending, expecting the worst, and all work and no play.",
      compatibility:
        "Capricorn are most compatible with Taurus, Virgo, Scorpio, and Pisces.",
      monthly:
        "Capricorn Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/capricorn.html",
      daily: [
        "Capricorn Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Sunday",
        "Capricorn Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Monday",
        "Capricorn Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Tuesday",
        "Capricorn Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Wednesday",
        "Capricorn Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Thursday",
        "Capricorn Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Friday",
        "Capricorn Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Carpricorn#Saturday",
      ],
    },
    Aquarius: {
      start: 120,
      end: 218,
      personality:
        "Aquarius are known for being friendly, humanitarian, and a good listener. They are also known for being temperamental, uncompromising, aloof, and can be emotionally detached.",
      compatibility:
        "Aquarius are most compatible with Gemini, Libra, Aquarius, and Sagittarius.",
      monthly:
        "Aquarius Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/aquarius.html",
      daily: [
        "Aquarius Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Sunday",
        "Aquarius Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Monday",
        "Aquarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Tuesday",
        "Aquarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Wednesday",
        "Aquarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Thursday",
        "Aquarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Friday",
        "Aquarius Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Aquarius#Saturday",
      ],
    },
    Pisces: {
      start: 219,
      end: 320,
      personality:
        "Pisces are known for being compassionate, artistic, intuitive, gentle, wise, musical, and they love animals. They are also known for being escapist, idealistic, secretive, and can be fearful or overly trusting.",
      compatibility:
        "Pisces are most compatible with Taurus, Cancer, Scorpio, and Capricorn.",
      monthly:
        "Pisces Monthly Horoscope: https://www.astrology.com/horoscope/monthly-overview/pisces.html",
      daily: [
        "Pisces Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Sunday",
        "Pisces Daily Horoscope: https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Monday",
        "Pisces Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Tuesday",
        "Pisces Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Wednesday",
        "Pisces Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Thursday",
        "Pisces Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Friday",
        "Pisces Daily Horoscope https://www.astrology.com/us/horoscope/daily-extended.aspx?sign=Pisces#Saturday",
      ],
    },
  };
const FakeCamelCase = (str) => {
// split string into array of words
const word = str.split(/[\s_-]+/);

// loop through each word and capitalize first letter
for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);
}
// join array back into string and return
return word.join("");
};
// This function receives the user's birthday and checks if it is in the correct format
const retrieve_birthday = (birthday) => {
    const RegDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    let b_day = birthday;
    if (!RegDate.test(b_day)) {
        do {
        b_day = Prompt(
         "Please re-enter your birthday in the format MM/DD/YYYY: "
        );
        } while (!RegDate.test(b_day));
        console.log("Thanks for entering your birthday!")
        return b_day;
    } else {
        console.log("Thanks for entering your birthday!");
        return b_day;
    }
};
  // This function checks if the user knows their sign
const answercheck = () => {
    let answer = Prompt("Do you know your sign? Please enter Y or N: ").toUpperCase();
  
    if (!(answer === "Y" && answer === "N")) {
        do {
        answer = Prompt("Please only enter Y or N: " ).toUpperCase();
        console.log(answer);
        } while (!(answer === "Y" || answer === "N"));
    }         
    
    if (answer === "Y") {
        let sign = FakeCamelCase(Prompt("Please enter your sign: "));
        return sign;
    } else if (answer === "N") {
        console.log("You don't know your sign? No problem!");
        return birth_to_sign(retrieve_birthday());    
    }
};

// This function verifies the user's sign and returns zodiac sign
const verify_sign = (str) => {
    let sign = str;
    if (!Object.keys(signObject).includes(sign)) {
      do {
        sign = FakeCamelCase(Prompt("Please re-enter your sign (the signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces "));      
        } while (!Object.keys(signObject).includes(sign));
        return sign;
    } else if (Object.keys(signObject).includes(sign)) {
        console.log("Thanks for entering your sign!");
        return sign;
    }
};


// This function converts the user's birthday to their zodiac sign
const birth_to_sign = (birthday) => {
  const newBirthday = birthday.replace("/", "");
  const mm_dd = parseInt(newBirthday);
  for (let sign in signObject) {
    let signDates = signObject[sign];
    
    if (mm_dd >= signDates.start && mm_dd <= signDates.end) {
      return FakeCamelCase(sign);
    } else {
      // This is because I converted dates to integers and with my conditional statement, it would not be able to satisfy both conditions for Capricorn(01/19/YYYY when removing "/" and turning to integer drops the leading 0 so end date becomes 119.  Only date range that doesn't work out using this method). Switch statement would have had more convoluted code.
      return "Capricorn";
    }
  }
};
// This function is the horoscope generator retrieves properties from the signObject and displays them to the user.
    // TO DO - add a way to save the die roll and use it to continue the story.  Use randomness to determine the fate of the character.
const HoroscopeGenerator = (sign) => {
    const sign2 = FakeCamelCase(sign);
    const Prompt = require("prompt-sync")({ sigint: true });
    const i = Math.floor(Math.random() * 8);
    const randomDailyHoroscope = signObject[sign2].daily[i];
    const MonthlyHoroscope = signObject[sign2].monthly;
    const personality = signObject[sign2].personality;
    const compatibility = signObject[sign2].compatibility;
    console.log(`Your sign is ${sign2}, a few fun facts about ${sign2} are that ${personality} And that ${compatibility}`);
    let lucky = Prompt(
      "Would you like to know your future from an amateur fortune teller? (yes/no) "
    );
        console.log(lucky)
    if (lucky.toLowerCase() === "yes") {
      console.log(`Hmm yes.. Very interesting...This is your distant future... ${MonthlyHoroscope} well by distant future I mean next month.`);
      console.log(
        "Beware of wanting to know the future, for the knowledge it brings may not always be what you desire. The future is a fickle mistress, and she may reveal to you things that will burden your heart and soul. The knowledge of what is to come may fill you with dread and anxiety, for it may be filled with unforeseen dangers and troubles that you are powerless to change.  Furthermore, the pursuit of knowledge about the future may consume you entirely, leading you down a path of obsession and madness, as you try to unravel the mysteries of what is yet to come. So be warned, for the future is not a thing to be trifled with, and the knowledge it brings may come at a great cost. It is better to focus on living in the present and facing the challenges of life as they come, rather than obsessing over what may be.\n -Chat-GPT 3.0"
      );
      let more_luck = Prompt(
        "Having said that would you like the roll the dice and see what the future holds? (roll/don't roll) "
      );
      if (more_luck) {
        console.log(`Fortune does favor the bold.  Looks like you rolled a ${i}.  Which means I will tell you what happens on that day of the week.  Well more like astrology.com tells you but here it is ${randomDailyHoroscope}.  Remember there is no escaping your future when you know it and because you rolled the dice your fate is sealed MUHAHAHAHAHAH *cough* *cough* I mean have a nice day. *The fortune teller suddenly vanishes* Leaving behind the die you rolled.  To be continued....`);
      } else {
        console.log(`It doesn't matter what you want, you are going to roll the dice and see what the future holds.  ${randomDailyHoroscope}`);    
      }
    } else {
      console.log(`Well I guess you don't want to know your future.  I guess I will just tell you what the future holds for you anyways  ${MonthlyHoroscope} also sometime this week ${randomDailyHoroscope} will come true.`);
    }
  };
  




const main = () => {
    const first_sign = verify_sign(answercheck());
    HoroscopeGenerator(first_sign);
}
main();