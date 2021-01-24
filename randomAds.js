(function randomImg() {
  var quotes = [
    {
      text: "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/redirect1.html/",
      img:  "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/hunt-club-ad-version-1.jpg/"
    },
    {
      text: "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/redirect1.html/",
      img:  "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/ad-2-bent-fork.jpg/",
    },
    {
      text: "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/redirect1.html/",
      img:  "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/ad-2-bent-fork.jpg/",
    },
    {
      text: "https://roblox.com/",
      img:  "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/ad2.jpg/",
    },
    {
      text: "https://roblox.com/",
      img:  "https://codeprojects.org/_uLaNvBTx-FcGfHyDjXb0gtobzURizMHlxxylr5Cf3E/ad2.jpg/",
    },
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("tieucaAds").href = quote.text;
  document.getElementById("tieucaAdsImg").src = quote.img;
  
})();
