
// ------------------------------------------ SCROLLING ------------------------------------
// Viewport Function
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 300 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Check if sections are in view to add style classes
var sections = $(".sections");
var sectionVisibility = function() {
    for (section of sections) {
        isElementInViewport(section)
          ? $(section).addClass("isVisible")
          : $(section).removeClass("isVisible");
    }
}

// Check if cards in applications are in view to add style classes
var cards = $(".card");
var cardVisibility = function() {
    for (card of cards) {
        isElementInViewport(card)
          ? $(card).addClass("isVisible")
          : $(card).removeClass("isVisible");
    }
}

// Scroll effect of full page for sections
$(document).on("scroll", sectionVisibility);

// Scroll effect for work section applications
$("#apps").on("scroll", cardVisibility);

// ------------------------------------------ WORK SECTION APPS HOVER FUNCTION ------------------------------------
// on hover function
var appHoverOn = function() {
        $(this)
            .closest(".card")
            .addClass("hover") // add hover to card (box shadow style)
            .children(".work-content")
            .addClass("hover"); 
};

var appHoverOff = function() {
        $(this)
            .closest(".card")
            .removeClass("hover")
            .children(".work-content")
            .removeClass("hover");
}
$(".work-content").hover(appHoverOn,appHoverOff);