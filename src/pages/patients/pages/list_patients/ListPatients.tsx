import React, { FC } from "react";
import { usePatientsQuery } from "../../../../api/queries";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { PatientsTable } from "./PatientsTable";
import { FlatfileButton, FlatfileResults } from "@flatfile/react";
import { IField } from "@flatfile/adapter/build/main/interfaces";
import { usePatientsMutations } from "../../../../api/mutations";
import { BatchCreateModel } from "../../../../api/models";

export const importerClassNames: string = [
  "inline-flex",
  "select-none",
  "items-center",
  "border",
  "shadow-sm",
  "focus:ring-primary-500",
  "focus:ring-2",
  "focus:ring-offset-2",
  "focus:outline-none",
  "font-medium",
  "flex",
  "items-center",
  "justify-center",
  "whitespace-nowrap",
  "border-gray-300",
  "text-gray-700",
  "hover:bg-gray-50",
  "bg-white",
  "text-base",
  "rounded-md",
].join(" ");

const fields: IField[] = [
  {
    label: "Повне ім'я",
    key: "name",
    validators: [
      {
        validate: "required",
      },
    ],
  },
  {
    label: "Електронна пошта",
    key: "email",
    validators: [
      {
        validate: "required",
      },
      {
        validate: "unique",
      },
      {
        validate: "regex_matches",
        regex:
          '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
      },
    ],
  },
  {
    label: "Номер телефону",
    key: "phone",
    validators: [
      {
        validate: "required",
      },
      {
        validate: "unique",
      },
      {
        validate: "regex_matches",
        regex: "^[0-9\\-\\+]{9,15}$",
      },
    ],
  },
  {
    label: "Група крові",
    key: "blood_type",
    type: "select",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
    ],
  },
  {
    label: "Резус фактор",
    key: "rhesus",
    type: "select",
    options: [
      { label: "+", value: 1 },
      { label: "_", value: 0 },
    ],
  },
  {
    label: "Еритроцити",
    key: "erythrocytes",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Гемоглобін",
    key: "hemoglobin",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Гематокрит",
    key: "hematocrit",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Тромбоцити",
    key: "platelets",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Тромбоцитокрит",
    key: "platelet",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Лейкоцити",
    key: "leukocytes",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Лімфоцити %Lym",
    key: "lymphocytes_percents",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Лімфоцити #Lym",
    key: "lymphocytes",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Моноцити %Mon",
    key: "monocytes_percents",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Моноцити #Mon",
    key: "monocytes",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "ШОЕ",
    key: "shoe",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Гранулоцити #",
    key: "granulocytes",
    validators: [
      {
        validate: "regex_matches",
        regex: "^[+-]?([0-9]*[.])?[0-9]+$",
      },
    ],
  },
  {
    label: "Гранулоцити %",
    key: "granulocytes_percents",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Юні",
    key: "yuni",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Палочки ретикулоцити",
    key: "reticulocytes_sticks",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Сегменти",
    key: "segments",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Еозинофіли",
    key: "eosinophils",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Базофіли",
    key: "basophils",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
  {
    label: "Ретикулоцити",
    key: "reticulocytes",
    validators: [
      {
        validate: "regex_matches",
        regex: "^100$|^[0-9]{1,2}$|^[0-9]{1,2}\\.[0-9]{1,3}$",
      },
    ],
  },
];

export const ListPatients: FC = () => {
  const { useGetPatientsQuery } = usePatientsQuery();
  const { data } = useGetPatientsQuery();

  const { patientsBatchUpdateMutation } = usePatientsMutations();
  const { mutate } = patientsBatchUpdateMutation;

  const navigate = useNavigate();

  if (!data) return null;

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={0}
      >
        <Typography variant="h4" mb={4}>
          Patients
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/patients/new");
          }}
        >
          Create New Patient
        </Button>
      </Stack>
      <FlatfileButton
        className={importerClassNames}
        key={JSON.stringify(fields)}
        licenseKey="e8dc1d04-0c51-46a2-951e-23a747075264"
        customer={{ userId: "12345" }}
        onData={async (results: FlatfileResults): Promise<string | void | null> => {
          mutate({ body: results.data as unknown as BatchCreateModel });
          return null;
        }}
        settings={{
          devMode: true,
          type: "Patients",
          title: "Import data from File",
          webhookUrl: "",
          managed: true,
          fields,
        }}
      >
        Import Data From File
      </FlatfileButton>
      <PatientsTable patients={data} />
    </>
  );
};
