
const async = require('async');



module.exports=function(app)
{



    app.post('/fetch-page-data', function (req, res) {


        console.log("============== fetch-page-data ================");
    
        console.log("STATUS CODE: "+res.statusCode);
        console.log("BODY: "+req.body);
    
        var ajaxObj = {};
        var ajaxArr = req.body["ajaxArr"];
        for(var i=0; i < ajaxArr.length; i++)
        {
            var keyval = ajaxArr[i];
            var kv = keyval.split("-|AJXPST|-");
            var key = kv[0];
            var val = kv[1];
    
            ajaxObj[key]=val;
    
        }//==
    
        console.log("AJAX OBJ: "+JSON.stringify(ajaxObj, null, 2));
    
    
    

  


        var ob = {};
        async.waterfall(
        
            //===========================================
            //PROCESSING FUNCTIONS
            // - array of callback functions 
            // - delivers result to final function
            //===========================================
            [
        
        
                function(callback){
        
        
        
                    callback(null,ob);
        
        
        
                },
                
        
                function(ob,callback){
        
        
        
                    callback(null,ob);
        
        
        
                },
            
        
                function(ob,callback){
        
        
        
                    callback(null,ob);
        
        
        
                }
            
        
        
        
                    
            ],
            //===========================================
            //FINAL FUNCTION
            // - finish processing here
            //===========================================
            function (err, result) {
            
        
                var result = {
    
                    "items": [
                        { "id": 1, "name": "Apples",  "price": "$2" },
                        { "id": 2, "name": "Peaches", "price": "$5" }
                    ] 
                }
            
                //var result = JSON.stringify(result);
            
    

                var respond = 'send';
                switch(respond)
                {
                case'redirect':
            
                    var to = "http://powerdigitalmedia.com";
                    res.redirect(to);
                break;
                case'next':
            
                    next();
                break;
                case'end':
            
                    res.end();
                break;
                case'send':
            
                    res.send(result);
                break;
                case'render':
            
                    res.render('index', {});
            
                break;
                }//switch
                //=======
        


    
            }
        
        
        );//async.waterfall
        

    });//post
    


}//==modex

