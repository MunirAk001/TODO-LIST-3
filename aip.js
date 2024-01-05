import { get } from "./dom.js";

let api = "http://localhost:3000/data";

// get
async function getData() {
  try {
    const { data } = await axios.get(api);
    get(data);
  } catch (error) {
    console.log(Error);
  }
}

// delete
async function deleteUser(id) {
  try {
    const { data } = await axios.delete(`${api}/${id}`);
    getData();
  } catch (error) {
    console.log(Error);
  }
}

// add
async function postUser(user) {
  try {
    const { data } = await axios.post(api, user);
    getData();
  } catch (error) {
    console.log(Error);
  }
}

// edit
async function editUser(id, user) {
  try {
    const { data } = await axios.put(`${api}/${id}`, user);
    getData(data);
  } catch (error) {
    console.log(Error);
  }
}

// compleated
async function compleated(id, user) {
  try {
    let { data } = await axios.put(`${api}/${id}`, user);
    getData();
  } catch (error) {
    console.log(error);
  }
}

// ----  selects  function----

async function selects(values) {
  try {
    let { data } = await axios.get(`${api}?status=${values}`);
    get(data);
  } catch (error) {}
}

// sort function
async function sortuser() {
  try {
    let { data } = await axios.get(`${api}?_sort=title`);
    get(data);
  } catch (error) {
    console.log(error);
  }
}




//----------------
 async function sruer (search) {
  try {
    let { data } = await axios.get(`${api}?q=${search.value}`);
    get(data);
  } catch (error) {
    console.log(Error);
  }
}


// ---- end of seaech  function----

export default getData;
export {deleteUser, postUser,sruer,sortuser, editUser, compleated, selects };