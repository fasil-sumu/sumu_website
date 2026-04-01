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
}

export interface ResourcesTopMenuItem {
  id: string;
  label: string;
  href: string;
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
  { id: 'product-invoicing', label: 'homepage08.footer.invoicing', href: '/our-services/sales-&-invoicing' },
  { id: 'product-payments', label: 'homepage08.footer.payments', href: '/our-services/accept-payment-online' },
  { id: 'product-expenses', label: 'homepage08.footer.expenses', href: '/our-services/vat-automation' },
  { id: 'product-accounting', label: 'homepage08.footer.accounting', href: '/our-services/accounting' },
  { id: 'product-reporting', label: 'homepage08.footer.reporting', href: '/our-services/analytics-&-reporting' },
  { id: 'product-clients', label: 'homepage08.footer.clients', href: '/our-services/banking-&-accounts-aggregation' },
];

export const resourcesTopMenuItems: ResourcesTopMenuItem[] = [
  { id: 'resources-top-learn', label: 'resourcesMenu.learn', href: '/resources/learn' },
  { id: 'resources-top-support', label: 'resourcesMenu.support', href: '/resources/support' },
  { id: 'resources-top-company', label: 'resourcesMenu.company', href: '/resources/company' },
];
