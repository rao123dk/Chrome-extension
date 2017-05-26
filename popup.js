document.addEventListener('DOMContentLoaded', function() {
  var go_to_bl_hrm = document.getElementById('blhrm');
  go_to_bl_hrm.addEventListener('click', function() {
     var newURL = "https://www.udacity.com/";
  chrome.tabs.create({ url: newURL });
    
  }, false);
  // for github
  var go_to_Phab = document.getElementById('gotoPhab');
  go_to_Phab.addEventListener('click', function() {
     var newURL = "https://github.com/rao123dk?tab=repositories";
      chrome.tabs.create({ url: newURL });
    }, false);
  
  
}, false);



// for more info
//https://developer.chrome.com/extensions/getstarted