function onNotificationPosted(sbn, sm) {
    var packageName = sbn.getPackageName();
    if (!packageName.startsWith("com.kakao.tal")) return;
    var actions = sbn.getNotification().actions;
    if (actions == null) return;
    var userId = sbn.getUser().hashCode();
    for (var n = 0; n < actions.length; n++) {
        var action = actions[n];
        if (action.getRemoteInputs() == null) continue;
        var bundle = sbn.getNotification().extras;

        var msg = bundle.get("android.text").toString();
        var sender = bundle.getString("android.title");
        var room = bundle.getString("android.subText");
        if (room == null) room = bundle.getString("android.summaryText");
        var isGroupChat = room != null;
        if (room == null) room = sender;
        var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, action, room, false, "");
        var icon = bundle.getParcelableArray("android.messages")[0].get("sender_person").getIcon().getBitmap();
        var image = bundle.getBundle("android.wearable.EXTENSIONS");
        if (image != null) image = image.getParcelable("background");
        var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
        com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(packageName, room, action);
        if (this.hasOwnProperty("responseFix")) {
            responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, userId != 0);
        }
    }
}

FS = FileStream;
path = "sdcard/File/exeLevel";
all = "\u200b".repeat(500);

levelUp = 3;
clearOwner = ["인재"];

function responseFIx(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    // 파일이 없으면 초기화
    if (FS.read(path) == null) FS.write(path, "{}");

    if (msg== '.오운완'){
        var rd = JSON.parse(FS.read(path)); // JSON 파일을 읽음

        if (rd[room] == undefined) rd[room] = {};

        // 사용자 정보 초기화
        if (rd[room][sender] == undefined) {
            rd[room][sender] = {
                "excise": 0,
                "level": 0,
                "lastExciseDate": ""
            };
        }

        // 현재 날짜를 '년-월-일' 형식으로 저장
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var day = ('0' + currentDate.getDate()).slice(-2);
        rd[room][sender]["lastExciseDate"] = year + "년 " + month + "월 " + day + "일";

        var bklv = rd[room][sender]["level"]; // 이전 레벨 저장

        rd[room][sender]["excise"]++; // 운동수 수 증가
        rd[room][sender]["level"] = Math.floor(rd[room][sender]["excise"] / levelUp); // 레벨 계산

        var nowlv = rd[room][sender]["level"]; // 현재 레벨

        if (nowlv != bklv) {
            replier.reply("[!] " + sender + " 님의 레벨이 올랐습니다!\n현재 레벨 : " + nowlv + "\n운동 : " + rd[room][sender]["excise"] + "회");
        }

        // 변경된 내용을 파일에 저장
        FS.write(path, JSON.stringify(rd));

        replier.reply(sender  + '님이 오늘 운동 완료하셨습니다!(최고) \n' + sender + '님의 이번 달 총 운동 횟수는 ' + rd[room][sender]["excise"] + '회 입니다.');
        
    }

    // "내 운동" 명령어 처리
if (msg == ".운동정보") {
    rd = JSON.parse(FS.read(path)); // JSON 파일을 읽어옴

    if (rd[room][sender]) {
        var myChats = rd[room][sender]["excise"]; // 사용자의 운동 횟수
        var myLevel = rd[room][sender]["level"]; // 사용자의 레벨

        var result = [];

        for (var i in rd[room]) {
            result.push({
                name: i,
                excise: rd[room][i]["excise"],
                level: rd[room][i]["level"]
            });
        }

        
        result.sort(function(a, b) { 
            return b.excise - a.excise; 
        });

        var score = 0;
        for (var k = 0; k < result.length; k++) {
            if (result[k].name == sender) {
                score = k + 1;
                break;
            }
        }

        replier.reply(sender + " (" + (score == 0 ? "1" : score) + "위)\n레벨 : " + myLevel + "\n운동 : " + myChats + "회");
    } else {
        replier.reply("정보를 찾을 수 없습니다.");
    }
}

    // ".운동순위" 명령어 처리
if (msg == ".운동순위") {
    rd = JSON.parse(FS.read(path)); // JSON 파일을 읽어옴

    result = [];

    for (i in rd[room]) {
        var lastExciseDate = rd[room][i]["lastExciseDate"] || "정보 없음"; // 최근 운동 일자
        var exciseCount = rd[room][i]["excise"]; // 운동 횟수
        var level = rd[room][i]["level"]; // 레벨
        var entry = i + "\n레벨 : " + level + "\n운동 : " + exciseCount + "회\n최근 운동 일자 : " + lastExciseDate;
        
        result.push({ entry: entry, excise: exciseCount });
    }

    result.sort(function(a, b) { 
        return b.excise - a.excise; // 내림차순 정렬
    });

    for (var j = 0; j < result.length; j++) {
        result[j] = (j + 1) + "위 | " + result[j].entry;
    }

    replier.reply(room + "\n🏅이달의 운동순위 " + "\n\n" + result.join("\n\n"));
}

    // ".채팅초기화" 명령어 처리
    if (msg == ".운동초기화") {
        if (clearOwner.indexOf(sender) != -1) {
            FS.write(path, "{}");
            replier.reply("[!] 초기화 되었습니다.");
        } else {
            replier.reply("[!] 지정된 관리자만 채팅을 초기화 할 수 있습니다.");
        }
    }
}