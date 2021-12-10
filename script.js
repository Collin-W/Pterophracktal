
    var myCanvas = document.getElementById("my_canvas");
    var ctx = myCanvas.getContext("2d");
    function draw(startX, startY, len, angle, branchWidth) {
        ctx.lineWidth = branchWidth;

        ctx.beginPath();
        ctx.save();

        ctx.strokeStyle = "purple";
        ctx.fillStyle = "green";

        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI/360);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();

        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0,0,0,0.8)";

        if(len < 10) {
            ctx.restore();
            return;
        }

        draw(0, -len, len*0.97, angle-1923, branchWidth*0.85);
        draw(0, -len, len*0.8, angle+1234, branchWidth*0.85);

         ctx.restore();
    }
    draw(400, 600, 120, 0, 10) 