interface FieldItem {
  name: string
  type: string
  placeholder: string
  label: string
}

export interface FieldItems extends Array<FieldItem> {}

export const mainFields: FieldItems = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Enter your email',
    label: 'Email'
  },
  {
    name: 'phoneNumber',
    type: 'text',
    placeholder: 'Enter your phone number',
    label: 'Phone Number'
  },
  {
    name: 'password',
    type: 'text',
    placeholder: 'Password must be 8-10 characters',
    label: 'Password'
  },
  {
    name: 'confirm_password',
    type: 'text',
    placeholder: 'Confirm your password',
    label: 'Confirm Password'
  }
]

export const secondaryFields: FieldItems = [
  {
    name: 'id',
    type: 'text',
    placeholder: 'Enter your NIK',
    label: 'ID Card Number (NIK)'
  },
  {
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name based on ID Card',
    label: 'Name'
  },
  {
    name: 'gender',
    type: 'select',
    placeholder: 'Select your gender',
    label: 'Gender'
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Enter your address based on ID Card',
    label: 'Address'
  },
  {
    name: 'photo',
    type: 'file',
    placeholder: 'Upload ID Card (.jpg, .png)',
    label: 'ID Card File'
  },
]
