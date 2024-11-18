var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://okelo:kothbiro@cluster0.b3e32.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://okelo:kothbiro@cluster0.b3e32.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://okelo:kothbiro@cluster0.b3e32.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
