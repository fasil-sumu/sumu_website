export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
  megaMenuComponent?: string;
}

export interface MegaMenuItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface ResourcesTopMenuItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'products',
    label: 'navigation.products',
    href: '/our-services-01',
    hasDropdown: true,
    megaMenuComponent: 'ServicesMenu',
  },
  {
    id: 'solutions',
    label: 'navigation.solutions',
    href: '/solutions',
    hasDropdown: false,
  },
  {
    id: 'resources',
    label: 'navigation.resources',
    href: '/resources',
    hasDropdown: true,
    megaMenuComponent: 'ResourcesMenu',
  },
  {
    id: 'contact',
    label: 'navigation.contact',
    href: '/contact-us',
    hasDropdown: false,
  },
];

export const servicesMenuItems: MegaMenuItem[] = [
  {
    id: 'product-invoicing',
    label: 'homepage08.footer.invoicing',
    href: '/our-services/sales-&-invoicing',
    description: 'navigation.megaMenu.services.invoicing',
    icon: 'invoicing',
  },
  {
    id: 'product-payments',
    label: 'homepage08.footer.payments',
    href: '/our-services/accept-payment-online',
    description: 'navigation.megaMenu.services.payments',
    icon: 'payments',
  },
  {
    id: 'product-expenses',
    label: 'homepage08.footer.expenses',
    href: '/our-services/vat-automation',
    description: 'navigation.megaMenu.services.expenses',
    icon: 'expenses',
  },
  {
    id: 'product-accounting',
    label: 'homepage08.footer.accounting',
    href: '/our-services/accounting',
    description: 'navigation.megaMenu.services.accounting',
    icon: 'accounting',
  },
  {
    id: 'product-reporting',
    label: 'homepage08.footer.reporting',
    href: '/our-services/analytics-&-reporting',
    description: 'navigation.megaMenu.services.reporting',
    icon: 'reporting',
  },
  {
    id: 'product-clients',
    label: 'homepage08.footer.clients',
    href: '/our-services/banking-&-accounts-aggregation',
    description: 'navigation.megaMenu.services.clients',
    icon: 'clients',
  },
];

export const resourcesTopMenuItems: ResourcesTopMenuItem[] = [
  {
    id: 'resources-top-learn',
    label: 'resourcesMenu.learn',
    href: '/resources/learn',
    description: 'navigation.megaMenu.resources.learn',
    icon: 'learn',
  },
  {
    id: 'resources-top-support',
    label: 'resourcesMenu.support',
    href: '/resources/support',
    description: 'navigation.megaMenu.resources.support',
    icon: 'support',
  },
  {
    id: 'resources-top-company',
    label: 'resourcesMenu.company',
    href: '/resources/company',
    description: 'navigation.megaMenu.resources.company',
    icon: 'company',
  },
];
