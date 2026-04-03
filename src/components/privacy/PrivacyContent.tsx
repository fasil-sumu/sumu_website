'use client';

import privacy from '@public/images/privacy/privacy.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RevealAnimation from '../animation/RevealAnimation';

interface DeviceItem {
  title: string;
  content: string;
}

interface FormField {
  id: string;
  label: string;
  placeholder: string;
}

interface SimpleSection {
  title: string;
  content: string;
}

const PrivacyContent = () => {
  const { t } = useTranslation();

  const deviceItems = t('privacyPage.personalInfo.deviceItems', { returnObjects: true }) as DeviceItem[];
  const orderItems = t('privacyPage.useInfo.orderItems', { returnObjects: true }) as string[];
  const deviceUsageItems = t('privacyPage.useInfo.deviceItems', { returnObjects: true }) as string[];
  const sharingItems = t('privacyPage.sharingInfo.items', { returnObjects: true }) as string[];
  const rightsItems = t('privacyPage.rights.items', { returnObjects: true }) as string[];
  const simpleSections = t('privacyPage.simpleSections', { returnObjects: true }) as SimpleSection[];
  const formFields = t('privacyPage.form.fields', { returnObjects: true }) as FormField[];

  return (
    <section className="pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-[75px] privacy-policy">
          {/* Header */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>{t('privacyPage.dataProtectionTitle')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>{t('privacyPage.dataProtectionDesc')}</p>
            </RevealAnimation>
          </div>

          {/* Policy Intro */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>{t('privacyPage.policyIntroTitle')}</h4>
              <p>
                {t('privacyPage.policyIntroDesc').split('https://Sumu.com')[0]}
                <Link href="https://Sumu.com" className="text-secondary dark:text-accent">
                  https://Sumu.com
                </Link>
                {t('privacyPage.policyIntroDesc').split('https://Sumu.com')[1]}
              </p>
            </div>
          </RevealAnimation>

          {/* Personal Information Collection */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4>{t('privacyPage.personalInfo.title')}</h4>
              <p dangerouslySetInnerHTML={{ __html: t('privacyPage.personalInfo.content') }} />
            </div>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {deviceItems.map((item) => (
                  <li key={item.title}>
                    <strong className="text-secondary dark:text-accent font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

          {/* Order Information + Form */}
          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <RevealAnimation delay={0.6}>
                  <div className="text-left mb-[70px]">
                    <p className="max-w-[550px]">{t('privacyPage.orderInfo.text')}</p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <figure className="max-w-[595px] w-full overflow-hidden rounded-[20px] self-end">
                    <Image src={privacy} className="size-full object-cover" alt="support-contact" />
                  </figure>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 lg:col-span-6">
                  <form className="p-6 lg:p-[42px] rounded-[20px] bg-white dark:bg-background-8">
                    {formFields.map((field, index) => (
                      <fieldset key={field.id} className={`space-y-2 ${index < formFields.length - 1 ? 'mb-8' : ''}`}>
                        <label
                          htmlFor={field.id}
                          className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                          {field.label}
                        </label>
                        <input
                          type={field.id === 'email' ? 'email' : 'text'}
                          name={field.id}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="w-full block border dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 py-3 px-[18px] rounded-full h-12 focus-visible:outline focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 font-normal"
                        />
                      </fieldset>
                    ))}
                    <fieldset className="flex mt-4 items-center gap-2 mb-4">
                      <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                        <input id="agree-terms" type="checkbox" className="sr-only peer" required />
                        <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                      </label>
                      <label
                        htmlFor="agree-terms"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                        {t('privacyPage.form.termsAgree')}{' '}
                        <Link href="#" className="text-primary-500 underline text-tagline-3">
                          {t('privacyPage.form.termsLink')}
                        </Link>
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full before:content-none first-letter:uppercase">
                      {t('privacyPage.form.submit')}
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* How We Use Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{t('privacyPage.useInfo.title')}</h4>
                <p>{t('privacyPage.useInfo.orderDesc')}</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {orderItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div>
                <p className="text-secondary dark:text-accent">{t('privacyPage.useInfo.deviceDesc')}</p>
                <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                  {deviceUsageItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          {/* Sharing Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{t('privacyPage.sharingInfo.title')}</h4>
                <p>{t('privacyPage.sharingInfo.desc')}</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {sharingItems.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Your Rights */}
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{t('privacyPage.rights.title')}</h4>
                <p>{t('privacyPage.rights.desc')}</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {rightsItems.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.7 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
