# Copyright (c) 2025, ALYF GmbH and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class DataProtectionMeasure(Document):
	def validate(self):
		if self.category_group and self.category:
			is_group = frappe.db.get_value(
				"Data Protection Measure Category", self.category_group, "is_group"
			)
			if not is_group:
				frappe.throw(_("The selected Category Group is not a group."))

			parent, child_is_group = frappe.db.get_value(
				"Data Protection Measure Category",
				self.category,
				["parent_data_protection_measure_category, is_group"],
			)
			if parent and self.category_group != parent:
				frappe.throw(_("The selected Category is not a child of the selected Category Group."))

			if child_is_group:
				frappe.throw(_("The selected Category is a group. Please select a child category."))
