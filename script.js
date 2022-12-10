var counter = 1;
const target = document.getElementById('target');
var val_input = document.getElementById('value');
const updateBtn = document.getElementsByClassName('add_button')[0];
var is_update=false;
var editId = "";
function getValue() {
	var is_duplicate = false;
	var is_space=false;
	var val = val_input.value;
	val=val.trim();
	if (val=="") {
		is_space=true;
	}
	else
	{
		is_space=false;
	}
	for (var i = 1; i < counter; i++) {
		var temp = document.getElementById('list_text_'+i).innerHTML;
		if (is_duplicate==false) {
			if (val==temp) {
				is_duplicate=true;
			}
			else
			{
				is_duplicate=false;
			}
		}
	}
	if (is_update==false && is_duplicate == false && is_space==false) {
	target.innerHTML+='<div class="list_item" id="list_item_'+counter+'"><div id="list_text_'+counter+'" class="list_text">'+val+'</div><img onclick="editItem(\'list_text_'+counter+'\')" id="edit_'+counter+'" class="edit_btn" src="https://img.icons8.com/material-two-tone/2x/edit.png" alt="..."><a href="#" class="del_btn" id="delete_list_item_'+counter+'" onclick="deleteItem(\'list_item_'+counter+'\')"><img class="delete_btn" src="https://img.icons8.com/fluency/2x/filled-trash.png" alt=""></a></div>';
	counter++;
	val_input.value="";
	}
	if (is_update == true) {
		is_update=false;
		updateBtn.innerHTML='ADD';
 		document.getElementById(editId).innerHTML = val;
	}
}
function deleteItem(id)
{
  	const deleteDiv = document.getElementById(id);
    deleteDiv.style.display="none";
}
function editItem(id) {
	is_update=true;
	editId=id;
	editTextId = document.getElementById(id).innerHTML ;
	val_input.value=editTextId;
 	updateBtn.innerHTML='UPDATE';
}