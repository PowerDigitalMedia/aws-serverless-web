
function Ajaxd(_VARS){
    
    
    //var href = window.location.href;                //returns the href (URL) of the current page
    var hostname = window.location.hostname;        //returns the domain name of the web host
    //var pathname = window.location.pathname;        //returns the path and filename of the current page
    var protocol = window.location.protocol;        //returns the web protocol used (http: or https:)
    //var assign = window.location.assign; //loads a new document
    var port =  window.location.port;


    if(!_VARS || _VARS == undefined)
    {
        var _VARS = {
                    'call':'init'
                    };

    }


    if(hostname == 'localhost') var hostname = hostname+":"+port;
    if(hostname.match(/amazonaws/g)) var hostname =  hostname + '/Prod';

    var http_domain = protocol + "//" + hostname + "/";
    var url = http_domain + 'ajaxd'; 
    var ajaxPost = "";
        
        var splitter = "-|AJXPST|-";

        var nv = "_VARS" + splitter + JSON.stringify(_VARS);
        ajaxPost += "ajaxArr[]=" + nv + "&";


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);//asynchronous
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange=function(){
    
        if(xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var xrt = xmlhttp.responseText;
            //alert(xrt);

            var obj = JSON.parse(xrt);
            alert("RESULT: \n"+JSON.stringify(obj));

        
           
        }
    }
    xmlhttp.send(ajaxPost);

    
    
}








