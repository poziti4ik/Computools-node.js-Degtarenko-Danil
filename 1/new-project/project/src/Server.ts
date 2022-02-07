import express from "express";
import path from "path";
const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );




app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
    // tslint:disable-next-line:no-console
      console.log("server runing main-page");
} );
// define a route handler for the default home page
app.get( "/echo", ( req, res ) => {
    // render the index template
    res.render( "info_server", {title: 'test'} );
    // tslint:disable-next-line:no-console
    console.log("server runing echo page");
} );


// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
