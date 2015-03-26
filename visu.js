/**
 * -----------------------------------------------------------------------------
 * @package     smartVISU
 * @author      Martin Gleiß
 * @copyright   2012
 * @license     GPL [http://www.gnu.de]
 * -----------------------------------------------------------------------------
 */


/**
 * This file is for your own widgets.
 */ 
 
var scriptFolder = (function() {
  var result = document.currentScript.getAttribute("src", 2);
  return result.substring(0, result.lastIndexOf("/") +1);
}());

function include(script) {
  script = scriptFolder + script;
  $.ajax({
    url: script,
    dataType: "script",
    async: false,
    error: function () {
      alert("Could not load '" + script + "'");
    }
  });
}

// -----------------------------------------------------------------------------
// W I D G E T S
// -----------------------------------------------------------------------------
//include("widget_chart.js");
//include("widget_led.js");
//include("widget_fhem.js");
include("widget_uzsu.js");
include("widget_fritzbox.js");
