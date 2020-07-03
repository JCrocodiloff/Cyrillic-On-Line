import React from "react";
import Sekcija from "./Sekcija.jsx";
import Dugme from "./Dugme.jsx";
import Header from "./Header.jsx";
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
    console.log(startPos);
    console.log(endPos);
  }

  function steganjeDugme(bukva){
    setTekst(prevVal => {
      console.log(startPos);
      console.log(endPos);
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
        <Dugme text="я" value="я" onClicked={steganjeDugme} />
      </Sekcija>
      <br />
      <div className="container">
        <textarea id="outputTxt" onChange={kucanje} value={tekst} placeholder="Тайп зъ тэкст хыр." onClick={cursorPositionClick}></textarea>
      </div>
      
    </div>
    
  );
  
}

export default App;
