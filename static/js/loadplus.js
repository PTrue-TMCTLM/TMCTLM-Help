function addEvent(element, event, fn) {
    if (element.addEventListener) {
        element.addEventListener(event, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, fn);
    }
}

function loadScript(src, callback)
{
  var s,
      r,
      t,
      write;
      
  write = src.split("/");
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      if (callback !== undefined) {
        callback();
      }
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}
function loadcode(){

    try{
    addEvent(window, 'load', function(){ loadScript(
        'https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js',
        function () { console.info("1 - Script loaded, name: Firebase UI AUTH")} );
    });
    exec2()
    } catch (error) {
        alert("Script ERROR, name: Firebase UI AUTH Info: \r\n" + error)
    }

    
    //--
    function exec2() {
        try{
            addEvent(window, 'load', function(){ loadScript(
                'https://www.gstatic.com/firebasejs/7.23.0/firebase-auth.js',
                function () { console.info("2 - Script loaded, name: Firebase AUTH 1")} );
                
            });
            exec3()
            } catch (error) {
                alert("Script ERROR, name: Firebase AUTH 1 Info: \r\n" + error)
            }
    }
    //--
    function exec3() {
        try{
        
            addEvent(window, 'load', function(){ loadScript(
                'https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js',
                function () { console.info("3 - Script loaded, name: Firebase DATA 1")} );
            });
            exec4()
            } catch (error) {
                alert("Script ERROR, name: Firebase DATA 1 Info: \r\n" + error)
            }
    }
    //--
    function exec4() {
        try{
            addEvent(window, 'load', function(){ loadScript(
                'static/js/firebase/auth.js',
                function () { console.info("4 - Script loaded, name: Firebase AUTH 2")} );
            });
            exec5()
        } catch (error) {
            alert("Script ERROR, name: Firebase AUTH 2 Info: \r\n" + error)}
    }
    function exec5() {
        try{
            addEvent(window, 'load', function(){ loadScript(
                'static/js/firebase/data.js',
                function () { console.info("5 - Script loaded, name: Firebase DATA 2")} );
            });
            console.info("6 - All Scripts loaded");
        } catch (error) {
            alert("Script ERROR, name: Firebase DATA 2 Info: \r\n" + error)}
    }
}