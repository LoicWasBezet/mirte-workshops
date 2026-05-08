// initialize SVG.js


let blue = '#6089BA';
let lightBlue = '#B8D1EB';
let yellow = '#FBB927';
let darkBlue = '#143A55';
let lightGray = '#EBEBEB';
let darkGray = '#A6A6A6';
let white = '#FFFFFF';
let black = '#000000';

let borderWidth = 12;
let squareWidth = 100;

let number = 6;
let draw = null;

function GetRomanNumeral(num)
{
  let values = [' ', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI','XII','XIII','XIV','XV'];
  return values[num];
}

function PlusPress()
{
  number = Math.min(15,number+1);  
  UpdateDisplay();
};
function MinusPress()
{
  number = Math.max(0,number-1);  
  UpdateDisplay();
};

function Box(inhoud, row, column, buttonFunction)
{
  let isButton =(buttonFunction != 0 && buttonFunction != null);

  let primary =  darkBlue
  let secondary = isButton ? yellow : lightBlue
  let group = draw.group();
  const borderRect = draw.rect(squareWidth,squareWidth).fill(primary).radius(2*borderWidth);
  const insideRect = draw.rect(squareWidth-2*borderWidth,squareWidth-2*borderWidth).fill(secondary).radius(borderWidth);
  borderRect.move(borderWidth/2 + column * (borderWidth + squareWidth), borderWidth/2 +  row * (borderWidth + squareWidth));
  insideRect.move(borderWidth*3/2 + column * (borderWidth + squareWidth), borderWidth*3/2 +  row * (borderWidth + squareWidth));


  var text = draw.text(String(inhoud));
  let fontSize = (squareWidth - (2 * borderWidth)) * 0.9;
  text.font({ fill: primary, family: 'monospace', weight: 700, size: fontSize }).center(0,0).move(borderWidth/2 +squareWidth/2+ column * (borderWidth + squareWidth), borderWidth/2 +squareWidth/2+  row * (borderWidth + squareWidth));
//   group.add(borderRect.center(0,0));
//   group.add(insideRect.center(0,0));
//   group.add(text.center(0,0));
//   group.center(borderWidth/2 + squareWidth/2 + column * (borderWidth + squareWidth), borderWidth/2 + squareWidth/2 +  row * (borderWidth + squareWidth));
  if (isButton)
  {
    
    borderRect.style('cursor', 'pointer');

    borderRect.click(PlusPress);
    borderRect.mouseover(function() {
      insideRect.timeline().finish()
      insideRect.animate(300).attr({ fill: blue });
      PlusPress();
    });

    borderRect.mouseout(function() {
      insideRect.timeline().finish()
      insideRect.animate(300).attr({ fill: secondary });
    });
  }
  return;
};

function Write(inhoud, row, naam)
{
  let group = draw.group();
  for (let i = 0; i < inhoud.length; i++) 
  {
    group.add(Box(inhoud[i],row+1,i));
  };
  
  var text = draw.text(naam);
  let fontSize = (squareWidth - (2 * borderWidth)) * 0.8;
  
  text.font({ fill: yellow, family: 'monospace', weight: 700, size: fontSize });

  let textWidth = text.bbox().width;
  let textHeight = text.bbox().height;

  text.move(borderWidth + inhoud.length * (borderWidth + squareWidth) + textHeight, 100 + borderWidth/2 + squareWidth/2 +  row * (borderWidth + squareWidth));

  group.add(text);

  return group;
};

function UpdateDisplay(display)
{
  let num10 = String(number).padStart(4, ' ');
  let num2 = number.toString(2).padStart(4, ' ')
  let romanNumeral = GetRomanNumeral(number).padStart(4, ' ');
  display.clear();
  display.add(Write(num10,0, "BASE 10"));
  display.add(Write(num2,1, "BASE 2"));
  display.add(Write(romanNumeral,2, "ROMEINS"));
}
export function render(el)
{
        
    draw = SVG().addTo(el).size(squareWidth * 8 + borderWidth * 9,squareWidth * 4 + borderWidth * 5);

    let display = draw.group()
    UpdateDisplay(display)
    let plusButton = Box('+',3,3, PlusPress);
    let minusButton = Box('-',3,2, MinusPress);
  
}



