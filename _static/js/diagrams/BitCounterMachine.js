// initialize SVG.js

// @ts-check
let exponentials = ["⁰","¹","²", "³", "⁴", "⁵"]

let blue = '#6089BA';
let lightBlue = '#B8D1EB';
let yellow = '#FBB927';
let darkBlue = '#143A55';
let lightGray = '#EBEBEB';
let darkGray = '#A6A6A6';
let white = '#FFFFFF';
let black = '#000000';

let borderWidth = 8;
let squareWidth = 100;
let exponantialWidth = 36;
let boundingBoxWidth = 20;

let bitCount = 4;
let bits = [];
let draw = null;
let plusButton = null;
let minusButton = null;
let screenWidth = squareWidth * (bitCount + 3) + borderWidth * (bitCount+3) + boundingBoxWidth*2;
let screenHeight = squareWidth + borderWidth + boundingBoxWidth*2;

function GetRomanNumeral(num)
{
  let values = [' ', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI','XII','XIII','XIV','XV'];
  return values[num];
}



function Box(row, column, display, bitCount, base, drawExponent = false, contentString = "")
{
  let isButton = true;
  let isEmpty = (bits[column] == ' ' || bits[column] == '0' || bits[column] == null);
  let primary = darkBlue;
  let secondary = lightBlue;
  let group = draw.group();
  let borderRect; 
  let insideRect; 
  let bottomRect;
  let text;
  let content = contentString;
  if (content == ""){
    // @ts-ignore
    content = String(bits[column]);
  }
  let tile = display.group();
  if (drawExponent){
    borderRect = draw.rect(exponantialWidth,exponantialWidth).fill(yellow).radius(exponantialWidth/2);
    //insideRect= draw.rect(exponantialWidth-2*borderWidth,exponantialWidth-2*borderWidth).fill(yellow).radius(borderWidth);
    borderRect.move(column * (borderWidth + squareWidth)-borderWidth/4, row * (borderWidth*3 + squareWidth)-borderWidth/4 );
    //insideRect.move(borderWidth + column * (borderWidth + squareWidth)-borderWidth/4, borderWidth +  row * (borderWidth*3 + squareWidth)-borderWidth/4);
    text = draw.text(function(add) {
        add.tspan(String(base));
  
        add.tspan(exponentials[bitCount-1-column]).dx("-0.16em"); 
    });
    let fontSize = (exponantialWidth) * (base == 2 ? 0.65 : 0.55);//0.9
    text.font({ fill: darkBlue, family: 'monospace', weight: 700, size: fontSize })
    .center(column * (borderWidth + squareWidth) +exponantialWidth*0.53-borderWidth/4, row * (borderWidth + squareWidth)+exponantialWidth/2-borderWidth/4)
    .attr({ 'user-select': 'none' });
  } else {
    borderRect = draw.rect(squareWidth,squareWidth).fill(primary).radius(2*borderWidth);
    insideRect= draw.rect(squareWidth-2*borderWidth,squareWidth-2*borderWidth).fill(secondary).radius(borderWidth);
    borderRect.move(borderWidth/2 + column * (borderWidth + squareWidth), borderWidth/2 +  row * (borderWidth*3 + squareWidth));
    insideRect.move(borderWidth*3/2 + column * (borderWidth + squareWidth), borderWidth*3/2 +  row * (borderWidth*3 + squareWidth));
    text = draw.text(content);
    let fontSize = (squareWidth - (2 * borderWidth)) * 0.8;
    text.font({ fill: darkBlue, family: 'monospace', weight: 700, size: fontSize })
    .center(borderWidth/2 +squareWidth/2+ column * (borderWidth + squareWidth), borderWidth/2 +squareWidth/2+  row * (borderWidth*3  + squareWidth))
    .attr({ 'user-select': 'none' });
    if (base == 2){
      bottomRect = draw.rect(squareWidth,squareWidth).fill(lightBlue).radius(2*borderWidth);
      bottomRect.move(borderWidth+ column * (borderWidth + squareWidth), borderWidth +  row * (borderWidth*3 + squareWidth));

    }
    tile.add(borderRect);
    tile.add(insideRect);
    tile.add(text);

    
  }
  
  
  if (base == 2 && !drawExponent){
      group.add(bottomRect);
  }
  
  group.add(borderRect);
  if (!drawExponent){
    group.add(insideRect);
  }
  
  group.add(text);
  
//   group.center(borderWidth/2 + squareWidth/2 + column * (borderWidth + squareWidth), borderWidth/2 + squareWidth/2 +  row * (borderWidth + squareWidth));
  if (isButton && contentString == "")
  {
    
    group.style('cursor', 'pointer');

    group.click(function() { 
        bits[column] = bits[column] === 0 ? 1 : 0;
        if (!drawExponent){
          tile.timeline().finish();

          tile.animate(20).dy(borderWidth/2).dx(borderWidth/2)   
            .animate(40).dy(-borderWidth/2).dx(-borderWidth/2)   ;        
        }
        setTimeout(function() { 
          UpdateDisplay(display);
        }, 60);
        
    });
    if (!drawExponent){
        group.mouseover(function() {
        insideRect.timeline().finish();
        insideRect.animate(300).attr({ fill: blue });
        });

        group.mouseout(function() {
        insideRect.timeline().finish();
        insideRect.animate(300).attr({ fill: secondary });
        });
    }
    
  }
  return group;
};
function Line(row, display, color)
{
  const borderRect = draw.rect(squareWidth * 7 + borderWidth * 5+ 2*boundingBoxWidth,borderWidth).fill(color);
  borderRect.move(-boundingBoxWidth, borderWidth/2 +  row * (borderWidth*3 + squareWidth)-borderWidth*2);
  return borderRect;
}
function GetResult(){
    let result = 0;
    for (let i = 0; i < bitCount; i++) {
        result += bits[bitCount-1-i] * Math.pow(2, i);
    }
    return result;
}
function Write(row, display)
{
  let group = draw.group();
  for (let i = 0; i < bitCount; i++) 
  {
    group.add(Box(0,i, display, bitCount, 2, false));
    group.add(Box(0,i, display, bitCount, 2, true));
  };
  
  var text = draw.text("=");
  let fontSize = (squareWidth - (2 * borderWidth)) * 0.8;
  
  text.font({ fill: darkBlue, family: 'monospace', weight: 700, size: fontSize});


  text.cx(borderWidth/2 + squareWidth/2 + bitCount * (borderWidth + squareWidth));
  text.cy( borderWidth/2 + squareWidth/2);
  text.attr({ 'user-select': 'none' });
  group.add(text);

  let resultGroup = draw.group();
  resultGroup.add(Box(0,0,display,2,10,  false, String(GetResult()).padStart(2, '0')[0]));
  resultGroup.add(Box(0,0,display,2,10, true));
  resultGroup.add(Box(0,1,display,2,10,  false, String(GetResult()).padStart(2, '0')[1]));
  resultGroup.add(Box(0,1,display,2,10, true));
  resultGroup.move(borderWidth/2 + (bitCount+1) * (borderWidth + squareWidth),borderWidth/2);
  group.add(resultGroup);
  return group;
};
function Background(color){
  const background = draw.rect(screenWidth, screenHeight).fill(color);
  background.move(-boundingBoxWidth,  -boundingBoxWidth);
  background.radius(boundingBoxWidth+2*borderWidth);

  return background;
}
function Backdrop(row, column, display){
  
  const borderRect = draw.rect(squareWidth,squareWidth).fill(blue).radius(2*borderWidth);
  borderRect.move(borderWidth/2 + column * (borderWidth + squareWidth), borderWidth*4/2 +  row * (borderWidth*3 + squareWidth));

return borderRect;
}

function UpdateDisplay(display)
{
  display.clear();

  display.add(Background(blue));

  display.add(Write(0, display));
  
  display.move(0,0);
  
  


 
}
export function render(el)
{
    el.style.userSelect = 'none';
    draw = SVG().addTo(el).size(screenWidth,screenHeight);
    
    for (let i = 0; i < bitCount; i++) {
      bits.push(Math.random() < 0.6 ? 0 : 1);
    }
    let display = draw.group()
    
    UpdateDisplay(display)

    //const showButton = document.getElementById('showButton');

    // if (showButton) {
    //     showButton.onclick = () => {
    //         UpdateDisplay(display);
    //         //draw.rect(100,100).fill("#fff").move(10,10);
    //     };
    // }

}



