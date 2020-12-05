document.getElementById("Submit2").addEventListener("click", match);


function replaceAll(str, org, dest) {
    return str.split(org).join(dest);
}


function match() {

    // get user checks
    var score_ = $('input:radio[name="chk_score"]:checked').val();
    var gender_ = $('input:radio[name="chk_gender"]:checked').val();
    //강의,성별 정보 받음
    var id_list = []
    $('input[name="chk_ID"]:checked').each(function () {
        var test = $(this).val(); //선택된 학번 하나씩
        id_list.push(test);
    });
    var time_list = []
    $('input[name="chk_time"]:checked').each(function () {
        var temp = $(this).val(); //선택된 시간들 하나씩
        time_list.push(temp);
    });

    // user info
    let users = {
        "score": score_,
        "gender": gender_,
        "id": id_list,
        "time": time_list
    };


    let reads = [];
    $.ajax({
        url: 'read.php',
        type: 'POST',
        data: {},
        dataType: "json", //받을 때만 적용
        async: false,
        success: function (response) {
            reads = response[0];
        },
        error: function () {
            alert("error");
        }
    });

    let chatRooms = new Array();
    for (var i = 0; i < reads.length; i++) {
        let str = reads[i];
        str = replaceAll(str, "&quot;", '"');
        var c = JSON.parse(str);
        if (c['score'] == users['score']) {
            chatRooms.push(c);
        }
    }

    cRScore = carScore(users, chatRooms);
    console.log(cRScore);


    // sorting for matching
    chatRooms, cRScore = sortList(chatRooms, cRScore); // 우선순위에 따라 정렬

    $.ajax({
        url: 'Chatting_.php',
        type: 'POST',
        traditional: true,
        data: {
            chatRoom: chatRooms,
        },

    });
    
}

function ObjtoStr(c) { // 각 list element 별 id 생성
    var string = "";
    string = c['score'] + c['gender'];
    return string;
}

function sortList(chatRooms, cRScore) { // 버블 소트 사용해봄
    var n = chatRooms.length;

    for (var i = n - 1; i > 0; i--) { // 0 ~ (i-1)
        for (var j = 0; j < i; j++) { // 크기 순이 아니면 교환
            if (cRScore[j]['prior'] < cRScore[j + 1]['prior']) { // piror점수에 따라 정렬
                var temp = cRScore[j];
                cRScore[j] = cRScore[j + 1];
                cRScore[j + 1] = temp;
                var tmp = chatRooms[j];
                chatRooms[j] = chatRooms[j + 1];
                chatRooms[j + 1] = tmp;
            } else if (cRScore[j]['prior'] == cRScore[j + 1]['prior']) { // prior점수 같은 경우
                if (cRScore[j]['noCount'] < cRScore[j + 1]['noCount']) { // 학번 점수 정렬
                    var temp = cRScore[j];
                    cRScore[j] = cRScore[j + 1];
                    cRScore[j + 1] = temp;
                    var tmp = chatRooms[j];
                    chatRooms[j] = chatRooms[j + 1];
                    chatRooms[j + 1] = tmp;
                } else if (cRScore[j]['noCount'] == cRScore[j + 1]['noCount']) { // 학번 점수 같은 경우
                    if (cRScore[j]['timeCount'] < cRScore[j + 1]['timeCount']) { // 시간표 점수 정렬
                        var temp = cRScore[j];
                        cRScore[j] = cRScore[j + 1];
                        cRScore[j + 1] = temp;
                        var tmp = chatRooms[j];
                        chatRooms[j] = chatRooms[j + 1];
                        chatRooms[j + 1] = tmp;
                    }
                }
            }

        }
    }

    return chatRooms, cRScore;
}

function carScore(users, chatRooms) { // calculate priority score
    let priority = []
    for (var i = 0; i < chatRooms.length; i++) {
        var prior = 0
        let c = chatRooms[i];
        var c2 = c['gender'];
        var c3 = c['id'];
        var c4 = c['time'];

        if (c2 == users['gender']) prior += 1;

        let noCount = count(users['id'], c3); //studentid

        let timeCount = count(users['time'], c4); // time available

        priority.push({
            prior,
            noCount,
            timeCount
        });
    }

    return priority;
}

function count(usersList, cN) {
    let Count = 0;
    for (var j = 0; j < cN.length; j++) {
        if (usersList.includes(cN[j])) {
            Count += 1
        }
    }

    return Count;
}