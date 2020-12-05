document.getElementById("test").addEventListener("click", match);


function replaceAll (str, org, dest) {
    return str.split(org).join(dest);
}


function match() {
    className = document.getElementById("interest").innerHTML; // 사용자가 선택한 interest?

    // test용 선언
    let users = {
        "interest": "IoT",
        "gender": "F",
        "id": [17, 18, 19],
        "time": ["M9", "W9", "T9"]
    };
    let reads = [];

    $.ajax({
        url: 'read.php',
        type: 'POST',
        data: {
            className: className,
        },
        dataType: "json", //받을 때만 적용
        async: false,
        success: function (response) {
            reads = response[0];
        },
        error: function () {
            alert("error");
        }
    });

    let chatRooms = [];
    for (var i = 0; i < reads.length; i++) {
        let str = reads[i];
        str = replaceAll(str, "&quot;", '"');
        var c = JSON.parse(str);
        if (c['interest'] == users['interest']) {
            chatRooms.push(c);
        }
    }

    cRScore = carScore(users, chatRooms);
    console.log(cRScore);


    // matching 수행
    chatRooms, cRScore = sortList(chatRooms, cRScore); // 우선순위에 따라 정렬

    $.ajax({
        url: 'Chatting_.php',
        type: 'POST',
        traditional:true,
        data: {
            chatRoom:chatRooms,
        },

    });


    // list에 추가하는 코드
    if (chatRooms.length > 0) {
        for (var i = 0; i < chatRooms.length; i++) {
            var listadd = document.createElement("li");
            var cstr = i + "_" + ObjtoStr(chatRooms[i]);
            listadd.innerHTML = cstr;
            listadd.id = cstr; //id값 주기
            document.getElementById("myul").appendChild(listadd);
        }
    }
}

function ObjtoStr(c) { // 각 list element 별 id 생성
    var string = "";
    string = c['interest'] + c['gender'];
    return string;
}

function sortList(chatRooms, cRScore) { // 버블 소트 사용해봄
    var n = chatRooms.length;

    for (var i = n - 1; i > 0; i--) { // 0 ~ (i-1)
        for (var j = 0; j < i; j++) { // 크기 순이 아니면 교환
            if (cRScore[j]['prior'] > cRScore[j + 1]['prior']) { // piror점수에 따라 정렬
                var temp = cRScore[j];
                cRScore[j] = cRScore[j + 1];
                cRScore[j + 1] = temp;
                var tmp = chatRooms[j];
                chatRooms[j] = chatRooms[j + 1];
                chatRooms[j + 1] = tmp;
            } else if (cRScore[j]['prior'] == cRScore[j + 1]['prior']) { // prior점수 같은 경우
                if (cRScore[j]['noCount'] > cRScore[j + 1]['noCount']) { // 학번 점수 정렬
                    var temp = cRScore[j];
                    cRScore[j] = cRScore[j + 1];
                    cRScore[j + 1] = temp;
                    var tmp = chatRooms[j];
                    chatRooms[j] = chatRooms[j + 1];
                    chatRooms[j + 1] = tmp;
                } else if (cRScore[j]['noCount'] == cRScore[j + 1]['noCount']) { // 학번 점수 같은 경우
                    if (cRScore[j]['timeCount'] > cRScore[j + 1]['timeCount']) { // 시간표 점수 정렬
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

function carScore(users, chatRooms) {
    let priority = []
    for (var i = 0; i < chatRooms.length; i++) {
        var prior = 0
        let c = chatRooms[i];
        var c2 = c['gender'];
        var c3 = c['id'];
        var c4 = c['time'];

        if (c2 == users['gender']) prior += 1;

        let noCount = count(users['id'], c3); //0;
//        for (var j = 0; j < c3.length; j++) {
//            if (users['id'].includes(c3[j])) {
//                noCount += 1
//            }
//
//        }

        let timeCount = count(users['time'], c4); //0;
//        for (var k = 0; k < c4.length; k++) {
//            if (users['time'].includes(c4[k])) {
//                timeCount += 1
//            }
//        }

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
