// Copyright (c) 2025, ALYF GmbH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Personal Data Controller", {
	refresh: function (frm) {
		frm.set_query("customer_contact", (doc) => {
			return {
				query: "frappe.contacts.doctype.contact.contact.contact_query",
				filters: {
					link_doctype: "Customer",
					link_name: doc.customer,
				},
			};
		});
	},
});
