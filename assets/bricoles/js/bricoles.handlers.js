
// 
// ------------------------------------------------------------------ Icono
// 
class IconoHandler extends Paged.Handler {    
    afterParsed(parsed) {
        var galleries = document.querySelectorAll('.icono');
        for ( var i=0, len = galleries.length; i < len; i++ ) {
          var gallery = galleries[i];
          initMasonry( gallery );
        }

        function initMasonry( container ) {
          var imgLoad = imagesLoaded( container, function() {
            new Masonry( container, {
              itemSelector: '.item',
              columnWidth: '.item',
              isFitWidth: true
            });
            container.className += " jmig-img-loaded";
          });
        }
    }    
}
// Paged.registerHandlers(IconoHandler);

// 
// ------------------------------------------------------------------ Notes
// 

// external ref index for footnotes
let refindex = 0;

class NotesHandler extends Paged.Handler {    
    beforePageLayout(page) {
        const quotes = document.querySelectorAll('.quote');
        for (let i = 0; i < quotes.length; i++) {
            quotes[i].style.color = 'rgba(' + randint(8, 19) + ', ' + randint(32, 59) + ', '+ randint(92, 156) + ', .8)';
        };
    }    
}
// Paged.registerHandlers(NotesHandler);


// 
// ------------------------------------------------------------------ Quotes
// 

// randint method
function randint(min, max){
    return Math.floor( Math.random() * (max-min) + min);
}

class QuotesHandler extends Paged.Handler {
    
    beforePageLayout(page) {
        const quotes = document.querySelectorAll('.quote');
        for (let i = 0; i < quotes.length; i++) {
            quotes[i].style.color = 'rgba(' + randint(8, 19) + ', ' + randint(32, 59) + ', '+ randint(92, 156) + ', .8)';
        };
    }
    
}
Paged.registerHandlers(QuotesHandler);


// 
// ------------------------------------------------------------------ Imposition
// 

class ImposeHandler extends Paged.Handler {
    
    afterRendered(pages){
        let renderedPagesElements = document.querySelectorAll('.pagedjs_page');
        console.log(renderedPagesElements);
        imposeBooklet(renderedPagesElements)
    }
    
}
//Paged.registerHandlers(ImposeHandler);