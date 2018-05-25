
paper.view.viewSize.width = 400;
paper.view.viewSize.height = 400;
paper.view.autoUpdate = false;

context = canvas.getContext('2d');

function drawFlower1(petalColor,petalShape,ringShape,circleColor) {

    // green leaves
    nleaves = 50;
    for (var x=0;x<nleaves;x++){
        var ang = x*(360/nleaves)+(6*Math.random()-3);
        var cx = 200+50*Math.cos(ang*Math.PI/180);
        var cy = 200+50*Math.sin(ang*Math.PI/180);
        var leaf = new Path.Ellipse({
            center: [cx,cy],
            size: [90,8],
            fillColor: 'green',
            rotation: ang,
        });
        leaf.flatten(5);
    }

    colorRatio = petalColor/9;
    pcolor = 325+colorRatio*10;
    petalRatio = petalShape/9;
    npetals = Math.round(11+petalRatio*9);
    petalSize1 = [100,30-15*petalRatio];
    petalSize2 = [75,15-7*petalRatio];
    // larger petals
    for (var x=0;x<npetals;x++){
        var ang = x*(360/npetals)+(6*Math.random()-3);
        var cx = 200+50*Math.cos(ang*Math.PI/180);
        var cy = 200+50*Math.sin(ang*Math.PI/180);
        var petal = new Path.Ellipse({
            center: [cx,cy],
            size: petalSize1,
            fillColor: 'red',
            rotation: ang,
            shadowColor: new Color(0.9,0.9,0.9),
            shadowBlur: 8,
            shadowOffset: new Point(0, 0)
        });
        petal.fillColor.hue = pcolor + 5*Math.random()-2.5;
        petal.fillColor.brightness += 0.1*Math.random()-0.05;
        new Path.Ellipse({
            center: [cx,cy],
            size: [80,3],
            fillColor: new Color(1,1,1,0.3),
            rotation: ang,
        });
    }

    // smaller petals
    for (var x=0;x<npetals;x++){
        var ang = x*(360/npetals)+360/(npetals*2)+(6*Math.random()-3);
        var cx = 200+25*Math.cos(ang*Math.PI/180);
        var cy = 200+25*Math.sin(ang*Math.PI/180);
        var petal = new Path.Ellipse({
            center: [cx,cy],
            size: petalSize2,
            fillColor: 'red',
            rotation: ang,
            shadowColor: new Color(0.2,0.2,0.2),
            shadowBlur: 8,
            shadowOffset: new Point(0, 0)
        });
        petal.fillColor.hue = pcolor + 5*Math.random()-2.5;;
        petal.fillColor.brightness -= 0.1*Math.random()-0.05;
        new Path.Ellipse({
            center: [cx,cy],
            size: [50,2],
            fillColor: new Color(0,0,0,0.3),
            rotation: ang,
        });
    }

    // inner ring
    var ringRatio = ringShape/9;
    var nring = Math.round(15+30*ringRatio);
    var ringSize = [12+11*ringRatio,15-12*ringRatio];
    var rcolor = new Color(225/255,229/255,20/255,0.95);
    for (var x=0;x<nring;x++){
        var ang = x*(360/nring);
        var cx = 200+20*Math.cos(ang*Math.PI/180)+(1*Math.random()-0.5);
        var cy = 200+20*Math.sin(ang*Math.PI/180)+(1*Math.random()-0.5);
        var ring = new Path.Ellipse({
            center: [cx,cy],
            size: ringSize,
            fillColor: rcolor,
            rotation: ang
        });
    }

    // inner circle
    var circleRatio = circleColor/9;
    var icircle = new Path();
    icircle.fillColor = new Color(104/255,50/255,14/255);
    icircle.fillColor.hue += circleRatio*35;
    for (var x=0;x<100;x++){
        var ang = x*(360/60);
        var cx = 200+18*Math.cos(ang*Math.PI/180)+(1*Math.random()-0.5);
        var cy = 200+18*Math.sin(ang*Math.PI/180)+(1*Math.random()-0.5);
        icircle.add(new Point(cx,cy));
    }
    icircle.closePath();
    icircle.shadowColor = new Color(0.1,0.1,0.1);
    icircle.shadowBlur = 5;
    icircle.shadowOffset = new Point(0,0);
    for (var xr=1;xr<=16;xr=xr+3){
        var ndots = 30-25*(16-xr)/16;
        var rangbeg = Math.PI*Math.random();
        for (var x=1;x<ndots+1;x++){
            rang = rangbeg+x*2*Math.PI/ndots+0.1*Math.random();
            rrad = xr+0.1*Math.random();
            var cx = 200+rrad*Math.cos(rang);
            var cy = 200+rrad*Math.sin(rang);
            var spot = new Path.Ellipse({
                center: [cx,cy],
                size: [3,3],
                fillColor: icircle.fillColor
            });
            spot.fillColor.hue += 5*Math.random()-2.5;
            spot.fillColor.brightness += 0.3-0.15*Math.random();//(1-(rrad/15));
            spot.fillColor.alpha = 0.2;
        }
    }
    /*for (var x=0;x<200;x++){
        rang = 2*Math.random()*Math.PI;
        rrad = 15*Math.random();
        var cx = 200+rrad*Math.cos(rang);
        var cy = 200+rrad*Math.sin(rang);
        var spot = new Path.Ellipse({
            center: [cx,cy],
            size: [3,3],
            fillColor: icircle.fillColor
        });
        spot.fillColor.hue += 5*Math.random()-2.5;
        spot.fillColor.brightness += 0.3*Math.random();//(1-(rrad/15));
        spot.fillColor.alpha = 0.2;
    }*/
}

function download_img(petalColor,petalShape,ringShape,circleColor,x){
    var link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'flower1_'+petalColor+petalShape+ringShape+circleColor+'_'+x+'.png';
    link.click();
}

/*
drawFlower1(5,1,1,1);
view.update();
download_img(5,1,1,1,1);

project.activeLayer.removeChildren();

drawFlower1(5,9,9,9);
view.update();
download_img(5,9,9,9,1);
*/

drawFlower1(c,x,y,z);