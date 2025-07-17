// Copyright (c) 2025, ALYF GmbH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Data Protection Measure Category", {
	refresh: function (frm) {
		frm.set_query("parent_data_protection_measure_category", {
			filters: {
				is_group: 1,
			},
		});
	},
});
