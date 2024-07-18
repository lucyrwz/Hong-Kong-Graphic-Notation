//let cursorImg;

var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7; 
var song8;
var song9;
var song10; 
var song11;
var song12;
var song125;
var song13;
var song14;
var song15;
var song16;
var song17;
var song18;
var song19;
var song20;
var song21;
var song22;
var song23;
var song24;
var song25;
var song26;
var song27;
var song28;
var song29;
var song30;
var song31;
var song32;
var song33;
var song34;
var song36;
var song37;
var song38;
var song39;
var song40;
var song41;
var song42;
var song43;
var song44;
var song45;
var song46;
var song47;
var song48;
var song49;
var song50;
var song51;
var song52;
var song53;
var song54;
var song55;
var song56;
var song57;
var song58;
var song59;
var song60;
var songA1;
var songA2;
var songB1;
var songB2;
var songB3;
var songB4;
var songB5;
var songB6;
var songB7;
var songB8;
var songB9;
var songC1;
var songC2;
var songC3;
var songC4;
var songD1;
var songD2;
var songD3;
var songD4;
var songE1;
var songE2;
var songE3;
var songE4;
var songE5;
var songE6;
var bg;


function preload() {
  song1 = loadSound("1.wav");
  song2 = loadSound("2.wav"); 
  song3 = loadSound("3.wav");
  song4 = loadSound("4.wav"); 
  song5 = loadSound("5.wav"); 
  song6 = loadSound("6.wav"); 
  song7 = loadSound("7.wav"); 
  song8 = loadSound("8.wav"); 
  song9 = loadSound("9.wav"); 
  song10 = loadSound("10.wav"); 
  song11 = loadSound("11.wav");
  song12 = loadSound("12.wav");
  song125 = loadSound("125.wav");
  song13 = loadSound("13.wav"); 
  song14 = loadSound("14.wav"); 
  song15 = loadSound("15.wav");
  song16 = loadSound("16.wav"); 
  song17 = loadSound("17.wav"); 
  song18 = loadSound("18.wav"); 
  song19 = loadSound("19.wav"); 
  song20 = loadSound("20.wav");
  song21 = loadSound("21.wav"); 
  song22 = loadSound("22.wav"); 
  song23 = loadSound("23.wav"); 
  song24 = loadSound("24.wav"); 
  song25 = loadSound("25.wav"); 
  song26 = loadSound("26.wav"); 
  song27 = loadSound("27.wav"); 
  song28 = loadSound("28.wav"); 
  song29 = loadSound("29.wav"); 
  song30 = loadSound("30.wav"); 
  song31 = loadSound("31.wav"); 
  song32 = loadSound("32.wav"); 
  song33 = loadSound("33.wav"); 
  song34 = loadSound("34.wav"); 
  song35 = loadSound("35.wav"); 
  song36 = loadSound("36.wav"); 
  song37 = loadSound("37.wav"); 
  song38 = loadSound("38.wav"); 
  song39 = loadSound("39.wav"); 
  song40 = loadSound("40.wav"); 
  song41 = loadSound("41.wav");
  song42 = loadSound("42.wav");
  song43 = loadSound("43.wav"); 
  song44 = loadSound("44.wav"); 
  song45 = loadSound("45.wav"); 
  song46 = loadSound("46.wav"); 
  song47 = loadSound("47.wav"); 
  song48 = loadSound("48.wav"); 
  song49 = loadSound("49.wav"); 
  song50 = loadSound("50.wav");
  song51 = loadSound("51.wav");
  song52 = loadSound("52.wav"); 
  song53 = loadSound("53.wav"); 
  song54 = loadSound("54.wav"); 
  song55 = loadSound("55.wav"); 
  song56 = loadSound("56.wav"); 
  song57 = loadSound("57.wav"); 
  song58 = loadSound("58.wav"); 
  song59 = loadSound("59.wav"); 
  song60 = loadSound("60.wav");
  songA1 = loadSound("A1.mp3");
  songA2 = loadSound("A2.mp3"); 
  songB1 = loadSound("B1.mp3");
  songB2 = loadSound("B2.mp3");
  songB3 = loadSound("B3.mp3");
  songB4 = loadSound("B4.mp3");
  songB5 = loadSound("B5.mp3");
  songB6 = loadSound("B6.mp3");
  songB7 = loadSound("B7.mp3");
  songB8 = loadSound("B8.mp3");
  songB9 = loadSound("B9.mp3");
  songC1 = loadSound("C1.mp3");
  songC2 = loadSound("C2.mp3");
  songC3 = loadSound("C3.mp3");
  songC4 = loadSound("C4.mp3");
  songD1 = loadSound("D1.mp3");
  songD2 = loadSound("D2.mp3");
  songD3 = loadSound("D3.mp3");
  songD4 = loadSound("D4.mp3");
  songE1 = loadSound("E1.mp3");
  songE2 = loadSound("E2.mp3");
  songE3 = loadSound("E3.mp3");
  songE4 = loadSound("E4.mp3");
  songE5 = loadSound("E5.mp3");
  songE6 = loadSound("E6.mp3");
  bg = loadImage ("HKMAP.jpg");
  
  
  //cursorImg = loadImage("mouse4.png");
  
  
  songs = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song125,song13,song14,song15,song16,song17,song18,song19,song20,song21,song22,song23,song24,song25,song26,song27,song28,song29,song30,song31,song32,song33,song34,song35,song36,song37,song38,song39,song40,song41,song42,song43,song44,song45,song46,song47,song48,song49,song50,song51,song52,song53,song54,song55,song56,song57,song58, song59, song60,songA1,songA2,songB1,songB2,songB3,songB4,songB5,songB6,songB7,songB8,songB9,songC1,songC2,songC3,songC4,songD1,songD2,songD3,songD4,songE1,songE2,songE3,songE4,songE5,songE6];
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.doubleClicked(stopAllSongs);
  frameRate(10);
  
   //noCursor();
}

