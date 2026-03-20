"use client";

import { FormEvent, useMemo, useState } from "react";
import type { Dictionary } from "@/content/types";

interface MissionFormProps {
  dictionary: Dictionary;
}

interface MissionValues {
  name: string;
  email: string;
  organization: string;
  country: string;
  missionType: string;
  timeline: string;
  budget: string;
  details: string;
}

type MissionField = keyof MissionValues;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function MissionForm({ dictionary }: MissionFormProps) {
  const [values, setValues] = useState<MissionValues>({
    name: "",
    email: "",
    organization: "",
    country: "",
    missionType: "",
    timeline: "",
    budget: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<MissionField, string>>>({});

  const hasErrors = useMemo(() => Object.values(errors).some(Boolean), [errors]);

  const validate = () => {
    const nextErrors: Partial<Record<MissionField, string>> = {};
    const requiredFields: MissionField[] = [
      "name",
      "email",
      "organization",
      "country",
      "missionType",
      "timeline",
      "details",
    ];

    requiredFields.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = dictionary.mission.formErrors.required;
      }
    });

    if (values.email.trim() && !emailRegex.test(values.email)) {
      nextErrors.email = dictionary.mission.formErrors.email;
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

    console.log("Mission form payload:", values);
    setSubmitted(true);
    setValues({
      name: "",
      email: "",
      organization: "",
      country: "",
      missionType: "",
      timeline: "",
      budget: "",
      details: "",
    });
    setErrors({});
  };

  const fieldClass =
    "w-full rounded-sm border border-blue-200/70 bg-white/95 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-700 focus:shadow-[0_0_0_3px_rgba(46,169,176,0.18)]";
  const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="rounded-sm border border-blue-200/60 bg-blue-50/60 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>{dictionary.mission.formFields.name}</label>
            <input
              value={values.name}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.mission.formFields.email}</label>
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
            <label className={labelClass}>{dictionary.mission.formFields.organization}</label>
            <input
              value={values.organization}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, organization: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.organization ? (
              <p className="mt-1 text-xs text-red-600">{errors.organization}</p>
            ) : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.mission.formFields.country}</label>
            <input
              value={values.country}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, country: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.country ? (
              <p className="mt-1 text-xs text-red-600">{errors.country}</p>
            ) : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.mission.formFields.missionType}</label>
            <select
              value={values.missionType}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, missionType: event.target.value }))
              }
              className={fieldClass}
            >
              <option value="">-</option>
              {dictionary.mission.missionTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.missionType ? (
              <p className="mt-1 text-xs text-red-600">{errors.missionType}</p>
            ) : null}
          </div>

          <div>
            <label className={labelClass}>{dictionary.mission.formFields.timeline}</label>
            <input
              value={values.timeline}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, timeline: event.target.value }))
              }
              className={fieldClass}
            />
            {errors.timeline ? (
              <p className="mt-1 text-xs text-red-600">{errors.timeline}</p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>{dictionary.mission.formFields.budget}</label>
            <input
              value={values.budget}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, budget: event.target.value }))
              }
              className={fieldClass}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className={labelClass}>{dictionary.mission.formFields.details}</label>
          <textarea
            rows={6}
            value={values.details}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, details: event.target.value }))
            }
            className={fieldClass}
          />
          {errors.details ? (
            <p className="mt-1 text-xs text-red-600">{errors.details}</p>
          ) : null}
        </div>
      </div>

      <button type="submit" className="tp-blue-button min-w-48 px-10 py-3.5">
        {dictionary.mission.formFields.submit}
      </button>

      {submitted && !hasErrors ? (
        <p className="tp-enter-up rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {dictionary.mission.formSuccess}
        </p>
      ) : null}
    </form>
  );
}
