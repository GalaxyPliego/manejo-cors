if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
    .then(reg=> console.log('Sw exitoso'))
    .catch(error=>console.error('SW registro fallido',error))
}

fetch('https://random-d.uk/')
.then(res=>res.json())
.then(console.log)