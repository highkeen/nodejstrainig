function getData() {
    return new Promise(resolve => {
        setTimeout(() => { resolve('hello'); }, 3000);
    });
}

async function caller() {
    console.log('start');
    const response = await getData();
    console.log(response);
    console.log('end');
}

caller();
