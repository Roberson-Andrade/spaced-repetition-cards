import { app } from './app';

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3000);
