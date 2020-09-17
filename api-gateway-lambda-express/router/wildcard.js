
const APP_PATH = __dirname.split(process.env.APP_FOLDER)[0] + "" + process.env.APP_FOLDER + "/";
const RELEVANT_PATH = process.env.APP_FOLDER + "" + __dirname.split(process.env.APP_FOLDER)[1] +"/";
const LIBRARY_PATH = APP_PATH + "library/";
const PUBLIC_PATH = APP_PATH + "public/";


//---

const esslib = require(LIBRARY_PATH + 'routing/essentials.js');

//const routefunx = require(LIBRARY_PATH + 'routing/route/routefunx.js');
//const indxout = require(LIBRARY_PATH + 'routing/route/buildindex/output.js');

const rootpath = esslib.RelativePath(RELEVANT_PATH);
const pathTo = APP_PATH;


//---



const baselib = require(LIBRARY_PATH + 'lib/base.js');

const arraylib = require(LIBRARY_PATH + 'lib/array.js');
//const stringlib = require(LIBRARY_PATH + 'lib/string.js');

//const dirlib = require(LIBRARY_PATH + 'lib/dir.js');
//const filelib = require(LIBRARY_PATH + 'lib/file.js');
//const imglib = require(LIBRARY_PATH + 'lib/img.js');

//const browserlib = require(LIBRARY_PATH + 'lib/browser.js');
const mobilelib = require(LIBRARY_PATH + 'lib/mobile.js');

//const datelib = require(LIBRARY_PATH + 'lib/date.js');
//const emaillib = require(LIBRARY_PATH + 'lib/email.js');
//const extractlib = require(LIBRARY_PATH + 'lib/extract.js');
const getlib = require(LIBRARY_PATH + 'lib/get.js');


module.exports=function(app)
{


    app.get('/*', 
    
        //midware.Robots,
        //midware.Https,
        //midware.Ignore,
        //midrec.Record,
    

    (req, res) => {


        //req.headers.host : pull website database, bucket, cookie etc

        if(req.headers.host 
        && req.headers.host != undefined
        )
        {

            var host = req.headers.host;

            var sitearr = host.split(".");
            if(sitearr.length > 2)
            {
                var site = sitearr[1] + "." + sitearr[2];
            }else{
                var site = host;
            }

        }

	
	    if(req.secure 
		|| req.get('X-Forwarded-Proto') == 'https'
		) 
		{
			var http = "https://";
		}else{
			var http = "http://";
		}

			
		var domain = req.headers.host;
		var domArr = domain.split('.');
			 
		if(domArr.length > 2)
		{
			var main_domain = domArr[1] + "." + domArr[2];
			var sub_domain = domArr[0].split("-").join(" "); 

			var is_subdomain = true;
			var subname = domArr[0];
		}else{

			var main_domain = domain;
			var sub_domain = "NA";

			var is_subdomain = false;
			var subname = false;
		}//##
			
		var http_domain = http + domain + "/";

		var route = '';
		if(req.params[0] && req.params[0] != undefined) var route = req.params[0];


        var output = "<div class='output'>";


            output += "<br/>SITE: "+site;

            output += "<br/>DIRNAME: "+__dirname;
            output += "<br/>APP FOLDER: "+process.env.APP_FOLDER;

            output += "<br/>APP_PATH: "+APP_PATH;
            output += "<br/>RELEVANT_PATH: "+RELEVANT_PATH;

            output += "<br/>LIBRARY_PATH: "+LIBRARY_PATH;
            output += "<br/>PUBLIC_PATH: "+PUBLIC_PATH;
            output += "<br/>ROOTPATH: "+rootpath;
            output += "<br/>pathTo: "+pathTo;
    
    
            output += "<br/>ROUTE: "+route;
            //output += "<br/>HEADERS: "+JSON.stringify(req.headers,null,2);
            output += "<br/>PARAMS: "+JSON.stringify(req.params,null,2);
            output += "<br/>QUERY: "+JSON.stringify(req.query,null,2);
    
            output += "<br/>HTTP DOMAIN: "+http_domain;
            output += "<br/>MAIN DOMAIN: "+main_domain;
            output += "<br/>SUB DOMAIN: "+sub_domain;
            

            output += "<br/><p>";
            
                output += "<br/><div class='button' onclick='javascript:TestAjax();'>Test Ajax</div>";
            
            output += "<br/></p>";


        output += "</div>";


        var title_tag = "";

        if(route !== '') title_tag = route;
        else title_tag = "Express Sample";


        res.render('index', {


            
            relative_public	    :"./public/",
            relative_dirname	:"",

            title_tag			:title_tag,

            meta_keywords		:"Lambda,Express",
            meta_description	:"Sample Lambda Express App",
            meta_robots		    :"",

            favicon			    :"",

            head                :"",
            style               :"",
            body                :"<h3> "+title_tag+" </h3>"+output,

            

            //apiUrl: req.apiGateway ? `https://${req.apiGateway.event.headers.Host}/${req.apiGateway.event.requestContext.stage}` : 'http://localhost:3000'

        })


    })


}