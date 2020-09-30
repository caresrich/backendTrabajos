import app from '../src/app.js';

async function main()
{
    await app.listen(5000);
    console.log('server create successfull');
    
}
main();