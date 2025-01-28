const quota_item = {
  tenant_limit: {
    name: 'المستأجرون',
    limited: '{{count, number}} مستأجر',
    limited_other: '{{count, number}} مستأجرين',
    unlimited: 'عدد غير محدود من المستأجرين',
    not_eligible: 'قم بإزالة المستأجرين الخاصين بك',
  },
  mau_limit: {
    name: 'المستخدمون النشطون شهريًا',
    limited: '{{count, number}} مستخدم نشط شهريًا',
    unlimited: 'عدد غير محدود من المستخدمين النشطين شهريًا',
    not_eligible: 'قم بإزالة جميع المستخدمين الخاصين بك',
  },
  token_limit: {
    name: 'الرموز',
    limited: '{{count, number}} رمز',
    limited_other: '{{count, number}} رموز',
    unlimited: 'عدد غير محدود من الرموز',
    not_eligible: 'قم بإزالة جميع المستخدمين الخاصين بك لمنع إنشاء رموز جديدة',
  },
  applications_limit: {
    name: 'التطبيقات',
    limited: '{{count, number}} تطبيق',
    limited_other: '{{count, number}} تطبيقات',
    unlimited: 'عدد غير محدود من التطبيقات',
    not_eligible: 'قم بإزالة التطبيقات الخاصة بك',
  },
  machine_to_machine_limit: {
    name: 'تطبيقات الجهاز إلى الجهاز',
    limited: '{{count, number}} تطبيق الجهاز إلى الجهاز',
    limited_other: '{{count, number}} تطبيقات الجهاز إلى الجهاز',
    unlimited: 'عدد غير محدود من تطبيقات الجهاز إلى الجهاز',
    not_eligible: 'قم بإزالة تطبيقات الجهاز إلى الجهاز الخاصة بك',
  },
  third_party_applications_limit: {
    name: 'تطبيقات الطرف الثالث',
    limited: '{{count, number}} تطبيق الطرف الثالث',
    limited_other: '{{count, number}} تطبيقات الطرف الثالث',
    unlimited: 'عدد غير محدود من تطبيقات الطرف الثالث',
    not_eligible: 'قم بإزالة تطبيقات الطرف الثالث الخاصة بك',
  },
  resources_limit: {
    name: 'موارد الواجهة البرمجية',
    limited: '{{count, number}} مورد واجهة برمجة تطبيقات',
    limited_other: '{{count, number}} موارد واجهة برمجة تطبيقات',
    unlimited: 'عدد غير محدود من موارد الواجهة البرمجية',
    not_eligible: 'قم بإزالة موارد الواجهة البرمجية الخاصة بك',
  },
  scopes_per_resource_limit: {
    name: 'أذونات الموارد',
    limited: '{{count, number}} إذن لكل مورد',
    limited_other: '{{count, number}} أذونات لكل مورد',
    unlimited: 'عدد غير محدود من الأذونات لكل مورد',
    not_eligible: 'قم بإزالة أذونات الموارد الخاصة بك',
  },
  custom_domain_enabled: {
    name: 'النطاق المخصص',
    limited: 'النطاق المخصص',
    unlimited: 'النطاق المخصص',
    not_eligible: 'قم بإزالة النطاق المخصص الخاص بك',
  },
  omni_sign_in_enabled: {
    name: 'تسجيل الدخول الموحد',
    limited: 'تسجيل الدخول الموحد',
    unlimited: 'تسجيل الدخول الموحد',
    not_eligible: 'قم بتعطيل تسجيل الدخول الموحد الخاص بك',
  },
  built_in_email_connector_enabled: {
    name: 'موصل البريد الإلكتروني المدمج',
    limited: 'موصل البريد الإلكتروني المدمج',
    unlimited: 'موصل البريد الإلكتروني المدمج',
    not_eligible: 'قم بإزالة موصل البريد الإلكتروني المدمج الخاص بك',
  },
  social_connectors_limit: {
    name: 'موصلات التواصل الاجتماعي',
    limited: '{{count, number}} موصل تواصل اجتماعي',
    limited_other: '{{count, number}} موصلات تواصل اجتماعي',
    unlimited: 'عدد غير محدود من موصلات التواصل الاجتماعي',
    not_eligible: 'قم بإزالة موصلات التواصل الاجتماعي الخاصة بك',
  },
  standard_connectors_limit: {
    name: 'موصلات قياسية مجانية',
    limited: '{{count, number}} موصل قياسي مجاني',
    limited_other: '{{count, number}} موصلات قياسية مجانية',
    unlimited: 'عدد غير محدود من موصلات القياسية',
    not_eligible: 'قم بإزالة موصلات القياسية الخاصة بك',
  },
  roles_limit: {
    name: 'الأدوار',
    limited: '{{count, number}} دور',
    limited_other: '{{count, number}} أدوار',
    unlimited: 'عدد غير محدود من الأدوار',
    not_eligible: 'قم بإزالة الأدوار الخاصة بك',
  },
  machine_to_machine_roles_limit: {
    name: 'أدوار الجهاز إلى الجهاز',
    limited: '{{count, number}} دور الجهاز إلى الجهاز',
    limited_other: '{{count, number}} أدوار الجهاز إلى الجهاز',
    unlimited: 'عدد غير محدود من أدوار الجهاز إلى الجهاز',
    not_eligible: 'قم بإزالة أدوار الجهاز إلى الجهاز الخاصة بك',
  },
  scopes_per_role_limit: {
    name: 'أذونات الأدوار',
    limited: '{{count, number}} إذن لكل دور',
    limited_other: '{{count, number}} أذونات لكل دور',
    unlimited: 'عدد غير محدود من الأذونات لكل دور',
    not_eligible: 'قم بإزالة أذونات الأدوار الخاصة بك',
  },
  hooks_limit: {
    name: 'الخطافات',
    limited: '{{count, number}} خطاف',
    limited_other: '{{count, number}} خطافات',
    unlimited: 'عدد غير محدود من الخطافات',
    not_eligible: 'قم بإزالة الخطافات الخاصة بك',
  },
  organizations_enabled: {
    name: 'المنظمات',
    limited: 'المنظمات',
    unlimited: 'المنظمات',
    not_eligible: 'قم بإزالة المنظمات الخاصة بك',
  },
  audit_logs_retention_days: {
    name: 'احتفاظ بسجلات التدقيق',
    limited: 'احتفاظ بسجلات التدقيق: {{count, number}} يوم',
    limited_other: 'احتفاظ بسجلات التدقيق: {{count, number}} أيام',
    unlimited: 'عدد غير محدود من الأيام',
    not_eligible: 'لا توجد سجلات تدقيق',
  },
  email_ticket_support: {
    name: 'دعم تذاكر البريد الإلكتروني',
    limited: '{{count, number}} ساعة دعم تذاكر البريد الإلكتروني',
    limited_other: '{{count, number}} ساعات دعم تذاكر البريد الإلكتروني',
    unlimited: 'دعم تذاكر البريد الإلكتروني',
    not_eligible: 'لا يوجد دعم تذاكر البريد الإلكتروني',
  },
  mfa_enabled: {
    name: 'المصادقة ذات العوامل المتعددة',
    limited: 'المصادقة ذات العوامل المتعددة',
    unlimited: 'المصادقة ذات العوامل المتعددة',
    not_eligible: 'قم بإزالة المصادقة ذات العوامل المتعددة الخاصة بك',
  },
  sso_enabled: {
    name: 'SSO المؤسسي',
    limited: 'SSO المؤسسي',
    unlimited: 'SSO المؤسسي',
    not_eligible: 'قم بإزالة SSO المؤسسي الخاص بك',
  },
  tenant_members_limit: {
    name: 'أعضاء المستأجر',
    limited: '{{count, number}} عضو في المستأجر',
    limited_other: '{{count, number}} أعضاء المستأجر',
    unlimited: 'عدد غير محدود من أعضاء المستأجر',
    not_eligible: 'قم بإزالة أعضاء المستأجر الخاصين بك',
  },
  custom_jwt_enabled: {
    name: 'JWT المخصص',
    limited: 'JWT المخصص',
    unlimited: 'JWT المخصص',
    not_eligible: 'قم بإزالة مُعدّل العبارات JWT الخاص بك',
  },
  impersonation_enabled: {
    name: 'التمثيل',
    limited: 'التمثيل',
    unlimited: 'التمثيل',
    not_eligible: 'لا يُسمح بالتمثيل',
  },
  bring_your_ui_enabled: {
    name: 'اجلب واجهة المستخدم الخاصة بك',
    limited: 'اجلب واجهة المستخدم الخاصة بك',
    unlimited: 'اجلب واجهة المستخدم الخاصة بك',
    not_eligible: 'قم بإزالة أصول واجهة المستخدم المخصصة الخاصة بك',
  },
  idp_initiated_sso_enabled: {
    /** UNTRANSLATED */
    name: 'IDP-initiated SSO',
    /** UNTRANSLATED */
    limited: 'IDP-initiated SSO',
    /** UNTRANSLATED */
    unlimited: 'IDP-initiated SSO',
    /** UNTRANSLATED */
    not_eligible: 'IDP-initiated SSO not allowed',
  },
  saml_applications_limit: {
    /** UNTRANSLATED */
    name: 'SAML applications',
    /** UNTRANSLATED */
    limited: '{{count, number}} SAML application',
    /** UNTRANSLATED */
    limited_other: '{{count, number}} SAML applications',
    /** UNTRANSLATED */
    unlimited: 'Unlimited SAML applications',
    /** UNTRANSLATED */
    not_eligible: 'Remove your SAML applications',
  },
};

export default Object.freeze(quota_item);
