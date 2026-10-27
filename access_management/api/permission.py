"""Apps screen visibility for Access Management."""

import frappe

ACCESS_MANAGEMENT_MODULE = "Access Management"


def has_app_permission() -> bool:
	"""Return whether the session user may open Access Management on the apps screen."""
	if frappe.session.user == "Guest":
		return False

	user = frappe.get_user()
	if not user.allow_modules:
		user.build_permissions()

	return ACCESS_MANAGEMENT_MODULE in user.allow_modules
