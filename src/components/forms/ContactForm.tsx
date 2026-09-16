"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import type { Dictionary } from "@/content/types";
import { buildMailtoHref } from "@/lib/mailto";

interface ContactFormProps {
  dictionary: Dictionary;
}

interface ContactValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceLocation: string;
  serviceIndustry: string;
  enquiryType: string;
  message: string;
  consent: boolean;
}

type ContactStringField = Exclude<keyof ContactValues, "consent">;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ dictionary }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceLocation: "",
    serviceIndustry: "",
    enquiryType: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>(
    {},
  );

  const hasErrors = useMemo(() => Object.values(errors).some(Boolean), [errors]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactValues, string>> = {};
    const requiredFields: ContactStringField[] = [
      "firstName",
      "lastName",
      "email",
      "serviceLocation",
      "enquiryType",
      "message",
    ];

    requiredFields.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = dictionary.contact.formErrors.required;
      }
    });

    if (values.email.trim() && !emailRegex.test(values.email)) {
      nextErrors.email = dictionary.contact.formErrors.email;
    }

    if (!values.consent) {
      nextErrors.consent = dictionary.contact.formErrors.consent;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) {
      return;
    }

    const f = dictionary.contact.formFields;
    const href = buildMailtoHref(
      dictionary.contact.emailValue,
      `${dictionary.contact.pageTitle} — ${values.firstName} ${values.lastName}`.trim(),
      [
        { label: f.firstName.replace(" *", ""), value: values.firstName },
        { label: f.lastName.replace(" *", ""), value: values.lastName },
        { label: f.email.replace(" *", ""), value: values.email },
        { label: f.phoneOptional, value: values.phone },
        { label: f.serviceLocation.replace(" *", ""), value: values.serviceLocation },
        { label: f.serviceIndustry, value: values.serviceIndustry },
        { label: f.enquiryType.replace(" *", ""), value: values.enquiryType },
        { label: f.message.replace(" *", ""), value: values.message },
      ],
    );

    // Les valeurs ne sont volontairement PAS réinitialisées : si le visiteur
    // n'a pas de logiciel de messagerie configuré, rien ne s'ouvrira et il ne
    // doit pas perdre ce qu'il a saisi.
    setSubmitted(true);
    setErrors({});
    window.location.href = href;
  };

  const fieldClass =
    "w-full rounded-lg border border-blue-200/70 bg-white/95 px-3 py-3 text-base text-slate-800 outline-none transition focus:border-blue-700 focus:shadow-[0_0_0_3px_rgba(46,169,176,0.18)] sm:py-2.5 sm:text-sm";
  const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="rounded-sm border border-blue-200/60 bg-blue-50/60 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>{dictionary.contact.formFields.firstName}</label>
            <input
              value={values.firstName}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, firstName: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.firstName ? (
              <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
            ) : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.contact.formFields.lastName}</label>
            <input
              value={values.lastName}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, lastName: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.lastName ? (
              <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
            ) : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.contact.formFields.email}</label>
            <input
              type="email"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.contact.formFields.phoneOptional}</label>
            <input
              type="tel"
              inputMode="tel"
              value={values.phone}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, phone: event.target.value }))
              }
              className={fieldClass}
            />
          </div>

          <div>
            <label className={labelClass}>{dictionary.contact.formFields.serviceLocation}</label>
            <input
              value={values.serviceLocation}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, serviceLocation: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.serviceLocation ? (
              <p className="mt-1 text-xs text-red-600">{errors.serviceLocation}</p>
            ) : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.contact.formFields.serviceIndustry}</label>
            <select
              value={values.serviceIndustry}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, serviceIndustry: event.target.value }))
              }
              className={fieldClass}
            >
              <option value="">{dictionary.contact.formOptions.selectPlaceholder}</option>
              {dictionary.contact.formOptions.serviceIndustries.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>{dictionary.contact.formFields.enquiryType}</label>
            <select
              value={values.enquiryType}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, enquiryType: event.target.value }))
              }
              className={fieldClass}
            >
              <option value="">{dictionary.contact.formOptions.selectPlaceholder}</option>
              {dictionary.contact.formOptions.enquiryTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.enquiryType ? (
              <p className="mt-1 text-xs text-red-600">{errors.enquiryType}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <label className={labelClass}>{dictionary.contact.formFields.message}</label>
          <textarea
            rows={5}
            value={values.message}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, message: event.target.value }))
            }
            className={fieldClass}
          />
          {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
        </div>
      </div>

      <div className="rounded-sm border border-blue-200/60 bg-blue-50/60 p-4 sm:p-6">
        <label className="flex items-start gap-3 text-sm text-slate-800">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, consent: event.target.checked }))
            }
            className="mt-0.5 h-4 w-4 rounded border-neutral-400"
          />
          <span>
            {dictionary.contact.formFields.consentText}{" "}
            <Link href={`/${dictionary.lang}/company`} className="text-blue-800 underline">
              {dictionary.contact.formFields.privacyPolicyLabel}
            </Link>{" "}
            *
          </span>
        </label>
        {errors.consent ? <p className="mt-2 text-xs text-red-600">{errors.consent}</p> : null}

        <button type="submit" className="tp-blue-button mt-5 w-full px-10 py-3.5 sm:w-auto sm:min-w-40">
          {dictionary.contact.formFields.submit}
        </button>
      </div>

      {submitted && !hasErrors ? (
        <div className="tp-enter-up rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          <p>{dictionary.contact.formSuccess}</p>
          <p className="mt-1">
            <a
              href={`mailto:${dictionary.contact.emailValue}`}
              className="font-semibold underline underline-offset-2"
            >
              {dictionary.contact.emailValue}
            </a>
          </p>
        </div>
      ) : null}
    </form>
  );
}

