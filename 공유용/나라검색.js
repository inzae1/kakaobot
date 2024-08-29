Jsoup = org.jsoup.Jsoup;

Lw = "\u200b".repeat(500);

function response(room, msg, sender, _, replier) {
    if (msg.startsWith(".국가 ")) {
        try {
            let name = msg.substr(4).trim();
            let sitename = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=" + name;
            let site = Jsoup.connect(sitename).get();
            let title = site.select("dl.info_naflag").get(0).text().replace(" 수도", "\n\n수도:").replace(" 국가", "\n국가:");
            let info = site.select("dl.lst_nadata").get(0).text().replace("언어", "언어:").replace(" 면적", "\n면적:").replace(" 인구", "\n인구:").replace(" GDP", "\nGDP:").replace(" 기후", "\n기후:").replace(" 종교", "\n종교:").replace(" 역사", "\n역사:").replace(" 1인당 GDP", "\n1인당 GDP:").replace("더보기", "");

            replier.reply("[" + name + "국가 정보입니다]\n\n" + title + "\n" + Lw + "\n" + info + "\n\nㄴ자세히 보기: " + sitename);

        } catch (_) {
            replier.reply("해당 국가를 찾을 수 없습니다.");
        }
    }
}