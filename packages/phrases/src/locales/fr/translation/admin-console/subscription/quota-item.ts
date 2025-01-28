const quota_item = {
  tenant_limit: {
    name: 'Locataires',
    limited: '{{count, number}} locataire',
    limited_other: '{{count, number}} locataires',
    unlimited: 'Illimité locataires',
    not_eligible: 'Supprimez vos locataires',
  },
  mau_limit: {
    name: 'Utilisateurs actifs mensuels',
    limited: '{{count, number}} MAU',
    unlimited: 'Illimité MAU',
    not_eligible: 'Supprimez tous vos utilisateurs',
  },
  token_limit: {
    name: 'Tokens',
    limited: '{{count, number}} token',
    limited_other: '{{count, number}} tokens',
    unlimited: 'Tokens illimités',
    not_eligible: 'Supprimez tous vos utilisateurs pour éviter de nouveaux tokens',
  },
  applications_limit: {
    name: 'Applications',
    limited: '{{count, number}} application',
    limited_other: '{{count, number}} applications',
    unlimited: 'Illimité applications',
    not_eligible: 'Supprimez vos applications',
  },
  machine_to_machine_limit: {
    name: 'Machine à machine',
    limited: '{{count, number}} application machine à machine',
    limited_other: '{{count, number}} applications machine à machine',
    unlimited: 'Illimité applications machine à machine',
    not_eligible: 'Supprimez vos applications machine à machine',
  },
  third_party_applications_limit: {
    name: 'Applications tierces',
    limited: '{{count, number}} application tierce',
    limited_other: '{{count, number}} applications tierces',
    unlimited: 'Applications tierces illimitées',
    not_eligible: 'Supprimez vos applications tierces',
  },
  resources_limit: {
    name: 'Ressources API',
    limited: '{{count, number}} ressource API',
    limited_other: '{{count, number}} ressources API',
    unlimited: 'Illimité ressources API',
    not_eligible: 'Supprimez vos ressources API',
  },
  scopes_per_resource_limit: {
    name: 'Permissions de ressource',
    limited: '{{count, number}} autorisation par ressource',
    limited_other: '{{count, number}} autorisations par ressource',
    unlimited: 'Illimité autorisation par ressource',
    not_eligible: 'Supprimez vos permissions de ressource',
  },
  custom_domain_enabled: {
    name: 'Domaine personnalisé',
    limited: 'Domaine personnalisé',
    unlimited: 'Domaine personnalisé',
    not_eligible: 'Supprimez votre domaine personnalisé',
  },
  omni_sign_in_enabled: {
    name: 'Connexion omni',
    limited: 'Connexion omni',
    unlimited: 'Connexion omni',
    not_eligible: 'Désactivez votre connexion omni',
  },
  built_in_email_connector_enabled: {
    name: 'Connecteur de messagerie intégré',
    limited: 'Connecteur de messagerie intégré',
    unlimited: 'Connecteur de messagerie intégré',
    not_eligible: 'Supprimez votre connecteur de messagerie intégré',
  },
  social_connectors_limit: {
    name: 'Connecteurs sociaux',
    limited: '{{count, number}} connecteur social',
    limited_other: '{{count, number}} connecteurs sociaux',
    unlimited: 'Illimité connecteurs sociaux',
    not_eligible: 'Supprimez vos connecteurs sociaux',
  },
  standard_connectors_limit: {
    name: 'Connecteurs standards gratuits',
    limited: '{{count, number}} connecteur standard gratuit',
    limited_other: '{{count, number}} connecteurs standards gratuits',
    unlimited: 'Illimité connecteurs standards',
    not_eligible: 'Supprimez vos connecteurs standards',
  },
  roles_limit: {
    name: 'Rôles',
    limited: '{{count, number}} rôle',
    limited_other: '{{count, number}} rôles',
    unlimited: 'Illimité rôles',
    not_eligible: 'Supprimez vos rôles',
  },
  machine_to_machine_roles_limit: {
    name: 'Roles Machine à machine',
    limited: '{{count, number}} rôle machine à machine',
    limited_other: '{{count, number}} rôles machine à machine',
    unlimited: 'Rôles machine à machine illimités',
    not_eligible: 'Supprimez vos rôles machine à machine',
  },
  scopes_per_role_limit: {
    name: 'Permissions de rôle',
    limited: '{{count, number}} permission par rôle',
    limited_other: '{{count, number}} permissions par rôle',
    unlimited: 'Illimité permission par rôle',
    not_eligible: 'Supprimez vos permissions de rôle',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Webhooks illimités',
    not_eligible: 'Supprimez vos webhooks',
  },
  organizations_enabled: {
    name: 'Organisations',
    limited: 'Organisations',
    unlimited: 'Organisations',
    not_eligible: 'Supprimez vos organisations',
  },
  audit_logs_retention_days: {
    name: "Conservation des journaux d'audit",
    limited: "Conservation des journaux d'audit: {{count, number}} jour",
    limited_other: "Conservation des journaux d'audit: {{count, number}} jours",
    unlimited: 'Jours illimités',
    not_eligible: "Pas de journalisation d'audit",
  },
  email_ticket_support: {
    name: 'Assistance par ticket de messagerie électronique',
    limited: "{{count, number}} heure d'assistance par ticket de messagerie électronique",
    limited_other: "{{count, number}} heures d'assistance par ticket de messagerie électronique",
    unlimited: 'Assistance par ticket de messagerie électronique',
    not_eligible: 'Aucune assistance par ticket de messagerie électronique',
  },
  mfa_enabled: {
    name: 'Authentification à deux facteurs',
    limited: 'Authentification à deux facteurs',
    unlimited: 'Authentification à deux facteurs',
    not_eligible: 'Supprimez votre authentification à deux facteurs',
  },
  sso_enabled: {
    name: 'SSO Entreprise',
    limited: 'SSO Entreprise',
    unlimited: 'SSO Entreprise',
    not_eligible: 'Supprimez votre SSO Entreprise',
  },
  tenant_members_limit: {
    name: 'Membres du locataires',
    limited: '{{count, number}} membre du locataire',
    limited_other: '{{count, number}} membres du locataire',
    unlimited: 'Membres du locataire illimités',
    not_eligible: 'Supprimez vos membres du locataire',
  },
  custom_jwt_enabled: {
    name: 'JWT personnalisé',
    limited: 'JWT personnalisé',
    unlimited: 'JWT personnalisé',
    not_eligible: 'Supprimez votre personnaliseur de revendications JWT',
  },
  impersonation_enabled: {
    name: 'Usurpation',
    limited: 'Usurpation',
    unlimited: 'Usurpation',
    not_eligible: 'Aucune usurpation autorisée',
  },
  bring_your_ui_enabled: {
    name: 'Apportez votre UI',
    limited: 'Apportez votre UI',
    unlimited: 'Apportez votre UI',
    not_eligible: 'Supprimez vos ressources UI personnalisées',
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
