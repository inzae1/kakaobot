var numbers = {};

function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" ");
    
    if (cmd[0] == ".업다운시작") {
        if (numbers.hasOwnProperty(room)) {
            replier.reply("이미 업다운 게임이 진행중이에요.");
        } else {
            var max = Number(cmd[1]);
            if (isNaN(max)) max = 0;
            if (max <= 0) max = 100;
            numbers[room] = Math.floor(Math.random() * max) + 1;
            replier.reply("업다운 게임이 시작되었어요.\n범위 : 1 ~ " + max);
        }
    }

    if (cmd[0] == ".업다운종료") {
        if (numbers.hasOwnProperty(room)) {
            delete numbers[room];
            replier.reply("진행중인 업다운 게임을 종료했어요.");
        } else {
            replier.reply("진행중인 업다운 게임이 없어요.");
        }

    }

    if (cmd[0] == ".업다운도움말") {
        replier.reply(".업다운시작 [수] - 업다운 게임을 시작해요.\n" +
            ".업다운종료 - 진행 중인 업다운 게임을 멈줘요.\n" +
            ".업다운 [수] 해당 수가 정답인지 확인해요.");
    }

    if (cmd[0] == ".업다운") {
        var input = Number(cmd[1]);
        if (numbers.hasOwnProperty(room)){
            if (numbers[room] == input) {
                delete numbers[room];
                replier.reply(sender + "님이 정답을 맟주어, 업다운 게임이 종료되었어요.");
            } else if (numbers[room] > input) {
                replier.reply("업");
            } else if (numbers[room] < input){
                replier.reply("다운");
            }
        }
        
    }

}