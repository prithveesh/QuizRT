1.) QuizRT- GameEngine (directory structure)
```
-
  |- constants
    |- messages.js
  |- models
    |- game
      |- index.js
      |- mutation.js
      |- mutation.resolver.js
      |- query.js
      |- query.resolver.js
      |- schema.js
      |- type.js
    |- question
      |- index.js
      |- mutation.js
      |- mutation.resolver.js
      |- query.js
      |- query.resolver.js
      |- type.js
    |- user
      |- index.js
      |- mutation.js
      |- mutation.resolver.js
      |- query.js
      |- query.resolver.js
      |- type.js
  |- utils
    |- db.js
    |-pub-sub.js
  |- app.js
  |- config.js
  |- events.js
```

2.) `npm install`

3.) To run the server. `Run MongoDB` and `Start Redis` then use `npm run start` Application will run on Port number 3000. 

3.) Mongo has been used as DB which is running on mongodb://localhost:27017 and bucket name is `gameBucket` & db name is `GameEngine`

4.) Mongoose schema is defined in `models/game/schema.js` file

5.) Please refer this URL for `http://localhost:3000/graphql` GraphQL API's

6.) Please refer the node key defined in `events.js` file for events published by Game Engine. Below is an example

```
PUBLISH EVENT

publishGlobalEvents('GAME_START', JSON.stringify(game));

SUBSCRIBE EVENT
subscribeGlobalEvents('GAME_START', (subEvent) => {
    subEvent.on("message", (channel, message) => {
        console.log(`Received the following message from ${channel}: ${message}`);
    });
});
```