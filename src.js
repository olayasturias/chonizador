// https://chevismo.wordpress.com/2010/08/30/el-chonizador/
const greekMap = {
    'a': 'α', 'b': 'β', 'e': 'ε', 'f': 'ғ',
    'k': 'κ', 'l': 'ℓ', 'n': 'η', 'm': 'м',
    'p': 'ρ', 't': 'τ', 'u': 'υ',
    'w': 'ω', 'x': '×',
};

function convertToGreek(text) {
    return text.split('').map(char => {
        // 30% de probabilidad de reemplazar la letra
        if (greekMap[char.toLowerCase()] && Math.random() < 0.99) {
            return greekMap[char.toLowerCase()];
        }
        return char;
    }).join('');
}

// Musical Symbols
const musicEmojis = ['♪', '♬', '♩', '𝄞'];

// Stars & Sparkles
const starEmojis = ['☆', '★', '✪', '✩', '✰', '╰☆╮', '✧'];

// Faces
const faceEmojis = ['ツ', '☺', '☹', '☻', '㋡'];

// Playing Cards
const cardEmojis = ['♠', '♣', '♥', '♦'];

// Cute Decorative Symbols
const flowerEmojis = ['✿', '❀', '✾', '❁', '〤'];

// Love Symbols
const loveEmojis = ['♥', '❥', 'ღ', 'ლ'];

// Dark / Emo Aesthetic
const darkEmojis = ['†', '☠', '☢', '☣', '☤'];

// Rich & Status Vibes
const moneyEmojis = ['¤'];

// Miscellaneous Swirls & Decoration
const miscEmojis = ['∞'];

const xonimojis = [
    ...musicEmojis,
    ...starEmojis,
    ...faceEmojis,
    ...cardEmojis,
    ...flowerEmojis,
    ...loveEmojis,
    ...darkEmojis,
    ...moneyEmojis,
    ...miscEmojis
];

// const xonimojis = 'ツ ♣ ♪♬♪ ☆★ ¤ * ♠ '.split(' ')
const r = () => Math.floor(Math.random() * xonimojis.length);
const rx = () => xonimojis[r()];
const y = (a, b) => r() > (xonimojis.length / 2) ? a : b;
const yx = a => (b => Math.floor(Math.random() * xonimojis.length) > (xonimojis.length / 2) ? a : b);
var xoniza = s => s && convertToGreek( // 🔥 Apply Greek transformation at the end
    s
    // frases hechas choni
    .replace(/te quiero mucho/gi, '♥TKM♥')
    .replace(/ puta /gi, ' so puta ')
    .replace(/mi niño/gi, 'mi niño rechulon')
    // letras y combinaciones desconocidas
    .replace(/ñ/gi, 'nh')
    .replace(/ch/gi, 'x')
    // hortografia
    .replace(/b/gi, '_b_')
    .replace(/v/gi, '_v_')
    .replace(/_v_/gi, () => y('b', 'v'))
    .replace(/_b_/gi, () => y('v', 'b'))
    .replace(/z/gi, 's')
    .replace(/ca/gi, 'ka')
    .replace(/ce/gi, 'ze')
    .replace(/ci/gi, 'zi')
    .replace(/co/gi, 'ko')
    .replace(/cu/gi, 'ku')
    .replace(/ y /gi, ' i ')
    .replace(/que/gi, 'ke')
    .replace(/qu/gi, 'k')
    // sintaxis
    .replace(/, /gi, ` ${rx()} `)
    .replace(/\. /gi, ` ${rx()} `)
    .replace(/\: /gi, ` ${rx()} `)
    // sustituciones de final de frase
    .replace(/a /gi, () => Math.random() < 0.5 ? 'ah ' : 'a ')
    .replace(/e /gi, () => Math.random() < 0.5 ? 'eh ' : 'e ')
    .replace(/i /gi, () => Math.random() < 0.5 ? 'ih ' : 'i ')
    .replace(/o /gi, () => Math.random() < 0.5 ? 'oh ' : 'o ')
    .replace(/u /gi, () => Math.random() < 0.5 ? 'uh ' : 'u ')
    .replace(/e,?\.?\:? /gi, yx('eh '))
    .replace(/s,?\.?\:? /gi, () => Math.random() < 0.2 ? 'h ' : 's ')
    .replace(/s/gi, () => Math.random() < 0.2 ? 'z' : 's')
    // quita h del principio
    .replace(/ h/gi, ' ')
    // mayúsculas cada letra que sea múltiplo de 4
    .replace(/ a/gi, yx(' ha'))
    .replace(/ e/gi, yx(' he'))
    .replace(/ i/gi, yx(' hi'))
    .replace(/ o/gi, yx(' ho'))
    .replace(/ u/gi, yx(' hu'))
    // las i catalanas
    .replace(/ y /gi, ' i ')
    // Randomly insert emojis
    .replace(/ /g, () => Math.random() > 0.8 ? ` ${rx()} ` : ' ')
    // Apply letter transformations
    .split('')
    .map((e, i) => {
        if (/[aeiou]/i.test(e) && Math.random() > 0.7) {
            e = e + e.toLowerCase() + e.toUpperCase();
        }
        return i % 4 === 0 ? e.toUpperCase() : e;
    })
    .join('')
);
