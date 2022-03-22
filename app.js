
//Get Elements

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const add_new_staff = document.getElementById('add_new_staff');
const all_staff_list = document.getElementById('all_staff_list');


add_new_staff.addEventListener('submit', function(e) {
    e.preventDefault();

    const msg = document.querySelector('.msg');

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let {name, phone, gender, skill, location, photo} = data;
    
    if (name == '' || phone == '' || gender == '' || skill == '', location =='') {

        msg.innerHTML = Alert.danger('All fields are required...!');
        
    }else{
        
        Storage.set('staffs', data);
        add_new_staff.reset();

        getAllStaff();
        
    }

});

getAllStaff();
function getAllStaff(){

    let data = Storage.get('staffs');

    let list = '';

    data.map((data, index) => {
        let {name, phone, gender, skill, location, photo} = data;

        list += `
        <tr class="text-center">
            <td>${ index + 1 }</td>
            <td>${ name }</td>
            <td>${ phone }</td>
            <td>${ gender }</td>
            <td>${ skill }</td>
            <td>${ location }</td>
            <td><img class="img-thumbnail rounded-circle" style="width: 50px; height: 50px; object-fit: cover;" src="${ photo ? photo : './assets/img/avater.png' }" alt=""></td>
            <td>
            <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#view_staff_data"><i class="fas fa-eye"></i></button>
            <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#edit_staff_data"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delete_staff_data"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
        `

    });
    all_staff_list.innerHTML = list;
};