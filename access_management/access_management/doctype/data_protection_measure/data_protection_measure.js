// Copyright (c) 2025, ALYF GmbH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Data Protection Measure", {
	refresh: function (frm) {
		frm.set_query("category_group", (doc) => {
			return {
				filters: {
					is_group: 1,
				},
			};
		});
		frm.set_query("category", (doc) => {
			return {
				filters: {
					parent_data_protection_measure_category: doc.category_group,
				},
			};
		});
	},
});
