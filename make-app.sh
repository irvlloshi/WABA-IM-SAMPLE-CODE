curl -X "POST" "https://api.nexmo.com/v2/applications" \
     -H 'Content-Type: application/json' \
     -u "YOUR_API_KEY:YOUR_API_SECRET" \
     -d $'{
    "name": "Messages API v1", 
    "capabilities": {
      "messages": { 
        "webhooks": {
          "inbound_url": {
            "address": "YOUR_URL.ngrok.io/webhooks/inbound", 
            "http_method": "POST"
            }, 
            "status_url": {
              "address": "YOUR_URL.ngrok.io/webhooks/status",
              "http_method": "POST" 
            }
          },
          "version": "v1"
          } 
        }
      }'