The website https://markusfrboden.github.io/masterproject/ is a representation of the current project status. The backend is currently not hosted live. Instead, the site accesses the local server at IP address 3000. 

In order to be able to fully test the tool, the following steps must be carried out
1. current node installation on PC required https://nodejs.org/en/download
2. download the backend (https://github.com/MarkusFrBoden/masterproject/tree/main/backend)
3. open the backend in a code editor (e.g. VS Code) 
4. the backend accesses a MongoDB database. The API key to the creator's database has not been uploaded. Instead, a custom MongoDB key must be entered in the .env.sample file. To do this, create a free account with MongoDB Atlas (https://www.mongodb.com/cloud/atlas/register), create a cluster and access it via the path Connect -> MongoDB for VS Code and copy the link (mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD><YOUR_CLUSTER>)
5. Rename the .env.sample file to .env and start the localhost using the powershell command "nodemon app"

From then on, the connection of the website to your own backend with your own database should work.
