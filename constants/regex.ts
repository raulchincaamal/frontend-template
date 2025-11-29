export const RGX_ONLY_NUMBERS = /^[0-9]*$/
export const RGX_POSTAL_CODE = /([^0-9]{1,5})|(.{6,})/
export const RGX_LETTERS = /[^ñÑA-Za-z _]*$/
export const RGX_LETTERS_ACCENT = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/
export const RGX_LETTERS_ACCENT_POINT = /[^ñA-Za-zÁÉÍÓÚáéíóú _.]*$/
export const RGX_NO_SPECIAL_CHAR = /^[a-zA-Z 0-9#\\/]*$/
export const RGX_ONLY_SPECIAL_CHAR = /[^a-zA-Z 0-9#\\/]*$/
export const RGX_NO_NUMBERS = /[0-9]+/g
export const RGX_LETTER_AND_NUMBERS = /[^A-Za-z0-9-]+/g
export const RGX_USER_NAME = /[^a-zA-Z0-9_-]$/
export const RGX_NUMBER_FORMATTER = /(\d)(?=(\d\d\d)+(?!\d))/g
export const RGX_NUMBER_ESP_CHAR_NUM = /[^0-9-ñA-Za-z-ÁÉÍÓÚáéíóú´ _.]*$/
export const RGX_LETTER_NUMBERS_AND_DASH = /^[A-Za-z0-9-]+$/

// regex for schema validation
export const REGEX_STRICT_CURP =
  /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
export const REGEX_RFC_FISICA =
  /^[A-Z&Ñ]{4}\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z\d][A-Z\d][\dA]$/
export const REGEX_RFC_MORAL =
  /^[A-Z&Ñ]{3}\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z\d][A-Z\d][\dA]$/
export const REGEX_RFC_GENERIC =
  /^[A-Z&Ñ]{3,4}\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z\d][A-Z\d][\dA]$/

export const REGEX_RFC_INPUT =
  /^([A-ZÑ&]{3,4})\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Z\d]{3}$/

export const REGEX_CURP_INPUT =
  /^([A-Z]{4})([0-9]{6})([HM]{1})([A-Z]{2})([B-DF-HJ-NP-TV-Z]{3})([0-9A-Z]{1})([0-9]{1})$/

export const REGEX_EMAIL_INPUT = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const REGEX_CELLPHONE_INPUT = /^[0-9]{10}$/
export const MONEY_INPUT = /^[0-9]{1,10}$/

export const REGEX_ZIP_CODE_INPUT = /^\d{5}$/

export const REGEX_TELEPHONE = /^[0-9]{10}$/
export const REGEX_RFC_NO_HOMOCLAVE =
  /^[A-Z&Ñ]{4}\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/
export const REGEX_RFC_HOMOCLAVE = /[^A-Za-z0-9]{3}/g
export const REGEX_EMAIL = /^[\w\\_.-]+@([\w-]+\.)+[\w-]{2,4}$/
export const REGEX_RELATIVE_PATH =
  /^([a-z]:)*(\/*(\.*[a-z0-9]+\/)*(\.*[a-z0-9]+))/

export const REGEX_UUID =
  /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
