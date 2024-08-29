

function getSongByLyric(name) {
    var url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=노래가사검색+" + name.replace(/ /g, "%20");
    var data = org.jsoup.Jsoup.connect(url).get();
    var titles = data.select('strong.music_title');
    var singers = data.select('span.sub_text');

    var result = '';
    result += '[' + data.select('strong.info_title').get(0).text() + ']\n\n';

    var number = titles.size(); // 가져온 제목의 개수

    for (var i = 0; i < number; i++) {
        result += '\n' + (i + 1) + '. 제목 : ' + titles.get(i).text();
        result += '\n가수 : ' + singers.get(i).text();
        if (i < number - 1) {
            result += '\n';
        }
    }

    return result;
}


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {  
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");
    if (cmd == ".가사") {
        try{
            var result = getSongByLyric(data);
            replier.reply(result + '\n\n 출처 : 네이버 검색(음표)');
        } catch(err){
            replier.reply("검색 결과가 없습니다.");
        }
    }
}
