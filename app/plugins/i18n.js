let lang = "ja";

const list = {
  hello: { ja: "こんにちは", en: "hello" },
  you: { ja: "あなた", en: "you" },
  japanese: { ja: "日本語", en: "Japanese" },
  english: { ja: "英語", en: "English" },

  asd: { 
    ja: (a, b, c, d) => `インデックス: ${a} id: ${b} ${c} ${d}円`,
    en: (a, b, c, d) => `index: ${a} id: ${b} ${c} ${d}yen`
  },

  date_date: { ja: "yyyy/m/d" },
  date_shortDate: { ja: "m/d" },
  date_shortDateTime: { ja: "m/d h:MM" },
  date_day: { ja: "ddd" },
  date_select: { ja: "m/d (ddd)" },
  date_select_full: { ja: "yyyy/mm/dd (ddd)" },
  date_fortnight: { ja: "m月d日" },
  date_fortnight_deadline: { ja: "m月d日迄" }
};

// function asd(a,b,c,d) {  
//   return `index: ${a} id: ${b} ${c} ${d}yen`
// }

export function setLang(newLang) {
  lang = newLang;
}

// 1. t("hello")
// 2. list[word] => list.word => { ja: "こんにちは" }
// 3. list[word][lang] => list.word.ja => "こんにちは"

function t(word) {
  // if (list[word]) {
  //   if (list[word][lang]) {
  //     return list[word][lang]
  //   }
  // } 
  
  // return `::${word}::`

  return list[word] && list[word][lang] ? list[word][lang] : `::${word}::`;
}

export default (context, inject) => {  
  inject("t", t)
}

const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export function formatDate(date, format) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return format.replace(/dddd|ddd|yy|yyyy|mm|m|dd|d|hh|h|MM|M/g, word => {
    switch (word) {
      case "dddd":
        return t(dayNames[date.getDay()]);
      case "ddd":
        return t(`short_${dayNames[date.getDay()]}`);
      case "yy":
        return String(date.getFullYear()).substr(2, 4);
      case "yyyy":
        return date.getFullYear();
      case "mm":
        return String(date.getMonth() + 1).padStart(2, "0");
      case "m":
        return date.getMonth() + 1;
      case "dd":
        return String(date.getDate()).padStart(2, "0");
      case "d":
        return date.getDate();
      case "hh":
        return String(date.getHours()).padStart(2, "0");
      case "h":
        return date.getHours();
      case "MM":
        return String(date.getMinutes()).padStart(2, "0");
      case "M":
        return date.getMinutes();
      default:
        return "";
    }
  });
}

