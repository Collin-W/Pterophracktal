



$("#render").click(() => {

    
let rightBranchWidth = $('#r-w-branch').val()
let rightBranchLength = $('#r-l-branch').val()
let rightBranchAngle = $('#r-a-branch').val()


let leftBranchWidth = $('#l-w-branch').val()
let leftBranchLength = $('#l-l-branch').val()
let leftBranchAngle = $('#l-a-branch').val()


let rotate = $('#rotate').val()
// let matrix = $('#matrix').val()
// let iteration = $('#iterations').val()


console.log('rbw ' + rightBranchWidth)
console.log('rbl ' + rightBranchLength)
console.log('rba ' + rightBranchAngle)
console.log('lbw ' + leftBranchWidth)
console.log('lbl ' + leftBranchLength)
console.log('lba ' + leftBranchAngle)
console.log('rotate ' + rotate )
console.log()

    var myCanvas = document.getElementById("my_canvas");
    var wrapper = $('#fractal-wrapper')

myCanvas.width = window.innerWidth/1.4
myCanvas.height = window.innerHeight
console.log(myCanvas)

    var ctx = myCanvas.getContext("2d");
    function draw(startX, startY, len, angle, branchWidth) {
        ctx.lineWidth = branchWidth;

        ctx.beginPath();
        ctx.save();

        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";

        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI/rotate);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();

        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0,0,0,0.8)";

        if(len < 10) {
            ctx.restore();
            return;
        }

        draw(0, -len, len* parseFloat(rightBranchLength), angle- parseFloat(rightBranchAngle), branchWidth* parseFloat(rightBranchWidth))
        //console.log(draw(0, -len, len* parseFloat( rightBranchLength, angle- parseFloat( rightBranchAngle, branchWidth* parseFloat( rightBranchWidth))
        draw(0, -len, len*  parseFloat(rightBranchLength), angle+  parseFloat(rightBranchAngle), branchWidth*  parseFloat(rightBranchWidth))
        // draw(0, -len, len*0.82, angle-45, branchWidth*0.82);
        // draw(0, -len, len*0.82, angle+45, branchWidth*0.82);

         ctx.restore();
    }

    console.log(screen.width + ' widow width')
    if(screen.width <= 375){
        console.log('phone detected')
        draw(350, 950, 120, 0, 0)
    } else {
        //assume it is desktop
        draw(670, 800, 150, 0, 0)
    }

    
    
    // draw(350, 950, 120, 0, 0) // works on 375px width mobile screens 
    // draw(670, 800, 150, 0, 0) //works on desktop
    // draw(400, 600, 120, 0, 10) 

})
