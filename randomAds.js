(function randomImg() {
  var quotes = [
    {
      text: "https://www.vultr.com/?ref=6803172/",
      img:  "https://www.vultr.com/media/banners/banner_728x90.png/"
    },
    {
      text: "https://olacity.com/ref/478540905 https://olacity.com/ref/478540905/",
      img:  "https://forum.olacity.com/img/banner-01.png/",
    },
    {
      text: "https://www.binance.com/vn/register?ref=43660035/",
      img:  "https://cointek.net/wp-content/uploads/2020/08/binance-ban.gif/",
    },
    {
      text: "https://ladipage.vn?ref=tieuca/",
      img:  "https://i0.wp.com/s1.uphinh.org/2021/01/15/782x90.png/",
    },
    {
      text: "https://affiliates.hostarmada.com/scripts/q1yoac4x8oq?a_aid=tieuca&amp;a_bid=f7d001a9/",
      img:  "https://affiliates.hostarmada.com/accounts/default1/q1yoab4x8oq/f7d001a9.gif/",
    },
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").href = quote.text;
  document.getElementById("quoteimg").src = quote.img;
})();
