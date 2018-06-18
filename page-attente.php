<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="stylesheet" href="styles.css">

    <title>Paca Plafonds</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Cabin:700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/grayscale.min.css" rel="stylesheet">

</head>

<body id="page-top">
    <div class="bck-full">
        <div id="page-attente" class="full">
            <h1>PACA Plafonds</h1>
        </div>
        <p class="full-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, accusamus dolorum neque, cupiditate nesciunt
            tempora alias sint nulla quaerat magnam dolor aut atque ipsam porro numquam nemo vitae cumque!</p>

        <span class="full-3">
            <span id="countdown-j"></span>
            <span id="countdown-h"></span>
            <span id="countdown-m"></span>
            <span id="countdown-s"></span>
            <span id="countdown-finished"></span>
        </span>



        <script>
            var countDownDate = new Date("Jun 30, 2018 15:37:25").getTime();

            var x = setInterval(function () {

                var now = new Date().getTime();

                var distance = countDownDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("countdown-j").innerHTML = days + " jours";
                document.getElementById("countdown-h").innerHTML = hours + " heures";
                document.getElementById("countdown-m").innerHTML = minutes + " minutes";
                document.getElementById("countdown-s").innerHTML = seconds + " secondes";

                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdown-finished").innerHTML = "Le site va être en ligne d'une minute à l'autre !";
                }
            }, 1000);
        </script>


    </div>

</body>

</html>