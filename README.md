
<h1>EasyTrips-WebApp</h1>

  <p>Welcome to the EasyTrip project! This repository contains the source code for an easy-to-use trip management web application.</p>

  <h2>Technologies Used</h2>
    <ul>
      <li><strong>MongoDB:</strong> Database for storing trip information.</li>
      <li><strong>Mongoose:</strong> MongoDB object modeling for Node.js.</li>
      <li><strong>EasyTrips-WebApp:</strong> The web application built using Node.js, Express, and Handlebars.</li>
    </ul>
   <h2>Project Structure</h2>
     <ul>
        <li><strong>index.js</strong> - Entry point of the application.</li>
        <li><strong>route.js</strong> - Defines the application routes.</li>
        <li><strong>config</strong> - Configuration files.
            <ul>
                <li><strong>dbConfig.js</strong> - Configures Mongoose for MongoDB connection.</li>
                <li><strong>handlebarsConfig.js</strong> - Configures Handlebars for templating.</li>
                <li><strong>expressConfig.js</strong> - Configures Express settings.</li>
            </ul>
        </li>
        <li><strong>controllers</strong> - Contains controllers for different routes.
            <ul>
                <li><strong>homeController.js</strong> - Handles home route.</li>
                <li><strong>tripController.js</strong> - Handles trips route.</li>
            </ul>
        </li>
        <li><strong>static</strong> - Static files.
            <ul>
                <li><strong>css</strong> - CSS stylesheets.
                    <ul>
                        <li><strong>site.css</strong> - Main stylesheet for the site.</li>
                    </ul>
                </li>
                <li><strong>images</strong> - Image files.</li>
            </ul>
        </li>
        <li><strong>views</strong> - Views for the application.
            <ul>
                <li><strong>layouts</strong> - Layout files.
                    <ul>
                        <li><strong>main.hbs</strong> - Main layout file using Handlebars.</li>
                    </ul>
                </li>
                  <li>index.hbs</code></li>
                  <li>details.hbs</code></li>
                 <li>404.hbs</code></li>
                 <li>about.hbs</code></li>
                 <li>create.hbs</code></li>
            </ul>
        </li>
    </ul>

  <h2>Getting Started</h2>
    <p>Follow these steps to set up the EasyTrip project:</p>
    <ol>
        <li>Clone the repository: <code>git clone https://github.com/your-username/easytrip-web-app.git</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run the application: <code>npm start</code></li>
        <li>Open your browser and visit <code>http://localhost:3030</code></li>
    </ol>
    <p>Ensure you have MongoDB installed and properly configured for the EasyTrip application to interact with the database. Update the MongoDB connection details in the appropriate configuration files if needed.</p>
