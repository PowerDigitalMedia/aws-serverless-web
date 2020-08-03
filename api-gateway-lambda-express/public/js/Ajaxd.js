//########################################################################################
//########################################################################################
//########################################################################################
//ALTER


function Ajaxd(_VARS){
    
    
    //var href = window.location.href;                //returns the href (URL) of the current page
    var hostname = window.location.hostname;        //returns the domain name of the web host
    //var pathname = window.location.pathname;        //returns the path and filename of the current page
    var protocol = window.location.protocol;        //returns the web protocol used (http: or https:)
    //var assign = window.location.assign; //loads a new document
    var port =  window.location.port;


    /*
    alert(
        "HREF         : "+href
        +"\nHOSTNAME  : "+hostname
        +"\nPATHNAME  : "+pathname
        +"\nPROTOCOL  : "+protocol
        +"\nASSIGN    : "+assign
    );
    */


    //====================================================

    if(!_VARS || _VARS == undefined)
    {
        var _VARS = {
                    'call':'init'
                    };

    }//#

    //====================================================

    //alert("PORT: "+port);

    if(hostname == 'localhost') var hostname = hostname+":"+port;

    if(hostname.match(/amazonaws/g)) var hostname =  hostname + '/Prod';



    var http_domain = protocol + "//" + hostname + "/";
    var url = http_domain + 'ajaxd';

    //====================================================

    //alert("URL: "+url);
    

    //====================================================
    //SET AJAX POST
    //====================================================
        
    var ajaxPost = "";
        
        var splitter = "-|AJXPST|-";

        var nv = "_VARS" + splitter + JSON.stringify(_VARS);
        ajaxPost += "ajaxArr[]=" + nv + "&";



    //======================================================
    //CHECK AJAX POST
    //======================================================
/*

    var alrt = "";
        
        HideComp_AlfaBase();
        
        alrt += "\n=========== FETCH ==========\n";
            
        var regi = ajaxPost;
        var regi = regi.replace(/ajaxArr\[\]\=/g,"\n");
        var regi = regi.replace(/\-\|AJXPST\|\-/g," === ");
                
        alrt += regi;
            
    alert(alrt);
    //return false;
    
*/
    //=====================================================
        




    
    //=====================================================
    //AJAX REQUEST
    //=====================================================
    
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

    
    
}//func
//=====








