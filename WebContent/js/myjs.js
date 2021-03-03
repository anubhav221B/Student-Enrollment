function isValid(name,email,website,image,gender,skills){
	if (name.length === 0) {
        alert("Name field cannot be empty");
        document.getElementById("name").focus();
        return false;
    }
	if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
		alert("You have entered an invalid email address!")
		document.getElementById("website").focus();
		return (false)
	}
	if (website.length === 0) {
        alert("Website field cannot be empty");
        document.getElementById("website").focus();
        return false;
    }
	if (image.length === 0) {
        alert("Image Link field cannot be empty");
        document.getElementById("image").focus();
        return false;
    }
	if (skills.length === 0) {
        alert("Select atleast one skill");
        return false;
    }
	return true;
}
function addData(){
	let name=document.getElementById("name").value;
	let email=document.getElementById("email").value;
	let website=document.getElementById("website").value;
	let image=document.getElementById("image").value;
	let radios=document.getElementsByName("gender");
	let gender="";
	for (var radio of radios) {
    if (radio.checked) {
		gender=radio.value;
		}
	}
	let check=document.getElementsByName("skills");
	let skills="";
	for (var checks of check) {
    if (checks.checked) {
			if(skills.length>0)
				skills += ",";
			skills +=checks.value;
		}
	}
	if(!isValid(name,email,website,image,gender,skills)){
		return;
	}
	let table = document.getElementById("tableResult");
    let tableData = "<b>" + name + "</b>" + "<br>" + gender + "<br>" + email + "<br><a target='_blank' href=http://" + website + ">" + website + "</a><br>";
    tableData += skills;


    let row = table.insertRow(1);

    let cell1 = row.insertCell(0);

    let cell2 = row.insertCell(1);

    cell1.innerHTML = tableData;

    cell2.innerHTML = '<img src=' + image + ' class="img-fluid" alt="Image not Fouund" style="height:100px; width:100px">';

    document.getElementById("newForm").reset();
}

document.getElementById("enroll").addEventListener("click",addData);