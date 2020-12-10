<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
    
    <link href="SeCss.css" rel="stylesheet" />


    <title>Team Matching Project</title>
</head>

<body>

<?php
if(isset($_SESSION["id"])){
    echo '<p id="id_">'.$_SESSION['id'].'</p><button id="logout">logout</button>';
}else{
    echo '<p id="id_"></p><button id="logout">logout</button>';
}

?>
    
    <div class="container">
        <div class="row">
            <div id="loginPage" class="col-xs-12 col-md-12">
                <p><img id="logo" src="data/images/logo.png" alt="TTMS LOGO"></p>
                <table id="logintable">
                    <tr>
                        <td>ID &nbsp;&nbsp; </td>
                        <td><input type="text" id="ID" pattern="^([A-Za-z0-9]){6,15}"></td>
                    </tr>
                    <tr>
                        <td>PW &nbsp;&nbsp; </td>
                        <td><input type="password" id="password" pattern="^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*"></td>
                    </tr>
                </table><br>
                <button class="btn" value="login" id="login"> LOGIN </button>
                    <button class="btn" value="sign" id="signin"> SIGNIN </button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div id="Sign" class="col-xs-12 col-md-12">
                <table id="signtable">
                    <tr>
                        <td>Name &nbsp;&nbsp;</td>
                        <td><input type="text" id="name" ></td>
                    </tr>
                    <tr>
                        <td>E-mail &nbsp;&nbsp;</td>
                        <td><input type="email" id="mail"></td>
                    </tr>
                    <tr>
                        <td>ID &nbsp;&nbsp;</td>
                        <td><input type="text" id="signid"></td>
                        <td><button class="btn" value="check" id="check"> CHECK </button></td>
                    </tr>
                    <tr>
                        <td>PW &nbsp;&nbsp;</td>
                        <td><input type="password" id="signpw" ></td>
                    </tr>
                </table><br>
                <button class="btn" value="가입" id="join"> 가입 </button>
            </div>
        </div>
    </div>

    <div class="container">
            <div class="row">
                <!매칭을 위한 선택 화면>
                <div id="Choice" class="col-xs-12 col-md-12">
                    <table id="choicetable">
                        <tr>
                            <td><a href="Class.html"><button class="btn" value="CLASS" id="class"><img src="./data/images/down.png"><br>CLASS</button></a></td>
                            <td><a href="Gradu.html"><button class="btn" value="GRADUATION" id="gradu"><img src="./data/images/up.png"><br>GRADUATION</button></a>
                            </td>
                        </tr>
                    </table><br>
                </div>
            </div>
    </div>
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="Script.js"></script>
</body>

</html>