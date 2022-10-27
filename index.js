let inputName=document.getElementById("productName");
let inputPrice=document.getElementById("productPrice");
let inputCategory=document.getElementById("productCategory");
let inputDesc=document.getElementById("productDesc");
let tbody=document.getElementById("tbody");
let myBtn=document.getElementById("addProduct")
let curentindex;
let listProduct;
if(localStorage.getItem('Products') !=null)
{
  listProduct=JSON.parse(localStorage.getItem('Products'));
  display();
}
else
{
  listProduct=[];
}


const btn=document.getElementById("addProduct")
btn.addEventListener("click",add)
function add(){
  if(myBtn.innerHTML=="Add Product"){
    addProduct()
  }
  else{
    addUpdate()
  }
}

function addProduct(){
  let singleProduct=
    {
        produtName:inputName.value,
        productPrice:inputPrice.value,
        productCategory:inputCategory.value,
        productDesc:inputDesc.value,
    }
    listProduct.push(singleProduct)
    localStorage.setItem('Products',JSON.stringify(listProduct))
    display();
    console.log(listProduct);
}
const btnClear=document.getElementById("clearProduct")
btnClear.addEventListener("click",clearForm)

function clearForm(){
    inputName.value="";
    inputPrice.value="";
    inputCategory.value="";
    inputDesc.value="";
}
function display(){
    str=""
    for(let i=0;i<listProduct.length;i++){
        str+=` <tr> 
        <td>${i}</td>
        <td>${listProduct[i].produtName}</td>
        <td>${listProduct[i].productPrice}</td>
        <td>${listProduct[i].productCategory}</td>
        <td>${listProduct[i].productDesc}</td>
       

        <td>
            <button onclick='update(${i})' class="btn btn-warning">Update</button>
        </td>
        <td>
          <button onclick='deletProduct(${i})' class="btn btn-danger">Delete</button>
        </td>

      </tr>`
    }
    tbody.innerHTML=str;

}
function deletProduct(index){
  listProduct.splice(index,1)
  localStorage.setItem('Products',JSON.stringify(listProduct))
  display();

}

function search (term)
{
  str="";
  for(var i=0;i<listProduct.length;i++){
    if(listProduct[i].produtName.toLowerCase().includes(term.toLowerCase())==true){
      str+=` <tr> 
        <td>${i}</td>
        <td>${listProduct[i].produtName}</td>
        <td>${listProduct[i].productPrice}</td>
        <td>${listProduct[i].productCategory}</td>
        <td>${listProduct[i].productDesc}</td>
       

        <td>
            <button onclick='update(${i})' class="btn btn-warning">Update</button>
        </td>
        <td>
          <button onclick='deletProduct(${i})' class="btn btn-danger">Delete</button>
        </td>

      </tr>`

    }
  }
  tbody.innerHTML=str;

}
// search("T")
function update(index){
  curentindex=index;
  inputName.value=listProduct[index].produtName
  inputPrice.value=listProduct[index].productPrice
  inputCategory.value=listProduct[index].productCategory
  inputDesc.value=listProduct[index].productDesc
myBtn.innerHTML="Update"

}

function addUpdate(){
  listProduct[curentindex].produtName=inputName.value
  listProduct[curentindex].productPrice=inputPrice.value
  listProduct[curentindex].productCategory=inputCategory.value
  listProduct[curentindex].productDesc=inputDesc.value
  myBtn.innerHTML="Add Product"
  localStorage.setItem('Products',JSON.stringify(listProduct))
  display();

}