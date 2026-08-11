const https = require('https');

const postOptions = {
  hostname: 'stitch.googleapis.com',
  path: '/mcp',
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
      try {
          const resp = JSON.parse(postData);
          if (resp.result && resp.result.tools) {
              for (const t of resp.result.tools) {
                 console.log(t.name);
                 console.log(t.description);
              }
          } else {
              console.log('No tools found', Object.keys(resp));
          }
      } catch (e) {
          console.log('Error parsing json', e);
      }
      process.exit(0);
  });
});

postReq.write(JSON.stringify({
  jsonrpc: "2.0",
  id: 1,
  method: "tools/list"
}));
postReq.end();
