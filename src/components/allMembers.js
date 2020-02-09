const allMembers = [
  {
    image: "vicky",
    name: "Vicky Ly",
    year: "2020",
    portfolio: "vickyly.co",
    linkedin: "/in/"
  },
  {
    image: "lucy",
    name: "Lucy Xu",
    year: "2020",
    portfolio: "lucylouxu.com/",
    linkedin: "/in/"
  },
  {
    image: "brittany",
    name: "Brittany Newton",
    year: "2020",
    portfolio: "in/brittany-newton-648452133/",
    linkedin: "in/brittany-newton-648452133/"
  },
  {
    image: "steven",
    name: "Steven Chen",
    year: "2020",
    portfolio: "stevenychen.com/",
    linkedin: "/in/"
  },
  {
    image: "jamin",
    name: "Jamin Capulong",
    year: "2020",
    portfolio: "/in/jamin-nick-capulong/",
    linkedin: "/in/jamin-nick-capulong/"
  },
  {
    image: "andrew",
    name: "Andrew Zhen",
    year: "2020",
    portfolio: "ajzhen.com",
    linkedin: "ajzhen.com"
  },
  {
    image: "stella",
    name: "Stella Seki",
    year: "2021",
    portfolio: "/in/stella-seki-043051170/",
    linkedin: "/in/stella-seki-043051170/"
  },
  {
    image: "nhu",
    name: "Nhu Luong",
    year: "2021",
    portfolio: "nhu777.net",
    linkedin: "/in/"
  },
  {
    image: "julia",
    name: "Julia Nguyen",
    linkedin: "/in/",
    portfolio: " nguyenjuliaa.com/",
    year: 2021
  },
  {
    image: "paridhi",
    name: "Paridhi Khaitan",
    linkedin: "/in/",
    portfolio: "in/paridhi4699/",
    year: 2021
  },
  {
    image: "alison",
    name: "Alison Chen",
    linkedin: "/in/",
    portfolio: "in/ealisonchen/",
    year: 2021
  },

  {
    image: "quinn",
    name: "Quinn Vu",
    linkedin: "/in/",
    portfolio: "thyvu.site/",
    year: 2021
  },
  {
    image: "winson",
    name: "Winson Dieu",
    linkedin: "/in/",
    portfolio: "winsondieu.com",
    year: 2021
  }
];


//Randomises the elements in the array so that different people are on the top
for (var i = allMembers.length - 1; i >= 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = allMembers[i];
  allMembers[i] = allMembers[j];
  allMembers[j] = temp;
}

export default allMembers;
