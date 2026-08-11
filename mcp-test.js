const https = require('https');

const options = {
  hostname: 'stitch.googleapis.com',
  path: '/mcp',
  method: 'GET',
  headers: {
    'X-Goog-Api-Key': process.env.STITCH_API_KEY,
    'Accept': 'text/event-stream'
  }
};

let postEndpoint = null;

const req = https.request(options, (res) => {
  let buffer = '';
  res.on('data', (d) => {
    buffer += d.toString();
    const lines = buffer.split('\n');
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        try {
          const data = JSON.parse(line.substring(6));
          console.log('Received Event:', data);
          // if it's the endpoint event, we can get the uri
          if (data && typeof data === 'string' && data.startsWith('http')) {
             postEndpoint = data;
          }
        } catch (e) {
             // not json maybe
             console.log('Data:', line.substring(6));
             if (line.substring(6).startsWith('http')) {
                 postEndpoint = line.substring(6);
             }
        }
      } else if (line.startsWith('event: ')) {
         console.log('Event type:', line.substring(7));
      }
    }
    
    if (postEndpoint) {
       console.log('Got POST endpoint:', postEndpoint);
       
       // Now make a POST request to list tools
       const postUrl = new URL(postEndpoint);
       const postOptions = {
          hostname: postUrl.hostname,
          path: postUrl.pathname + postUrl.search,
          method: 'POST',
          headers: {
            'X-Goog-Api-Key': process.env.STITCH_API_KEY,
            'Content-Type': 'application/json'
          }
       };
       
       const postReq = https.request(postOptions, (postRes) => {
          let postData = '';
          postRes.on('data', chunk => postData += chunk);
          postRes.on('end', () => {
             console.log('Tools Response:', postData);
             process.exit(0);
          });
       });
       
       postReq.write(JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "tools/list"
       }));
       postReq.end();
       
    } else {
       buffer = lines[lines.length - 1]; // keep the last incomplete line
    }
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
