// Copyright (c) 2022, Samia Saba And Rowan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Content Templates', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on("Content Templates", {
	"content": function(frm) {
		frm.add_fetch("content", "Content Templates", "Transaction");
	}
});
