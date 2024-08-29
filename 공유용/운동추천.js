function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var cmd = msg.split(" ")[0];
    var excise = msg.replace(cmd + " ", "");
    if (cmd == ".운동추천") {
        var data =  "https://www.youtube.com/results?search_query=" + excise + "+자세";

        if(excise.includes('등')){
            var backList  = ["컨벤셔널 데드리프트", "루마니안 데드리프트", "풀업", "랫풀다운", "케이블 시티드 로우", "벤트오버 바벨로우", "티바로우", "하이로우머신", "머신 시티드 로우", "원암 덤벨 로우", "원암 케이블 시티드 로우", "암 풀 다운", "풀오버", "케이블 풀오버", "덤벨 인클라인 로우"];
            var backIdx = Math.floor(Math.random() * backList.length);
            data =  "https://www.youtube.com/results?search_query=" + backList[backIdx].replace(/ /g, '+') + "+자세";

            replier.reply(sender + "님, [" + backList[backIdx] +"]는 어떠세요? \n자세 유튜브 주소 : " + data);

        } else if(excise.includes('가슴')){
            var chestList = ['바벨 플랫 벤치프레스', '덤벨 플라이', '덤벨 플랫 벤치프레스', '바벨 인클라인 벤치프레스', '덤벨 인클라인 벤치프레스', '머신 체스트 프레스', '딥스', '머신 플라이', '케이블 크로스오버 플라이', '덤벨 스퀴즈 벤치 프레스'];
            var chestIdx = Math.floor(Math.random() * chestList.length);
            data =  "https://www.youtube.com/results?search_query=" + chestList[chestIdx].replace(/ /g, '+') + "+자세";
            replier.reply(sender + "님, [" + chestList[chestIdx] +"]는 어떠세요? \n자세 유튜브 주소 : " + data);

        } else if(excise.includes('어깨') || (excise.includes('삼각근'))){
            var shoulderList = ["바벨 오버헤드 프레스", "덤벨 숄더 프레스", "업라이트 로우", "머신 숄더 프레스", "덤벨 프론트 레이즈","바벨 프론트 레이즈", "사이드 레터럴 레이즈", "아놀드 덤벨 프레스", "비하인드 넥프레스", "벤트오버 레이즈", "페이스 풀"];
            var shoulderIdx = Math.floor(Math.random() * shoulderList.length);
            data =  "https://www.youtube.com/results?search_query=" + shoulderList[shoulderIdx].replace(/ /g, '+') + "+자세";
            replier.reply(sender + "님, [" + shoulderList[shoulderIdx] +"]는 어떠세요? \n자세 유튜브 주소 : " + data);

        } else if(excise.includes('하체') || excise.includes('다리')){
            var legList = ["바벨 백스쿼트", "굿모닝 운동","바벨 힙 쓰러스트","글루트 킥백","바벨 프론트 스쿼트","힙 어브덕션","이너 싸이", "스티프 데드리프트", "런지", "머신 레그 익스텐션", "머신 레그 컬", "리버스 브이 스쿼트", "핵스쿼트", "피스톨 스쿼트", "불가리안 스플릿 스쿼트", "브이 스쿼트", "파워 레그 프레스"]
            var legIdx = Math.floor(Math.random() * legList.length);
            data =  "https://www.youtube.com/results?search_query=" + legList[legIdx].replace(/ /g, '+') + "+자세";
            replier.reply(sender + "님, [" + legList[legIdx] +"]는 어떠세요? \n자세 유튜브 주소 : " + data);

        }
    }
}