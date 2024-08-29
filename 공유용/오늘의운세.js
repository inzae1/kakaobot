if(msg.includes('.운세')){
    try{
      
      var luckParts = msg.split(" ");
      var url = org.jsoup.Jsoup.connect('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=운세+' + luckParts[1]).get();

      var luckData = url.select('p.text').get(0).text();

      if (msg.includes('띠')){
        var luckList = url.select('dl.lst_infor').get(0);
      
        var year1 = luckList.select('dt').get(0).text();
        var luck1 = luckList.select('dd').get(0).text();

        var year2 = luckList.select('dt').get(1).text();
        var luck2 = luckList.select('dd').get(1).text();

        var year3 = luckList.select('dt').get(2).text();
        var luck3 = luckList.select('dd').get(2).text();

        var year4 = luckList.select('dt').get(3).text();
        var luck4 = luckList.select('dd').get(3).text();

        var year5 = luckList.select('dt').get(4).text();
        var luck5 = luckList.select('dd').get(4).text();
    
        function sumYearLuck(year, luck){
            return year + ' - ' + luck + '\n';
        }

        replier.reply(luckParts[1] + ' 운세 - \n' + luckData + '\n\n' + sumYearLuck(year1, luck1) + sumYearLuck(year2, luck2) + sumYearLuck(year3, luck3) + sumYearLuck(year4, luck4) + year5 + ' - ' + luck5 + '\n\n출처 : 네이버 운세(브이)');
      } else{
        replier.reply(luckParts[1] + ' 운세 - \n' + luckData);
      }
      

    } catch (err){
      replier.reply(err);
      replier.reply('존재하는 운세가 없습니다.');
    }
  }