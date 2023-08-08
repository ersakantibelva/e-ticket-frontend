interface FieldItem {
  name: string
  type: string
  placeholder: string
  label: string
}

export interface FieldItems extends Array<FieldItem> {}

export const fields: FieldItems = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Enter your email',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'text',
    placeholder: 'Enter your password',
    label: 'Password'
  },
]