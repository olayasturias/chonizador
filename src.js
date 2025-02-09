// https://chevismo.wordpress.com/2010/08/30/el-chonizador/
// Musical Symbols
const musicEmojis = ['♪', '♬', '♩', '𝄞'];

// Stars & Sparkles
const starEmojis = ['☆', '★', '✪', '✩', '✰', '╰☆╮', '✧'];

// Faces
const faceEmojis = ['ツ', '☺', '☹', '☻', '웃', '유', '㋡'];

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
const miscEmojis = ['⏣', '∞', '⌘', '々', '〄'];

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
var xoniza = s => s && s
// frases hechas choni
    .replace(/te quiero mucho/gi, '♥TKM♥')
    .replace(/ puta /gi, ' so puta ')
    .replace(/mi niño/gi, 'mi niño rechulon')
// letras y combinaciones desconocidas
    .replace(/ñ/gi, 'nh')
    .replace(/ch/gi, 'sh')
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
// sintasis
    .replace(/, /gi, ` ${rx()} `)
    .replace(/\. /gi, ` ${rx()} `)
    .replace(/\: /gi, ` ${rx()} `)
// alguna e por a
    .replace(/e/gi, match => Math.random() < 0.1 ? 'a' : match)
// sustitiones de final de frase
    .replace(/a /gi, yx('ah '))
    .replace(/e /gi, yx('eh '))
    .replace(/i /gi, yx('ih '))
    //.replace(/o /gi, yx('oh '))
    //.replace(/u /gi, yx('uh '))
    .replace(/e,?\.?\:? /gi, yx('eh '))
    //.replace(/o,?\.?\:? /gi, 'oh ')
    //.replace(/u,?\.?\:? /gi, 'uh ')
    .replace(/s,?\.?\:? /gi, () => Math.random() < 0.2 ? 'h ' : 's ')
    .replace(/s/gi, () => Math.random() < 0.2 ? 'z' : 's')

// quita h del principio
    .replace(/ h/gi, ' ')
// mayusculas cada letra q sea multiplo de 4, porq si.... y porq no?
    .replace(/ a/gi,  yx(' ha'))
    .replace(/ e/gi,  yx(' he'))
    .replace(/ i/gi,  yx(' hi'))
    .replace(/ o/gi,  yx(' ho'))
    .replace(/ u/gi,  yx(' hu'))

// las i catalanas
    .replace(/ y /gi, ' i ')
// reemplazar "ll" e "y" con una probabilidad del 50%
    .replace(/y/gi, match => Math.random() > 0.5 ? 'll' : match)
    .replace(/ll/gi, match => Math.random() > 0.5 ? 'y' : match)
    // Randomly insert emojis
    .replace(/ /g, () => Math.random() > 0.8 ? ` ${rx()} ` : ' ')
    // Apply letter transformations
    .split('')
    // Alarga la vocal con su propia letra
    // Luego alterna mayúsculas y minúsculas
    .map((e, i) => {
        if (/[aeiou]/i.test(e) && Math.random() > 0.7) {
            e = e + e.toLowerCase() + e.toUpperCase();
        }
        return i % 4 === 0 ? e.toUpperCase() : e;
    })
    .join('');

