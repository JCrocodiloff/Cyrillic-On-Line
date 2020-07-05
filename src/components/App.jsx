import React from "react";
import Sekcija from "./Sekcija.jsx";
import Dugme from "./Dugme.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import bgImg from "../images/pozadina.png";

function App() {
  const [tekst, setTekst] = React.useState(""); //Sodrzina na textarea.

  //startPos, endPos - pozicii na kucaloto
  const [startPos, setStartPos] = React.useState(0);
  const [endPos, setEndPos] = React.useState(0);

  function kucanje(event){
    setTekst(event.target.value);
    //Zapazuenje pozicija na kucaloto
    var myElement = document.getElementById('outputTxt');
    setStartPos(myElement.selectionStart);
    setEndPos(myElement.selectionEnd);
  }

  function cursorPositionClick(){ //Pozicija na kucaloto
    var myElement = document.getElementById('outputTxt');
    setStartPos(myElement.selectionStart);
    setEndPos(myElement.selectionEnd);
    //console.log(startPos);
    //console.log(endPos);
  }

  //Navigacija niz tekst so strelki
  var el=document.getElementById('outputTxt');
  if(el){
    el.addEventListener('keydown', function(event){
      if(event.keyCode === 37) { //Leva strelka
        setStartPos(el.selectionStart - 1);
        setEndPos(el.selectionEnd - 1);
      }
      if(event.keyCode === 39) { //Desna strelka
        setStartPos(el.selectionStart + 1);
        setEndPos(el.selectionEnd + 1);
      }
    });
  }
  

  //Steganje dugme
  function steganjeDugme(bukva){
    setTekst(prevVal => {
      //console.log(startPos);
      //console.log(endPos);
      return prevVal.substring(0,startPos) + bukva + prevVal.substring(endPos,prevVal.length)
      //Stara funkcija - PROPAS:
      /* if(prevVal.length===0){return prevVal + bukva;}
      else {
          var myElement = document.getElementById('outputTxt');
          var startPosition = myElement.selectionStart;
          var endPosition = myElement.selectionEnd;
          console.log(startPosition);
          console.log(endPosition);
          // Check if you've selected text
          
          return prevVal.substring(0,startPosition) + bukva + prevVal.substring(endPosition,prevVal.length);
      } */
    })
    setStartPos(prevVal => prevVal+1);
    setEndPos(startPos+1);
  }

  //Dugme za kopiranje tekst
  function copyText(){
    var outputText=document.getElementById("outputTxt");
    outputText.select();
    outputText.select(0,99999)
    document.execCommand("copy");
    handleTooltipOpen(); //Povikuvanje funkcija da se prikaze tooltip.
  }
  //Tooltip
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {setOpen(false);};
  const handleTooltipOpen = () => {setOpen(true);};

  return(
    <div style={{ backgroundImage:`url(${bgImg})`}} className="sve">
      <Header />
      <Sekcija naslov="Македонски">
        <Dugme text="А" value="А" onClicked={steganjeDugme}/>
        <Dugme text="а" value="а" onClicked={steganjeDugme}/>
        <Dugme text="Б" value="Б" onClicked={steganjeDugme}/>
        <Dugme text="б" value="б" onClicked={steganjeDugme}/>
        <Dugme text="В" value="В" onClicked={steganjeDugme}/>
        <Dugme text="в" value="в" onClicked={steganjeDugme}/>
        <Dugme text="Г" value="Г" onClicked={steganjeDugme}/>
        <Dugme text="г" value="г" onClicked={steganjeDugme}/>
        <Dugme text="Д" value="Д" onClicked={steganjeDugme}/>
        <Dugme text="д" value="д" onClicked={steganjeDugme}/>
        <Dugme text="Ѓ" value="Ѓ" onClicked={steganjeDugme}/>
        <Dugme text="ѓ" value="ѓ" onClicked={steganjeDugme}/>
        <Dugme text="Е" value="Е" onClicked={steganjeDugme}/>
        <Dugme text="е" value="е" onClicked={steganjeDugme}/>
        <Dugme text="Ж" value="Ж" onClicked={steganjeDugme}/>
        <Dugme text="ж" value="ж" onClicked={steganjeDugme}/>
        <Dugme text="З" value="З" onClicked={steganjeDugme}/>
        <Dugme text="з" value="з" onClicked={steganjeDugme}/>
        <Dugme text="Ѕ" value="Ѕ" onClicked={steganjeDugme}/>
        <Dugme text="ѕ" value="ѕ" onClicked={steganjeDugme}/>
        <Dugme text="И" value="И" onClicked={steganjeDugme}/>
        <Dugme text="и" value="и" onClicked={steganjeDugme}/>
        <Dugme text="Ј" value="Ј" onClicked={steganjeDugme}/>
        <Dugme text="ј" value="ј" onClicked={steganjeDugme}/>
        <Dugme text="К" value="К" onClicked={steganjeDugme}/>
        <Dugme text="к" value="к" onClicked={steganjeDugme}/>
        <Dugme text="Л" value="Л" onClicked={steganjeDugme}/>
        <Dugme text="л" value="л" onClicked={steganjeDugme}/>
        <Dugme text="Љ" value="Љ" onClicked={steganjeDugme}/>
        <Dugme text="љ" value="љ" onClicked={steganjeDugme}/>
        <Dugme text="М" value="М" onClicked={steganjeDugme}/>
        <Dugme text="м" value="м" onClicked={steganjeDugme}/>
        <Dugme text="Н" value="Н" onClicked={steganjeDugme}/>
        <Dugme text="н" value="н" onClicked={steganjeDugme}/>
        <Dugme text="Њ" value="Њ" onClicked={steganjeDugme}/>
        <Dugme text="њ" value="њ" onClicked={steganjeDugme}/>
        <Dugme text="О" value="О" onClicked={steganjeDugme}/>
        <Dugme text="о" value="о" onClicked={steganjeDugme}/>
        <Dugme text="П" value="П" onClicked={steganjeDugme}/>
        <Dugme text="п" value="п" onClicked={steganjeDugme}/>
        <Dugme text="Р" value="Р" onClicked={steganjeDugme}/>
        <Dugme text="р" value="р" onClicked={steganjeDugme}/>
        <Dugme text="С" value="С" onClicked={steganjeDugme}/>
        <Dugme text="с" value="с" onClicked={steganjeDugme}/>
        <Dugme text="Т" value="Т" onClicked={steganjeDugme}/>
        <Dugme text="т" value="т" onClicked={steganjeDugme}/>
        <Dugme text="Ќ" value="Ќ" onClicked={steganjeDugme}/>
        <Dugme text="ќ" value="ќ" onClicked={steganjeDugme}/>
        <Dugme text="У" value="У" onClicked={steganjeDugme}/>
        <Dugme text="у" value="у" onClicked={steganjeDugme}/>
        <Dugme text="Ф" value="Ф" onClicked={steganjeDugme}/>
        <Dugme text="ф" value="ф" onClicked={steganjeDugme}/>
        <Dugme text="Х" value="Х" onClicked={steganjeDugme}/>
        <Dugme text="х" value="х" onClicked={steganjeDugme}/>
        <Dugme text="Ц" value="Ц" onClicked={steganjeDugme}/>
        <Dugme text="ц" value="ц" onClicked={steganjeDugme}/>
        <Dugme text="Ч" value="Ч" onClicked={steganjeDugme}/>
        <Dugme text="ч" value="ч" onClicked={steganjeDugme}/>
        <Dugme text="Џ" value="Џ" onClicked={steganjeDugme}/>
        <Dugme text="џ" value="џ" onClicked={steganjeDugme}/>
        <Dugme text="Ш" value="Ш" onClicked={steganjeDugme}/>
        <Dugme text="ш" value="ш" onClicked={steganjeDugme}/>
      </Sekcija>
      <Sekcija naslov="Србски">
        <Dugme text="Ђ" value="Ђ" onClicked={steganjeDugme}/>
        <Dugme text="ђ" value="ђ" onClicked={steganjeDugme}/>
        <Dugme text="Ћ" value="Ћ" onClicked={steganjeDugme}/>
        <Dugme text="ћ" value="ћ" onClicked={steganjeDugme}/>
      </Sekcija>
      <Sekcija naslov="Руски">
        <Dugme text="Ё" value="Ё" onClicked={steganjeDugme}/>
        <Dugme text="ё" value="ё" onClicked={steganjeDugme}/>
        <Dugme text="Й" value="Й" onClicked={steganjeDugme}/>
        <Dugme text="й" value="й" onClicked={steganjeDugme}/>
        <Dugme text="Щ" value="Щ" onClicked={steganjeDugme}/>
        <Dugme text="щ" value="щ" onClicked={steganjeDugme}/>
        <Dugme text="Ъ" value="Ъ" onClicked={steganjeDugme}/>
        <Dugme text="ъ" value="ъ" onClicked={steganjeDugme}/>
        <Dugme text="Ы" value="Ы" onClicked={steganjeDugme}/>
        <Dugme text="ы" value="ы" onClicked={steganjeDugme}/>
        <Dugme text="Ь" value="Ь" onClicked={steganjeDugme}/>
        <Dugme text="ь" value="ь" onClicked={steganjeDugme}/>
        <Dugme text="Э" value="Э" onClicked={steganjeDugme}/>
        <Dugme text="э" value="э" onClicked={steganjeDugme}/>
        <Dugme text="Ю" value="Ю" onClicked={steganjeDugme}/>
        <Dugme text="ю" value="ю" onClicked={steganjeDugme}/>
        <Dugme text="Я" value="Я" onClicked={steganjeDugme}/>
        <Dugme text="я" value="я" onClicked={steganjeDugme}/>
      </Sekcija>
      <Sekcija naslov="Букви со апострофи">
        <Dugme text="À" value="À" onClicked={steganjeDugme} />
        <Dugme text="à" value="à" onClicked={steganjeDugme} />
        <Dugme text="Ѐ" value="Ѐ" onClicked={steganjeDugme} />
        <Dugme text="è" value="è" onClicked={steganjeDugme} />
        <Dugme text="Ѝ" value="Ѝ" onClicked={steganjeDugme} />
        <Dugme text="ѝ" value="ѝ" onClicked={steganjeDugme} />
        <Dugme text="Ò" value="Ò" onClicked={steganjeDugme} />
        <Dugme text="ò" value="ò" onClicked={steganjeDugme} />
        <Dugme text="Ӳ" value="Ӳ" onClicked={steganjeDugme} />
        <Dugme text="ӳ" value="ӳ" onClicked={steganjeDugme} />
      </Sekcija>
      <Sekcija naslov="Старословенски">
        <Dugme text="Ѣ" value="Ѣ" onClicked={steganjeDugme} />
        <Dugme text="ѣ" value="ѣ" onClicked={steganjeDugme} />
        <Dugme text="Ѳ" value="Ѳ" onClicked={steganjeDugme} />
        <Dugme text="ѳ" value="ѳ" onClicked={steganjeDugme} />
        <Dugme text="Ѵ" value="Ѵ" onClicked={steganjeDugme} />
        <Dugme text="ѵ" value="ѵ" onClicked={steganjeDugme} />
        <Dugme text="Ѫ" value="Ѫ" onClicked={steganjeDugme} />
        <Dugme text="ѫ" value="ѫ" onClicked={steganjeDugme} />
        <Dugme text="Ѧ" value="Ѧ" onClicked={steganjeDugme} />
        <Dugme text="ѧ" value="ѧ" onClicked={steganjeDugme} />
        <Dugme text="Ѭ" value="Ѭ" onClicked={steganjeDugme} />
        <Dugme text="ѭ" value="ѭ" onClicked={steganjeDugme} />
        <Dugme text="Ѩ" value="Ѩ" onClicked={steganjeDugme} />
        <Dugme text="ѩ" value="ѩ" onClicked={steganjeDugme} />
      </Sekcija>
      <br />
      <div className="container">
        <textarea id="outputTxt" onChange={kucanje} value={tekst} placeholder="Тайп зъ тэкст хыр." onClick={cursorPositionClick}></textarea>
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                arrow
                placement="right"
                title="Ископирано"
              >
                <button className="copyBtn" onClick={copyText}>Копирај</button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        
      </div>
      <Footer />
    </div>
    
  );
  
}

export default App;
