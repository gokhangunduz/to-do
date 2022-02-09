function DemoStart() {
	let temp = String(localStorage.getItem(0))
	console.log(temp)
	if (temp == "null") {
		localStorage.setItem(0, "?Ders Programı Hazırlanmalı")
		localStorage.setItem(1, "+Bugün Hep Gülümse :)")
		localStorage.setItem(2, "!Çöpler Atılmalı")
	}


}

function CheckItem() {
	for (i = 0; i < 999; i++) {
		let temp = String(localStorage.getItem(i))
		if (temp == "null") {
			i = i + 999
		} else {
			allitems[i] = String(localStorage.getItem(i))
		}
	}
	SortItem()
}

function SortItem() {
	for (i = 0; i < allitems.length; i++) {
		if (allitems[i].charAt(0) == "?") {
			waititems.push(allitems[i])
		}
	}
	for (i = 0; i < allitems.length; i++) {
		if (allitems[i].charAt(0) == "+") {
			okitems.push(allitems[i])
		}
	}
	for (i = 0; i < allitems.length; i++) {
		if (allitems[i].charAt(0) == "!") {
			delitems.push(allitems[i])
		}
	}
}

function WaitPasteItem() {
	let div_list = document.querySelector("#waititemlist")
	for (i = 0; i < waititems.length; i++) {
		deltemp = "'" + "w" + String(i) + "'"
		oktemp = "'" + "w" + String(i) + "'"
		div_list.innerHTML += '<div style="background-color: #0000ff10;border: 1px solid #c1c1c1!important;" id="wait-item-' + i + '" class="d-flex p-2 align-middle border rounded my-3"><span class="d-grid align-items-center fs-6 w-90">' + String(waititems[i]).slice(1) + '</span><button onclick="DelItem(' + deltemp + ')" class="btn btn-outline-danger w-10" type="button" id="del">×</button><button onclick="OkItem(' + oktemp + ')" class="btn btn-outline-success w-10" type="button" id="ok">✓</button></div>'
	}
}

function OkPasteItem() {
	let div_list = document.querySelector("#okitemlist")
	for (i = 0; i < okitems.length; i++) {
		deltemp = "'" + "o" + String(i) + "'"
		div_list.innerHTML += '<div style="background-color: #00ff0010;border: 1px solid #c1c1c1!important;" id="ok-item-' + i + '" class="d-flex p-2 align-middle border rounded my-3"><span class="d-grid align-items-center fs-6 w-90">' + String(okitems[i]).slice(1) + '</span><button onclick="DelItem(' + deltemp + ')" class="btn btn-outline-danger w-10" type="button" id="del">×</button></div>'
	}
}

function DelPasteItem() {
	let div_list = document.querySelector("#delitemlist")
	for (i = 0; i < delitems.length; i++) {
		deltemp = "'" + "d" + String(i) + "'"
		oktemp = "'" + "d" + String(i) + "'"
		div_list.innerHTML += '<div style="background-color: #f001;border: 1px solid #c1c1c1!important;" id="del-item-' + i + '" class="d-flex p-2 align-middle border rounded my-3"><span class="d-grid align-items-center fs-6 w-90">' + String(delitems[i]).slice(1) + '</span><button onclick="DelItem(' + deltemp + ')" class="btn btn-outline-danger w-10" type="button" id="del">×</button><button onclick="OkItem(' + oktemp + ')" class="btn btn-outline-success w-10" type="button" id="ok">✓</button></div>'
	}
}

function AddItem() {
	let itemtext = document.querySelector("#itemtext").value
	if (itemtext && itemtext.length < 30) {
		document.querySelector("#itemtext").value = ""
		localStorage.setItem(allitems.length, "?" + itemtext)
		RefreshDom()
	} else {
		alert("Hata! Öğe ismi yok veya 30 karakterden fazla.")
	}
}

function OkItem(id) {

	if (id.charAt(0) == "w") {
		tempid = id.slice(1)
		tempid = waititems[tempid]
		tempid = allitems.indexOf(tempid)
		temp2 = "+" + localStorage.getItem(tempid).slice(1)
		localStorage.setItem(tempid, temp2)
		RefreshDom()
	} else if (id.charAt(0) == "d") {
		tempid = id.slice(1)
		tempid = delitems[tempid]
		tempid = allitems.indexOf(tempid)
		temp2 = "+" + localStorage.getItem(tempid).slice(1)
		localStorage.setItem(tempid, temp2)
		RefreshDom()
	}

}

function DelItem(id) {

	if (id.charAt(0) == "w") {
		tempid = id.slice(1)
		tempid = waititems[tempid]
		tempid = allitems.indexOf(tempid)
		temp2 = "!" + localStorage.getItem(tempid).slice(1)
		localStorage.setItem(tempid, temp2)
		RefreshDom()
	} else if (id.charAt(0) == "o") {
		tempid = id.slice(1)
		tempid = okitems[tempid]
		tempid = allitems.indexOf(tempid)
		temp2 = "!" + localStorage.getItem(tempid).slice(1)
		localStorage.setItem(tempid, temp2)
		RefreshDom()
	} else if (id.charAt(0) == "d") {
		tempid = id.slice(1)
		tempid = delitems[tempid]
		tempid = allitems.indexOf(tempid)
		temp2 = "-" + localStorage.getItem(tempid).slice(1)
		localStorage.setItem(tempid, temp2)
		RefreshDom()
	}
}

function RefreshDom() {
	let div_list = document.querySelector("#waititemlist")
	div_list.innerHTML = ""
	div_list = document.querySelector("#okitemlist")
	div_list.innerHTML = ""
	div_list = document.querySelector("#delitemlist")
	div_list.innerHTML = ""
	allitems = []
	okitems = []
	waititems = []
	delitems = []
	CheckItem()
	WaitPasteItem()
	OkPasteItem()
	DelPasteItem()
}