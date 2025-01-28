import add_on from './add-on.js';
import featured_plan_content from './featured-plan-content.js';
import paywall from './paywall.js';

const upsell = {
  upgrade_plan: 'Ulepsz plan',
  compare_plans: 'Porównaj plany',
  view_plans: 'Zobacz plany',
  create_tenant: {
    title: 'Wybierz swój plan najemcy',
    description:
      'Logto oferuje konkurencyjne opcje planów z innowacyjnym i przystępnym cenowo modelem dla rozwijających się firm. <a>Dowiedz się więcej</a>',
    base_price: 'Cena podstawowa',
    monthly_price: '{{value, number}}/mies.',
    view_all_features: 'Zobacz wszystkie funkcje',
    select_plan: 'Wybierz <name/>',
    free_tenants_limit: 'Do {{count, number}} bezpłatnego najemcy',
    free_tenants_limit_other: 'Do {{count, number}} bezpłatnych najemców',
    most_popular: 'Najpopularniejszy',
    upgrade_success: 'Pomyślnie ulepszono do <name/>',
  },
  mau_exceeded_modal: {
    title: 'MAU przekroczyło limit. Ulepsz swój plan.',
    notification:
      'Obecna liczba MAU przekroczyła limit planu <planName/>. Proszę natychmiast zaktualizować swój plan na wersję premium, aby uniknąć zawieszenia usługi Logto.',
    update_plan: 'Zaktualizuj plan',
  },
  token_exceeded_modal: {
    /** UNTRANSLATED */
    title: 'Token usage exceeded the limit. Upgrade your plan.',
    /** UNTRANSLATED */
    notification:
      'You have exceeded your <planName/> token usage limit. Users will not be able to access the Logto service properly. Please upgrade your plan to premium promptly to avoid any inconvenience.',
  },
  payment_overdue_modal: {
    title: 'Opłata za fakturę zaległa',
    notification:
      'Ups! Płatność za fakturę najemcy <span>{{name}}</span> nie powiodła się. Proszę zapłacić fakturę w odpowiednim terminie, aby uniknąć zawieszenia usługi Logto.',
    unpaid_bills: 'Nieuregulowane faktury',
    update_payment: 'Zaktualizuj płatność',
  },
  add_on_quota_item: {
    api_resource: 'Zasób API',
    machine_to_machine: 'aplikacja od maszyny do maszyny',
    tokens: '{{limit}}M tokenów',
    tenant_member: 'członek najemcy',
  },
  charge_notification_for_quota_limit:
    'Przekroczyłeś limit kwoty {{item}}. Logto doliczy opłaty za korzystanie poza limitem. Fakturowanie rozpocznie się w dniu wprowadzenia nowego projektu cenowego dodatku. <a>Dowiedz się więcej</a>',
  paywall,
  featured_plan_content,
  add_on,
};

export default Object.freeze(upsell);
