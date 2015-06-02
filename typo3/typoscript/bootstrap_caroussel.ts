##########
# Slider #
##########

#####  1. Zugriff auf die Bildersammlung
lib.slider = COA
 
##### 1.  eine Startvariable festlegen
lib.slider.5 = LOAD_REGISTER
lib.slider.5.counter = 0
 
#####  2. Zugriff auf die Bilder
lib.slider.10 = FILES
lib.slider.10.references {
  table = tt_content
  
  #####UID des "Images"-Content-Elements, in das die Bilder geladen werden 
  uid = XXX 
  fieldName = image
}
 
#####  3. Ausgabeiteration der Buttons steuern

lib.slider.10.renderObj = COA

#####  3.1. Zählervariable festlegen

lib.slider.10.renderObj.10 = LOAD_REGISTER
lib.slider.10.renderObj.10  {
    ### Die Startvariable wird der Zählervariablen zugewiesen
    divCounter.data = register:counter
    ### Die Startvariable wird wird bei jedem Durchlauf um eins erhöht
    counter.data = register:counter
    counter.stdWrap.wrap = |+1
    counter.prioriCalc=1
  }
  
#####  3.2 Die Zählervariable wird als Text ausgegeben und mit Optionsplit als Listenelemente gewrappt
lib.slider.10.renderObj.15 = TEXT
lib.slider.10.renderObj.15.data = register:divCounter
lib.slider.10.renderObj.15.wrap = <li data-target="#carousel-example-generic" data-slide-to="|" class="active"></li>|*|<li data-target="#carousel-example-generic" data-slide-to="|" class="">
</li>|*|<li data-target="#carousel-example-generic" data-slide-to="|" class=""></li>
##### 3.3 Container um den gesamten lib.slider.10
lib.slider.10.stdWrap.wrap3 =  <ol class="carousel-indicators">|</ol>
 
#####  4. Ausgabeiteration der Bilder steuern
#####  4. 1 Kopie des FILES-Objekts 
lib.slider.20 < lib.slider.10
lib.slider.20.renderObj = COA
 
 
##### 4.2 Das Bild wird geladen
lib.slider.20.renderObj.10 = IMAGE
lib.slider.20.renderObj.10 {
    file.import.data = file:current:publicUrl 
##### 4.3 Das Bild erhält Alt-Text und Titel aus den Bildeigenschaften
    altText.data = file:current:alternative
    altText.htmlSpecialChars = 1
    titleText.data = file:current:title
    titleText.htmlSpecialChars = 1
  }
 
lib.slider.20.renderObj.15 >
 
##### 4.4 Aus dem Feld "Description" wird ein Caption-Text erzeugt, der einen Link mit der im Linkfeld eingetragenen Adresse erhält
lib.slider.20.renderObj.20 = TEXT
lib.slider.20.renderObj.20 {
    stdWrap.data = file:current:description
    stdWrap.removeBadHTML = 1
    stdWrap.typolink.parameter.data = file:current:link    
##### 4.5 Container um die Caption    
    wrap = <div class="carousel-caption active">|</div>|*|<div class="carousel-caption">|</div>|*|<div class="carousel-caption">|</div>
  }
##### 4.4 Container um die Bilder und Captions, das erste Element erhält eine andere Klasse als die anderen
lib.slider.20.renderObj.wrap = <div class="item active">|</div>|*|<div class="item">|</div>|*|<div class="item">|</div>
 
##### 4.5 Container um den gesamten lib.slider.20
lib.slider.20.stdWrap.wrap3 =  <div class="carousel-inner">|</div> 
 
##### 5. Container um des gesamte Element
lib.slider.stdWrap.wrap3 (
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
|
  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
  <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
  </div>        
)