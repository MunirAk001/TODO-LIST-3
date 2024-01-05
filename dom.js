import {
  deleteUser,
  postUser,
  editUser,
  compleated,
  sruer,
  sortuser,
  selects
} from "./aip.js";

let box = document.querySelector(".box");
let infoModal = document.querySelector(".infoModal");
let infodiv = document.querySelector(".infodiv");
let intcencle = document.querySelector(".intcencle");
let selectedOption = document.querySelector(".selectedOption");
// let slett = document.querySelector(".slett");

 

//  slett.onclick = () => {
//    selects(fl.value);
//    console.log("jjj");
//  };

intcencle.onclick = () => {
  infoModal.close();
};
//sort

let btnSort = document.querySelector(".btnSort");

// search.
let search = document.querySelector(".search");
search.oninput = () => {
  sruer(search);
};

function get(data) {
  box.innerHTML = "";
  data.forEach((el) => {
    btnSort.onclick = () => {
      sortuser(el.title);
    };

    // selects
   

    // end of  selects
    let div = document.createElement("tr");
    div.className = "div";

    let title = document.createElement("td");
    title.innerHTML = el.title;
    title.className = "title";

    let status = document.createElement("td");
    status.innerHTML = el.status;
    status.className = "title";

    let infor = document.createElement("td");
    infor.innerHTML = el.role;
    infor.className = "title";

    let btnDelete = document.createElement("img");
    btnDelete.src = "/DETLT.png";
    btnDelete.className = "deimg";
    btnDelete.onclick = () => {
      deleteUser(el.id);
    };

    let btnEdit = document.createElement("img");
    btnEdit.src = "/EDIT.png";
    btnEdit.className = "deimg";

    btnEdit.onclick = () => {
      edit(el);
    };
    let btninfo = document.createElement("img");
    btninfo.src = "/INFO.png";
    btninfo.className = "deimg";
    let btns = document.createElement("td");
    btns.className = "btns";

    // --------info

    let infoh1 = document.createElement("p");
    let infoprace = document.createElement("p");
    let informetion = document.createElement("p");

    btninfo.onclick = () => {
      infoModal.showModal();

      infoprace.innerHTML = el.status;
      informetion.innerHTML = el.title;
      infoh1.innerHTML = el.role;

      infodiv.append(informetion, infoprace, infoh1);
    };

    // -------- end of info

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = el.status;
    checkbox.onclick = () => {
      el.status = !el.status;
      compleated(el.id, el);
    };
    if (el.status) {
      // title.className="stsutAtion"
    }
    btns.append(btninfo, checkbox, btnEdit, btnDelete);
    div.append(title, infor, status, btns);

    box.appendChild(div);
  });
}

// add
let btnAdd = document.querySelector(".btnAdd");

btnAdd.onclick = () => {
  addModal.showModal();
};

let addModal = document.querySelector(".addModal");
let addForm = document.querySelector(".addForm");

addForm.onsubmit = (e) => {
  e.preventDefault();
  let user = {
    title: addForm["title"].value,
    status: addForm["status"].value,
    role: addForm["role"].value,
  };
  console.log(user);
  postUser(user);
  addForm.reset();
};

// edit
let editModal = document.querySelector(".editModal");
let editForm = document.querySelector(".editForm");
function edit(el) {
  editModal.showModal();
  (editForm["title"].value = el.title),
    (editForm["status"].value = el.status),
    (editForm["role"].value = el.role);

  editForm.onsubmit = (e) => {
    e.preventDefault();
    let user = {
      title: editForm["title"].value,
      status: editForm["status"].value,
      role: editForm["role"].value,
    };
    editUser(el.id, user);
  };
}

// ---- selects ----

// ----  end of selects ----

export { get };
