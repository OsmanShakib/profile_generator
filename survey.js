const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    rl.question('What is your name? Nicknames are also acceptable ', (answer) => {
        rl.question('What is an activity you like doing?', (answer) => {
            rl.question('What do you listen to while doing that? ', (answer) => {
                rl.question('Which meal is your favourite ', (answer) => {
                    rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
                        });
                    });
                });
            });  
        }); 
    });
                

