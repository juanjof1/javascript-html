const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

inf.textcontent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim, doloremque illo quis perspiciatis assumenda facilis voluptate at totam, error molestias fugiat nisi omnis, numquam magnam dignissimos earum adipisci quo';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    const listItem = document.createElement('li');
    const listcontent = prompt('favorite color');
    ListItem.textcontent= listcontent;
    list.appendChild(listItem);

    listItem.onclick = function(event){
    event.stopPropagation();
    const listcontent = prompt('change your color');
    this.textcontent = listcontent;
    }
    
}