function translateX(position) {
  ratio = position/1512
  return ratio * windowWidth
}

function stopAllSongs() {
  songs.forEach(function(song) {
    if (song.isPlaying())
        {
          song.stop();
        } 
  })
  
}
function translateY(position) {
  ratio = position/982
  return ratio * windowHeight
}

function draw() {

  background(bg);
  
  //image(cursorImg, mouseX, mouseY);

//1
  
  if (mouseX < translateX(120) && mouseX > translateX(105) && mouseY < translateY(622) && mouseY > translateY(595)){
    
    
    text("♫", mouseX, mouseY)
    if (!song1.isPlaying()){
      song1.play();
    }
  }
 
//2

  if (mouseX < translateX(134) && mouseX > translateX(100) && mouseY < translateY(714) && mouseY > translateY(703)){
    text("♫", mouseX, mouseY)
    if (!song2.isPlaying()){
      song2.play();
    }
  }
      

//3
 
  if (mouseX < translateX(215) && mouseX > translateX(182) && mouseY < translateY(775) && mouseY > translateY(762))
    {
    text("♫", mouseX, mouseY)
    if (!song3.isPlaying()){
      song3.play();
    }
  }
      
    
//4
  
  if (mouseX < translateX(144) && mouseX > translateX(124) && mouseY < translateY(849) && mouseY > translateX(811)){
    
    text("♫", mouseX, mouseY)
    if (!song4.isPlaying()){
      song4.play();
    }
  }
  
  
//5

  if (mouseX < translateX(127) && mouseX > translateX(90) && mouseY < translateY(899) && mouseY > translateY(882)){
    text("♫", mouseX, mouseY)
    if (!song5.isPlaying()){
      song5.play();
    }
  }
      
  
//6

  if (mouseX < translateX(159) && mouseX > translateX(144) && mouseY < translateY(958) && mouseY > translateY(906)){
    text("♫", mouseX, mouseY)
    if (!song6.isPlaying()){
      song6.play();
    }
  }
      
    
//7

  if (mouseX < translateX(239) && mouseX > translateX(222) && mouseY < translateY(886) && mouseY > translateY(842)){
    text("♫", mouseX, mouseY)
    if (!song7.isPlaying()){
      song7.play();
    }
  }
      
//8

  if (mouseX < translateX(332) && mouseX > translateX(305) && mouseY < translateY(937) && mouseY > translateY(903)){
    text("♫", mouseX, mouseY)
    if (!song8.isPlaying()){
      song8.play();
    }
  }
  
//9
  
  if (mouseX < translateX(292) && mouseX > translateX(258) && mouseY < translateY(80) && mouseY > translateY(59)){
    text("♫", mouseX, mouseY)
    if (!song9.isPlaying()){
      song9.play();
    }
  }
      
//10
  
  if (mouseX < translateX(148) && mouseX > translateX(117) && mouseY < translateY(226) && mouseY > translateY(203)){
    text("♫", mouseX, mouseY)
    if (!song10.isPlaying()){
      song10.play();
    }
  }      
     
//11
  
  if (mouseX < translateX(212) && mouseX > translateX(178) && mouseY < translateY(256) && mouseY > translateY(212)){
    text("♫", mouseX, mouseY)
    if (!song11.isPlaying()){
      song11.play();
    }
  }
  

//12
  
  if (mouseX < translateX(277) && mouseX > translateX(241) && mouseY < translateY(365) && mouseY > translateY(326)){
    text("♫", mouseX, mouseY)
    if (!song12.isPlaying()){
      song12.play();
    }
  }
  
  //125
  
  if (mouseX < translateX(350) && mouseX > translateX(306) && mouseY < translateY(426) && mouseY > translateY(409)){
    text("♫", mouseX, mouseY)
    if (!song125.isPlaying()){
      song125.play();
    }
  }
      

 //13

  if (mouseX < translateX(172) && mouseX > translateX(134) && mouseY < translateY(445) && mouseY > translateY(433)){
    text("♫", mouseX, mouseY)
    if (!song13.isPlaying()){
      song13.play();
    }
  }
      
 
//14
  
  if (mouseX < translateX(242) && mouseX > translateX(215) && mouseY < translateY(586) && mouseY > translateY(540)){
    text("♫", mouseX, mouseY)
    if (!song14.isPlaying()){
      song14.play();
    }
  }
      

      
//15
  
  if (mouseX < translateX(468) && mouseX > translateX(434) && mouseY < translateY(479) && mouseY > translateY(438)){
    text("♫", mouseX, mouseY)
    if (!song15.isPlaying()){
      song15.play();
    }
  }
 
    
//16
  
  if (mouseX < translateX(526) && mouseX > translateX(488) && mouseY < translateY(596) && mouseY > translateY(565)){
    text("♫", mouseX, mouseY)
    if (!song16.isPlaying()){
      song16.play();
    }
  }
  

//17
  
  if (mouseX < translateX(400) && mouseX > translateX(376) && mouseY < translateY(775) && mouseY > translateY(736)){
    text("♫", mouseX, mouseY)
    if (!song17.isPlaying()){
      song17.play();
    }
  }
      

//18

  if (mouseX < translateX(576) && mouseX > translateX(564) && mouseY < translateY(557) && mouseY > translateY(511)){
    text("♫", mouseX, mouseY)
    if (!song18.isPlaying()){
      song18.play();
    }
  }
      

//19

  if (mouseX < translateX(782) && mouseX > translateX(752) && mouseY < translateY(444) && mouseY > translateY(398)){
    text("♫", mouseX, mouseY)
    if (!song19.isPlaying()){
      song19.play();
    }
  }
  
//20

  if (mouseX < translateX(835) && mouseX > translateX(800) && mouseY < translateY(488) && mouseY > translateY(471)){
    text("♫", mouseX, mouseY)
    if (!song20.isPlaying()){
      song20.play();
    }
  }
      
  
//21

  if (mouseX < translateX(771) && mouseX > translateX(735) && mouseY < translateY(619) && mouseY > translateY(603)){
    text("♫", mouseX, mouseY)
    if (!song21.isPlaying()){
      song21.play();
    }
  }
      
  
//22

  if (mouseX < translateX(725) && mouseX > translateX(691) && mouseY < translateY(697) && mouseY > translateY(666)){
    text("♫", mouseX, mouseY)
    if (!song22.isPlaying()){
      song22.play();
    }
  }
      
  
//23

  if (mouseX < translateX(728) && mouseX > translateX(692) && mouseY < translateY(795) && mouseY > translateY(751)){
    text("♫", mouseX, mouseY)
    if (!song23.isPlaying()){
      song23.play();
    }
  }

//24

  if (mouseX < translateX(461) && mouseX > translateX(430) && mouseY < translateY(50) && mouseY > translateY(13)){
    text("♫", mouseX, mouseY)
    if (!song24.isPlaying()){
      song24.play();
    }
  }
      
//25

  if (mouseX < translateX(521) && mouseX > translateX(497) && mouseY < translateY(102) && mouseY > translateY(66)){
    text("♫", mouseX, mouseY)
    if (!song25.isPlaying()){
      song25.play();
    }
  }
      
//26

  if (mouseX < translateX(553) && mouseX > translateX(521) && mouseY < translateY(183) && mouseY > translateY(151)){
    text("♫", mouseX, mouseY)
    if (!song26.isPlaying()){
      song26.play();
    }
  }
      
  
//27

  if (mouseX < translateX(529) && mouseX > translateX(493) && mouseY < translateY(345) && mouseY > translateY(311)){
    text("♫", mouseX, mouseY)
    if (!song27.isPlaying()){
      song27.play();
    }
  }
      
  
//28

  if (mouseX < translateX(582) && mouseX > translateX(557) && mouseY < translateY(300) && mouseY > translateY(259)){
    text("♫", mouseX, mouseY)
    if (!song28.isPlaying()){
      song28.play();
    }
  }
      
//29

  if (mouseX < translateX(597) && mouseX > translateX(564) && mouseY < translateY(157) && mouseY > translateX(106)){
    text("♫", mouseX, mouseY)
    if (!song29.isPlaying()){
      song29.play();
    }
  }
      
  
//30

  if (mouseX < translateX(706) && mouseX > translateX(688) && mouseY < translateY(122) && mouseY > translateY(73)){
    text("♫", mouseX, mouseY)
    if (!song30.isPlaying()){
      song30.play();
    }
  }
      
  
//31

  if (mouseX < translateX(801) && mouseX > translateX(772) && mouseY < translateY(240) && mouseY > translateY(198)){
    text("♫", mouseX, mouseY)
    if (!song31.isPlaying()){
      song31.play();
    }
  }
      
//32

  if (mouseX < translateX(886) && mouseX > translateX(852) && mouseY < translateY(283) && mouseY > translateY(251)){
    text("♫", mouseX, mouseY)
    if (!song32.isPlaying()){
      song32.play();
    }
  }
      
  
//33

  if (mouseX < translateX(943) && mouseX > translateX(917) && mouseY < translateY(395) && mouseY > translateY(364)){
    text("♫", mouseX, mouseY)
    if (!song33.isPlaying()){
      song33.play();
    }
  }
  
//34

  if (mouseX < translateX(992) && mouseX > translateX(965) && mouseY < translateY(342) && mouseY > translateY(314)){
    text("♫", mouseX, mouseY)
    if (!song34.isPlaying()){
      song34.play();
    }
  }

  
//35

  if (mouseX < translateX(1046) && mouseX > translateX(1021) && mouseY < translateY(428) && mouseY > translateY(399)){
    text("♫", mouseX, mouseY)
    if (!song35.isPlaying()){
      song35.play();
    }
  }

  
//36

  if (mouseX < translateX(1100) && mouseX > translateX(1072) && mouseY < translateY(505) && mouseY > translateY(479)){
    text("♫", mouseX, mouseY)
    if (!song36.isPlaying()){
      song36.play();
    }
  }
      
//37

  if (mouseX < translateX(1170) && mouseX > translateX(1145) && mouseY < translateY(603) && mouseY > translateY(590)){
    text("♫", mouseX, mouseY)
    if (!song37.isPlaying()){
      song37.play();
    }
  }
      
  //38

  if (mouseX < translateX(1113) && mouseX > translateX(1094) && mouseY < translateY(722) && mouseY > translateY(679)){
    text("♫", mouseX, mouseY)
    if (!song38.isPlaying()){
      song38.play();
    }
  }
      
  //39

  if (mouseX < translateX(1042) && mouseX > translateX(1016) && mouseY < translateY(645) && mouseY > translateX(598)){
    text("♫", mouseX, mouseY)
    if (!song39.isPlaying()){
      song39.play();
    }
  }

  
  //40

  if (mouseX < translateX(892) && mouseX > translateX(874) && mouseY < translateY(532) && mouseY > translateY(482)){
    text("♫", mouseX, mouseY)
    if (!song40.isPlaying()){
      song40.play();
    }
  }
      

  //41

  if (mouseX < translateX(767) && mouseX > translateX(731) && mouseY < translateY(726) && mouseY > translateY(703)){
    text("♫", mouseX, mouseY)
    if (!song41.isPlaying()){
      song41.play();
    }
  }
  
  //42

  if (mouseX < translateX(840) && mouseX > translateX(808) && mouseY < translateY(858) && mouseY > translateY(832)){
    text("♫", mouseX, mouseY)
    if (!song42.isPlaying()){
      song42.play();
    }
  }
      
  //43

  if (mouseX < translateX(885) && mouseX > translateX(849) && mouseY < translateY(977) && mouseY > translateY(949)){
    text("♫", mouseX, mouseY)
    if (!song43.isPlaying()){
      song43.play();
    }
  }

  
  //44

  if (mouseX < translateX(1037) && mouseX > translateX(1024) && mouseY < translateY(911) && mouseY > translateY(868)){
    text("♫", mouseX, mouseY)
    if (!song44.isPlaying()){
      song44.play();
    }
  }

  
  //45

  if (mouseX < translateX(918) && mouseX > translateX(905) && mouseY < translateY(193) && mouseY > translateY(152)){
    text("♫", mouseX, mouseY)
    if (!song45.isPlaying()){
      song45.play();
    }
  }      
  
  //46

  if (mouseX < translateX(1067) && mouseX > translateX(1050) && mouseY < translateY(172) && mouseY > translateY(133)){
    text("♫", mouseX, mouseY)
    if (!song46.isPlaying()){
      song46.play();
    }
  }
      
  //47

  if (mouseX < translateX(1157) && mouseX > translateX(1140) && mouseY < translateY(39) && mouseY > translateY(1)){
    text("♫", mouseX, mouseY)
    if (!song47.isPlaying()){
      song47.play();
    }
  }

  //48

  if (mouseX < translateX(1211) && mouseX > translateX(1172) && mouseY < translateY(116) && mouseY > translateY(98)){
    text("♫", mouseX, mouseY)
    if (!song48.isPlaying()){
      song48.play();
    }
  }
      
  
  //49

  if (mouseX < translateX(1148) && mouseX > translateX(1116) && mouseY < translateY(185) && mouseY > translateY(149)){
    text("♫", mouseX, mouseY)
    if (!song49.isPlaying()){
      song49.play();
    }
  }

  //50

  if (mouseX < translateX(1120) && mouseX > translateX(1083) && mouseY < translateY(323) && mouseY > translateY(304)){
    text("♫", mouseX, mouseY)
    if (!song50.isPlaying()){
      song50.play();
    }
  }
      
  //51

  if (mouseX < translateX(1206) && mouseX > translateX(1188) && mouseY < translateY(457) && mouseY > translateY(411)){
    text("♫", mouseX, mouseY)
    if (!song51.isPlaying()){
      song51.play();
    }
  }
      
  //52

  if (mouseX < translateX(1313) && mouseX > translateX(1287) && mouseY < translateY(403) && mouseY > translateY(371)){
    text("♫", mouseX, mouseY)
    if (!song52.isPlaying()){
      song52.play();
    }
  }
      
  
  //53

  if (mouseX < translateX(1432) && mouseX > translateX(1402) && mouseY < translateY(247) && mouseY > translateY(205)){
    text("♫", mouseX, mouseY)
    if (!song53.isPlaying()){
      song53.play();
    }
  }

   //54

  if (mouseX < translateX(1459) && mouseX > translateX(1415) && mouseY < translateY(352) && mouseY > translateY(339)){
    text("♫", mouseX, mouseY)
    if (!song54.isPlaying()){
      song54.play();
    }
  }
      
   //55

  if (mouseX < translateX(1307) && mouseX > translateX(1277) && mouseY < translateY(580) && mouseY > translateY(548)){
    text("♫", mouseX, mouseY)
    if (!song55.isPlaying()){
      song55.play();
    }
  }
      
   //56

  if (mouseX < translateX(1354) && mouseX > translateX(1334) && mouseY < translateY(728) && mouseY > translateY(680)){
    text("♫", mouseX, mouseY)
    if (!song56.isPlaying()){
      song56.play();
    }
  }
  
   //57

  if (mouseX < translateX(1495) && mouseX > translateX(1462) && mouseY < translateY(723) && mouseY > translateY(700)){
    text("♫", mouseX, mouseY)
    if (!song57.isPlaying()){
      song57.play();
    }
  }

  
   //58

  if (mouseX < translateX(1463) && mouseX > translateX(1430) && mouseY < translateY(839) && mouseY > translateY(811)){
    text("♫", mouseX, mouseY)
    if (!song58.isPlaying()){
      song58.play();
    }
  }

   //59

  if (mouseX < translateX(1372) && mouseX > translateX(1353) && mouseY < translateY(858) && mouseY > translateY(806)){
    text("♫", mouseX, mouseY)
    if (!song59.isPlaying()){
      song59.play();
    }
  }

  
   //60

  if (mouseX < translateX(1319) && mouseX > translateX(1269) && mouseY < translateY(919) && mouseY > translateY(900)){
    text("♫", mouseX, mouseY)
    if (!song60.isPlaying()){
      song60.play();
    }
  }

    //A1

  if (mouseX < translateX(99) && mouseX > translateX(46) && mouseY < translateY(842) && mouseY > translateY(697)){
    text("♫", mouseX, mouseY)
    if (!songA1.isPlaying()){
      songA1.play();
    }
  }

  
    //A2

  if (mouseX < translateX(313) && mouseX > translateX(157) && mouseY < translateY(978) && mouseY > translateX(935)){
    text("♫", mouseX, mouseY)
    if (!songA2.isPlaying()){
      songA2.play();
    }
  }

  
    //B1

  if (mouseX < translateX(173) && mouseX > translateX(121) && mouseY < translateY(148) && mouseY > translateY(69)){
    text("♫", mouseX, mouseY)
    if (!songB1.isPlaying()){
      songB1.play();
    }
  }

    //B2

  if (mouseX < translateX(113) && mouseX > translateX(47) && mouseY < translateY(267) && mouseY > translateY(163)){
    text("♫", mouseX, mouseY)
    if (!songB2.isPlaying()){
      songB2.play();
    }
  }
  
    //B3

  if (mouseX < translateX(220) && mouseX > translateX(169) && mouseY < translateY(410) && mouseY > translateY(329)){
    text("♫", mouseX, mouseY)
    if (!songB3.isPlaying()){
      songB3.play();
    }
  }

  
    //B4

  if (mouseX < translateX(123) && mouseX > translateX(55) && mouseY < translateY(492) && mouseY > translateY(377)){
    text("♫", mouseX, mouseY)
    if (!songB4.isPlaying()){
      songB4.play();
    }
  }

    //B5

  if (mouseX < translateX(292) && mouseX > translateX(150) && mouseY < translateY(668) && mouseY > translateY(598)){
    text("♫", mouseX, mouseY)
    if (!songB5.isPlaying()){
      songB5.play();
    }
  }

    //B6

  if (mouseX < translateX(481) && mouseX > translateX(413) && mouseY < translateY(637) && mouseY > translateY(495)){
    text("♫", mouseX, mouseY)
    if (!songB6.isPlaying()){
      songB6.play();
    }
  }
      
    //B7

  if (mouseX < translateX(436) && mouseX > translateX(304) && mouseY < translateY(644) && mouseY > translateY(766)){
    text("♫", mouseX, mouseY)
    if (!songB7.isPlaying()){
      songB7.play();
    }
  }

    //B8

  if (mouseX < translateX(748) && mouseX > translateX(656) && mouseY < translateY(549) && mouseY > translateY(463)){
    text("♫", mouseX, mouseY)
    if (!songB8.isPlaying()){
      songB8.play();
    }
  }
      
    //B9

  if (mouseX < translateX(632) && mouseX > translateX(569) && mouseY < translateY(806) && mouseY > translateY(717)){
    text("♫", mouseX, mouseY)
    if (!songB9.isPlaying()){
      songB9.play();
    }
  }
      
    //C1

  if (mouseX < translateX(506) && mouseX > translateX(457) && mouseY < translateY(174) && mouseY > translateY(66)){
    text("♫", mouseX, mouseY)
    if (!songC1.isPlaying()){
      songC1.play();
    }
  }

  
   //C2

  if (mouseX < translateX(492) && mouseX > translateX(448) && mouseY < translateY(401) && mouseY > translateY(301)){
    text("♫", mouseX, mouseY)
    if (!songC2.isPlaying()){
      songC2.play();
    }
  }
      
   //C3

  if (mouseX < translateX(639) && mouseX > translateX(604) && mouseY < translateY(312) && mouseY > translateY(203)){
    text("♫", mouseX, mouseY)
    if (!songC3.isPlaying()){
      songC3.play();
    }
  }
      

   //C4

  if (mouseX < translateX(796) && mouseX > translateX(768) && mouseY < translateY(287) && mouseY > translateY(235)){
    text("♫", mouseX, mouseY)
    if (!songC4.isPlaying()){
      songC4.play();
    }
  }

  
   //D1

  if (mouseX < translateX(1131) && mouseX > translateX(1050) && mouseY < translateY(485) && mouseY > translateY(377)){
    text("♫", mouseX, mouseY)
    if (!songD1.isPlaying()){
      songD1.play();
    }
  }
      
   //D2

  if (mouseX < translateX(1232) && mouseX > translateX(1180) && mouseY < translateY(694) && mouseY > translateY(528)){
    text("♫", mouseX, mouseY)
    if (!songD2.isPlaying()){
      songD2.play();
    }
  }
      
   //D3

  if (mouseX < translateX(878) && mouseX > translateX(834) && mouseY < translateY(735) && mouseY > translateY(624)){
    text("♫", mouseX, mouseY)
    if (!songD3.isPlaying()){
      songD3.play();
    }
  }
      
   //D4

  if (mouseX < translateX(1001) && mouseX > translateX(902) && mouseY < translateY(951) && mouseY > translateY(859)){
    text("♫", mouseX, mouseY)
    if (!songD4.isPlaying()){
      songD4.play();
    }
  }
      
   //E1

  if (mouseX < translateX(1065) && mouseX > translateX(979) && mouseY < translateY(103) && mouseY > translateY(29)){
    text("♫", mouseX, mouseY)
    if (!songE1.isPlaying()){
      songE1.play();
    }
  }

   //E2

  if (mouseX < translateX(1280) && mouseX > translateX(1220) && mouseY < translateY(210) && mouseY > translateY(40)){
    text("♫", mouseX, mouseY)
    if (!songE2.isPlaying()){
      songE2.play();
    }
  }
      
    //E3

  if (mouseX < translateX(1214) && mouseX > translateX(1159) && mouseY < translateY(398) && mouseY > translateY(300)){
    text("♫", mouseX, mouseY)
    if (!songE3.isPlaying()){
      songE3.play();
    }
  }
      
    //E4

  if (mouseX < translateX(1379) && mouseX > translateX(1307) && mouseY < translateY(285) && mouseY > translateY(156)){
    text("♫", mouseX, mouseY)
    if (!songE4.isPlaying()){
      songE4.play();
    }
  }
      
  
    //E5

  if (mouseX < translateX(1419) && mouseX > translateX(1316) && mouseY < translateY(658) && mouseY > translateY(527)){
    text("♫", mouseX, mouseY)
    if (!songE5.isPlaying()){
      songE5.play();
    }
  }
      
    //E6

  if (mouseX < translateX(1478) && mouseX > translateX(1355) && mouseY < translateY(975) && mouseY > translateY(884)){
    text("♫", mouseX, mouseY)
    if (!songE6.isPlaying()){
      songE6.play();
    }
  }
      
       
}