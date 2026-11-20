# Copyright (c) 2025, ALYF GmbH and Contributors
# See license.txt

import frappe
from frappe.tests import IntegrationTestCase

# The tests don't need Customer or Supplier records
IGNORE_TEST_RECORD_DEPENDENCIES = ["Personal Data Controller", "Personal Data Processor"]


class TestPersonalDataBreach(IntegrationTestCase):
	def test_fetches_dpa_email_and_phone_from_contact(self):
		contact = frappe.new_doc("Contact")
		contact.first_name = "Data Protection Officer"
		contact.append("email_ids", {"email_id": "dpo@example.com", "is_primary": 1})
		contact.append("phone_nos", {"phone": "+49 30 123456", "is_primary_phone": 1})
		contact.insert()

		breach = frappe.new_doc("Personal Data Breach")
		breach.title = "Lost laptop"
		breach.data_protection_officer = contact.name
		breach.insert()

		self.assertEqual(breach.dpa_email, "dpo@example.com")
		self.assertEqual(breach.dpa_phone, "+49 30 123456")
