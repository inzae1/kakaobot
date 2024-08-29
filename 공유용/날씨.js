
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
        var cmd = msg.split(" ")[0];
        var rootData = msg.replace(cmd + " ", "");
        if (cmd == ".날씨") {
            try{
                function removeKoreanCharacters(str) {
                    // 한글 문자 범위를 정규 표현식으로 정의
                    const koreanRegex = /[\uAC00-\uD7AF]/g;

                    // 정규 표현식을 사용하여 한글 문자 제거
                    return str.replace(koreanRegex, '');
                }
                var location = rootData;
                var data = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + location + "+날씨").get();
                var nowTemp = data.select('div.temperature_text').get(0);
                nowTemp = removeKoreanCharacters(nowTemp.select('strong').get(0).text());
                
                var area = data.select('div.title_area').get(0);
                area = area.select('h2.title').get(0).text();
                
                try{
                    var weather = data.select('span.weather').get(0).text();
                    var bodyTemp = data.select('dd.desc').get(0).text();
                    var humidity = data.select('dd.desc').get(1).text();
                    var dust = data.select('span.txt').get(0).text();
                    var smallDust = data.select('span.txt').get(1).text();

                    var emo = '(해)';
                    if (weather.includes('흐림')){
                        emo = '(구름)';
                    } else if(weather.includes('비')){
                        emo = '(비)';
                    } else if(weather.includes('눈')){
                        emo = '(눈)';
                    }

                    replier.reply('측정 위치 : ' + area +'\n현재온도 : ' + nowTemp + 'C' + '\n현재날씨 : ' + weather + emo + '\n체감온도 : ' +bodyTemp + 'C' + '\n습도 : '+ humidity + '\n미세먼지 : ' + dust + '\n초미세먼지 : ' + smallDust); 


                } catch(err){
                    weather = data.select('p.summary').get(0).text();
                    humidity = data.select('dd.desc').get(3).text();
                    replier.reply('측정 위치 : ' + area +'\n현재온도 : ' + nowTemp + 'C' + '\n현재날씨 : ' + weather + '\n습도 : '+ humidity); 
                }
            } catch (err){
                replier.reply('존재하는 지역이 아닙니다.');
            }
        }
}