var pkg = {
  fontSize:5,
  imgDim:50,
  imgUrl:"",
  msg:"",
  bgColor:"",
  fontColor:"",
  status:""
}

var image = document.querySelector("#previewImg");
var message = document.querySelector("#previewMsg");
var prev = document.querySelector("#preview");
var brd = document.querySelector("#board");
//PROXY
var handle = {
  set: function (obj, props, value) {
    if (props == "fontSize"){
      ChangePreviewFontSizeUI(value);
    }
    if (props == "imgDim"){
      ChangePreviewImgDimUI(value);
    }
    if (props == "imgUrl"){
      ChangePreviewImgUI(value);
    }
    if (props == "msg"){
      ChangePreviewMSGUI(value);
    }
    if (props == "fontColor"){
      ChangePreviewFontColorUI(value);
    }
    if (props == "bgColor"){
      ChangePreviewBGColorUI(value);
    }
  }
};
var prox = new Proxy(pkg, handle);

function CheckForPkg(){
  spkg = localStorage.getItem("package");

  if (spkg) {
    pkg = JSON.parse(spkg);
  }
  image.src = pkg.imgUrl;
  message.innerHTML = pkg.msg;
  image.style.height = pkg.imgDim+"%";
  image.style.width = pkg.imgDim +"%";
  message.style.fontSize = pkg.fontSize+"pt";
  message.style.color = pkg.fontColor;
  prev.style.backgroundColor =pkg.bgColor;
  console.log(pkg);
}
//state
function ChangePreview(el){
  if (el.id == "fontSize"){
    pkg.fontSize = el.value;
    prox.fontSize = pkg.fontSize;
    Save();
  }
  if (el.id  == "imgDim"){
    pkg.imgDim = el.value
    prox.imgDim = pkg.imgDim;
    Save();
  }
  if (el.id  == "imgUrl"){
    pkg.imgUrl = el.value
    prox.imgUrl = pkg.imgUrl;
    Save();
  }
  if (el.id  == "msg"){
    pkg.msg = el.value;
    prox.msg = pkg.msg;
    Save();
  }
  if (el.id  == "bgColor"){
    pkg.bgColor = el.value
    prox.bgColor = pkg.bgColor;
    Save();
  }
  if (el.id  == "fontColor"){
    pkg.fontColor = el.value
    prox.fontColor = pkg.bgColor;
    Save();
  }
}


function ClonePreview(){
  var newClone = prev.cloneNode(true);
  brd.appendChild(newClone);
  newClone.style.display = "inline-block";
  Save();

}

function Save(){
  localStorage.setItem("package", JSON.stringify(pkg));
}
//UI
function ChangePreviewImgUI(val){
  image.src = val;

}
function ChangePreviewMSGUI(val){
  message.innerHTML = val;
}
function ChangePreviewImgDimUI(val){
  image.style.height = val+"%";
  image.style.width = val +"%";
}
function ChangePreviewFontSizeUI(val){
  message.style.fontSize = val+"pt";
}
function ChangePreviewFontColorUI(val){
  message.style.color = val;
}
function ChangePreviewBGColorUI(val){
  prev.style.backgroundColor = val;
}
