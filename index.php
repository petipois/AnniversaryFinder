<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Happy+Monkey|Pacifico" rel="stylesheet">
<title>Anniversary Gift Finder</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 center">
        <h1 class="center">Anniversary
            <span>      <p class="lead center">Gift Finder</p>
</span>
        </h1>
    
        <form>
        <div class="form-group">
          <!--<label for="">City</label>-->
          <input type="number" value="2018" name="anniversary" id="anniversary" class="form-control" placeholder="Eg. 2010, 1995">
          <button id="findGift" selected class="btn btn-block btn-success pink center"><h4>Find Gift</h4></button>
        </div>
        </form>
        <div class="jumbotron" id="theYear"></div>
        <div id="success" class="alert alert-success center" role="alert"></div>
        <div id="fail" class="alert alert-danger center" role="alert">Couldn't find a gift idea</div>
        <div id="noGift" class="alert alert-warning center" role="alert">Please enter a year</div>

        </div>

    </div>


</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="main.js"></script>
</body>
</html>