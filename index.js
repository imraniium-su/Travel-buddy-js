var carobject = {
    vehicle: 'car',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    fareperkilo: 3,
    capasity: 4,
    descriptio: 'This car is very good'

};
var bikeobject = {
    vehicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdG9yYmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    fareperkilo: 1.5,
    capasity: 2,
    descriptio: 'This car is very good'

};
var busobject = {
    vehicle: 'bus',
    imageUrl: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    fareperkilo: 4,
    capasity: 30,
    descriptio: 'This car is very good'

};

const servicearray = [carobject, busobject, bikeobject];




document.getElementById('search-btn').addEventListener('click', function () {
    const value = document.getElementById('search-value').value;
    for (let i = 0; i < servicearray.length; i++) {
        const element = servicearray[i];
        if (value.toLowerCase() == element.vehicle.toLocaleLowerCase()) {
            console.log(element);
        }
    }

})