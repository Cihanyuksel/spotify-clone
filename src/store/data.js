import img from "../asset/altust.jfif";
import img2 from "../asset/dore.jfif";
import img3 from "../asset/turkcepop.jfif";
import img4 from "../asset/popt.jfif";
import img5 from "../asset/trend.jfif";
import img6 from "../asset/2000ler.jfif";
import img7 from "../asset/turkcerock.jpg";
import img8 from "../asset/slowpop.jfif";
import img9 from "../asset/akustikturkce.jfif";
import img10 from "../asset/yeniden.jfif";

let data =  [
{
  id: 1,
  title: "altüst",
  desc: "Biraz Dağıldık",
  image : img
},
{
  id: 2,
  title: "dore",
  desc: "Türler arası altın keşifler",
  image : img2
},
{
  id: 3,
  title: "Türkçe Pop",
  desc: "Türkiye'nin en büyük pop listesi",
  image : img3
},
{
  id: 4,
  title: "popt",
  desc: "vibes Kapak: Kozmos",
  image : img4
},
{
  id: 5,
  title: "trend",
  desc: "İnternette olan biten",
  image : img5
},
{
  id: 6,
  title: "Türkçe 2000'ler",
  desc: "mp3 çaların devri ve yepyeni milenyum",
  image : img6
},
{
  id: 7,
  title: "Türkçe Rock",
  desc: "Gitar ve davulu konuşturanlar",
  image : img7
},
{
  id: 8,
  title: "Slow Pop",
  desc: "En sevdiğin slow şarkılar",
  image : img8
},
{
  id: 9,
  title: "Akustik Türkçe",
  desc: "Sevdiğin yerli akustik şarkılar",
  image : img9
},
{
  id: 10,
  title: "Yeniden",
  desc: "Sevilen eserler yeniden sizlerle",
  image : img10
}
];

export function getInvoices() {
  return data;
}