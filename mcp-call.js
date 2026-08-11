const https = require('https');
const fs = require('fs');

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
      fs.writeFileSync('screen-result.json', postData);
      console.log('Result written to screen-result.json');
      process.exit(0);
  });
});

postReq.write(JSON.stringify({
  jsonrpc: "2.0",
  id: 1,
  method: "tools/call",
  params: {
      name: "get_screen",
      arguments: {
          name: "projects/12813889588703241851/screens/8cabf443076847238f53dfb846bcbfbc"
      }
  }
}));
postReq.end();
