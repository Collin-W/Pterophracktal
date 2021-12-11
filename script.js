
$('#r-w-branch').val()
$('#r-l-branch').val()
$('#r-a-branch').val()


$('#l-w-branch').val()
$('#l-l-branch').val()
$('#l-a-branch').val()


$('#rotate').val()
$('#matrix').val()
$('#iterations').val()


    var myCanvas = document.getElementById("my_canvas");
    var ctx = myCanvas.getContext("2d");
    function draw(startX, startY, len, angle, branchWidth) {
        ctx.lineWidth = branchWidth;

        ctx.beginPath();
        ctx.save();

        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";

        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI/300);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();

        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0,0,0,0.8)";

        if(len < 10) {
            ctx.restore();
            return;
        }

        draw(0, -len, len*0.82, angle-45, branchWidth*0.82);
        draw(0, -len, len*0.82, angle+45, branchWidth*0.82);

         ctx.restore();
    }
    draw(400, 700, 120, 0, 10) 