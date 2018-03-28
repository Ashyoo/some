<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>😑</title>
    <style>
      #my{
        color:#376956;
        font-family:"方正舒体";
        font-size:25px;
      }
    </style>
  </head>
  <body>
    <p id="my"></p>
    <div id="your" style="display:none">
      差不多了吧大头,该起床了
    </div>
  </body>
</html>
<script>
	var my = document.getElementById('my');
	var your = document.getElementById('your').innerHTML;
	var index = 0;
	function type(){
		my.innerText = your.substring(0,index++);
	}
	setInterval(type,350);
</script>
