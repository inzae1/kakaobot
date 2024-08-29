const FS = FileStream, path = '/sdcard/own.json';
if(!FS.read(path)) FS.write(path, '[]');
var chat = JSON.parse(FS.read(path));

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg== '.오운완'){
        var num = 0;
        num += 1;
        replier.reply(packageName + sender  + '님이 오늘 운동 완료하셨습니다!(최고) \n' + sender + '님의 이번 달 총 운동 횟수는 ' + num + '회 입니다.');
    }
}

if (msg.includes('충북식당')){
    replier.reply(sender + '님, 나가')
}