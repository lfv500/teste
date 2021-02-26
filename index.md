<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Churrascomentro V2</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='./style.css'>

</head>

<body>
    <div class="container">
        <h1> Churrascômentro </h1>        
        <input type="number" name="adultos" id="adultos" placeholder="Adultos">
        <input type="number" name="criancas" id="criancas" placeholder="Crianças">
        <input type="number" name="ducarao" id="duracao" placeholder="Duração">

        <button onclick="calcular()">Calcular</button>

        <div id="resultado">

        </div>
    </div>
    
    <script src='./script.js'></script>
</body>

</html>
