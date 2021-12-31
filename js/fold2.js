var card_category_list = document.getElementsByClassName("card-category-list child"); // 获取元素集合
var item = document.getElementsByClassName("card-category-list-item"); // 获取元素集合

function menu_over(t) {     
    var display = t.parentElement.nextSibling.style.display;     // 返回t的父元素节点名称，返回同胞
    if(display == "none"){
        t.parentElement.nextSibling.style.display = "block";         
        t.parentElement.nextSibling.style.height = "0%";         
        t.className = t.className.replace("fa-chevron-right", "fa-chevron-down");   
    }  
}

function menu_out(t){
    var display = t.parentElement.nextSibling.style.display;
    if(display != "none"){
        t.parentElement.nextSibling.style.display = "none";
        t.className = t.className = t.className.replace("fa-chevron-down", "fa-chevron-right");
    }
}

function delete_href(){
    var card_category_list_link = document.getElementsByClassName("card-category-list-link"); // 返回带有超链接的集合
    for(var i = 0; i < card_category_list_link.length; i++){
        // alert(card_category_list_link[i])
        card_category_list_link[i].removeAttribute("href");
    }
}
// delete_href();
for (var i = 0; i < card_category_list.length; i++) {   
    card_category_list[i].style.display = "none";     
    card_category_list[i].style.transition = "all 1s";     
    card_category_list[i].previousSibling.innerHTML += '<i class="fa fa-chevron-right menus-expand  menus-close" aria-hidden="false" onmouseover="menu_over(this)" onmouseout="menu_out(this)" style="margin-left:15px;"></i>'; 
}