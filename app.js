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

function displayservice(service) {
    const mainsection = document.getElementById('main-section');
    const stringifiedobj = JSON.stringify(service);
    const div = document.createElement('div');
    div.innerHTML = `
    <section>
            <div class="card mb-3 mx-auto" style="max-width: 800px ;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src= ${service.imageUrl}
                            class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Transport Mode: ${service.vehicle}</h5>
                            <p class="card-text">Description: ${service.descriptio}</p>
                            <p class="card-text"><small class="text-muted">Fare per kilo : ${service.fareperkilo}</small><br><small class="text-muted">Capasity : ${service.capasity}</small></p>
                            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick= 'handlebooking(${stringifiedobj})'; data-bs-target="#exampleModal">
  Launch demo modal
</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    mainsection.appendChild(div);
    console.log(service);
}
displayservice(carobject);
displayservice(busobject);
displayservice(bikeobject);

// handle bookinh 
function handlebooking(obj) {
    const modalbody = document.getElementById('modal-body');

    modalbody.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehical Mode : ${obj.vehicle}</h5>
    <p class="card-text">Description: ${obj.descriptio}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo : ${obj.fareperkilo}</small><br><small class="text-muted">Capasity : ${obj.capasity}</small></p>
    <div class="d-flex flex-column" role="search">
                    <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
                    <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit" onclick='calculatecost()'>Submit</button>
                </div>
    
  </div>
</div>
    `

}

function calculatecost() {

}

