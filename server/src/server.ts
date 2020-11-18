import app from './app'
import Config from './config/config';

const PORT = process.env.PORT || Config.server.PORT;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



