// Copyright (c) 2025, ALYF GmbH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Personal Data Processor", {
	refresh: function (frm) {
		frm.set_query("supplier_contact", (doc) => {
			return {
				query: "frappe.contacts.doctype.contact.contact.contact_query",
				filters: {
					link_doctype: "Supplier",
					link_name: doc.supplier,
				},
			};
		});
	},
});
