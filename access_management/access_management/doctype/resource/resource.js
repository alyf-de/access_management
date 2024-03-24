// Copyright (c) 2024, ALYF GmbH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Resource", {
	setup: function (frm) {
		frm.set_query("owner_contact", (doc) => {
			return {
				query: "frappe.contacts.doctype.contact.contact.contact_query",
				filters: {
					link_doctype: doc.owner_type,
					link_name: doc.owner1,
				},
			};
		});

		frm.set_query("provider_contact", (doc) => {
			return {
				query: "frappe.contacts.doctype.contact.contact.contact_query",
				filters: {
					link_doctype: "Supplier",
					link_name: doc.provider,
				},
			};
		});
	},
});
