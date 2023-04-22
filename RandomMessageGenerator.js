const Prompt = require("prompt-sync")({sigint: true});

// This function checks if the user knows their sign
const answercheck = () => {
  
  let answer = Prompt("Do you know your sign? Please enter Y or N: ").toUpperCase();
  if (answer != "Y" && answer != "N") {
    do {
       answer = Prompt("Please enter Y or N");
     } while (answer != "Y" && answer != "N");
    return answer.toUpperCase();
  } else {
    return answer.toUpperCase();
  }
};


const verify_sign = () => {
  let sign = "";
  if (answered == "Y") {
    sign = Prompt("Please enter your sign").toLowerCase();
    if (!Object.keys(signObject).includes(sign)) {
      do {
        sign = Prompt("Please re-enter your sign").toLowerCase();
      } while (!Object.keys(signObject).includes(sign));
      return sign;
    }
  } else {    
    console.log("You don't know your sign? No problem!");
    
    }
}
    
const Calculate_sign = () => {
    const RegDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    let birthday = Prompt("Please enter your month and date of your birthday in the format MM/DD/YYYY: ");
    if (!RegDate.test(birthday)) {
    do {
        birthday = Prompt("Please re-enter your birthday in the format MM/DD/YYYY: ");
    } while (!RegDate.test(birthday));
    return birthday;
    } else {
    console.log("Thanks for entering your birthday!");
    return birthday;
    }
}
const signObject = {
  aries: {
    start: 321,
    end: 419,
    personality: "Aries are known for being courageous, determined, confident, enthusiastic, optimistic, honest, passionate, and physical. They are also known for being impatient, moody, short-tempered, impulsive, aggressive, and selfish.",
    compatibility: "Aries are most compatible with Leo, Sagittarius, and Aquarius.",
  },
  taurus: {
    start: 420,
    end: 520,
    personality: "Taurus are known for being reliable, patient, practical, devoted, responsible, stable, and appreciative of the arts. They are also known for being stubborn, possessive, uncompromising, and greedy.",
    compatibility: "Taurus are most compatible with Virgo, Capricorn, and Pisces.",
  },
  gemini: {
    start: 521,
    end: 621,
    personality: "Gemini are known for being gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas. They are also known for being nervous, inconsistent, indecisive, and superficial.",
    compatibility: "Gemini are most compatible with Libra, Aries, and Leo.",
  },
  cancer: {
    start: 622,
    end: 722,
    personality: "Cancer are known for being tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive, and sensitive. They are also known for being moody, pessimistic, suspicious, manipulative, insecure, and passive-aggressive.",
    compatibility: "Cancer are most compatible with Scorpio, Pisces, and Taurus.",
  },
  leo: {
    start: 723,
    end: 822,
    personality: "Leo are known for being creative, passionate, generous, warm-hearted, cheerful, humorous, and organized. They are also known for being arrogant, stubborn, self-centered, lazy, and inflexible.",
    compatibility: "Leo are most compatible with Aries, Gemini, Libra, and Sagittarius.",
  },
  virgo: {
    start: 823,
    end: 922,
    personality: "Virgo are known for being loyal, analytical, kind, hardworking, practical, and helpful. They are also known for being shyness, worry, overly critical of self and others, all work and no play.",
    compatibility: "Virgo are most compatible with Taurus, Cancer, Scorpio, and Capricorn.",
  },
  libra: {
    start: 923,
    end: 1022,
    personality: "Libra are known for being cooperative,diplomatic, gracious, fair-minded, social, and they hate being alone. They are also known for being indecisive, avoids confrontations, will carry a grudge, self-pity, and can be vain and arrogant.",
    compatibility: "Libra are most compatible with Gemini, Leo, Sagittarius, and Aquarius.",
  },
  scorpio: {
    start: 1023,
    end: 1121,
    personality: "Scorpio are known for being resourceful, brave, passionate, stubborn, a true friend, and a lover. They are also known for being distrusting, jealous, secretive, violent, and unemotional.",
    compatibility: "Scorpio are most compatible with Cancer, Virgo, Capricorn, and Pisces.",
  },
  sagittarius: {
    start: 1122,
    end: 1221,
    personality: "Sagittarius are known for being generous, idealistic, great sense of humor, and a good teacher. They are also known for being tactless, restless, irresponsible, and impatient.",
    compatibility: "Sagittarius are most compatible with Aries, Leo, Libra, and Aquarius.",
  },
  capricorn: {
    start: 1222,
    end: 119,
    personality: "Capricorn are known for being responsible, disciplined, self-control, good managers, and great organizers. They are also known for being know-it-all, unforgiving, condescending, expecting the worst, and all work and no play.",
    compatibility: "Capricorn are most compatible with Taurus, Virgo, Scorpio, and Pisces.",
  },
  aquarius: {
    start: 120,
    end: 218,
    personality: "Aquarius are known for being friendly, humanitarian, and a good listener. They are also known for being temperamental, uncompromising, aloof, and can be emotionally detached.",
    compatibility: "Aquarius are most compatible with Gemini, Libra, Sagittarius, and Aquarius.",
  },
  pisces: {
    start: 219,
    end: 320,
    personality: "Pisces are known for being compassionate, artistic, intuitive, gentle, wise, musical, and they love animals. They are also known for being escapist, idealistic, secretive, and can be fearful or overly trusting.",
    compatibility: "Pisces are most compatible with Cancer, Scorpio, Capricorn, and Taurus.",
  }
};

    
const birth_to_sign = (string) => {
  let newBirthday = string.replace("/", "");
  let mm_dd = parseInt(newBirthday);
  for (let sign in signObject) {
    let signDates = signObject[sign];
    console.log(signDates.start, signDates.end);
    if (mm_dd >= signDates.start && mm_dd <= signDates.end) {
      let csign = FakeCamelCase(sign);
      return csign;
    } else {
      let csign = "Capricorn";
      return csign;
    }
  }
};
const FakeCamelCase = (str) => {
    // split string into array of words
    const word = str.split(/[\s_-]+/);
    
    // loop through each word and capitalize first letter
    for (let i=0; i < word.length; i++) {
      word[i] = word[i][0].toUpperCase() + word[i].substr(1);
    }
    // join array back into string and return
    return word.join("");
};

const Horoscope = (sign) => {
    let horoscope = "";
    

const sign = verify_sign();
const answered = answercheck();