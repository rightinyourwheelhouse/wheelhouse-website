import * as yup from 'yup';

const phoneRegExp =
  /((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))/g;

const urlRegExp =
  /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const FILE_SIZE = 10000 * 1024;
const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'application/pdf',
];

export default yup.object().shape({
  // comments: yup
  //   .string(),
  email: yup.string().email().required(),
  file: yup
    .mixed()
    .test(
      'fileSize',
      'File too large',
      value => !value || (value && value.size <= FILE_SIZE),
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),
  name: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Seems like you entered a wrong phone number'),
  website: yup.string().matches(urlRegExp, 'You entered a weird looking url'),
  website1: yup.string().matches(urlRegExp, 'You entered a weird looking url'),
  website2: yup.string().matches(urlRegExp, 'You entered a weird looking url'),
  website3: yup.string().matches(urlRegExp, 'You entered a weird looking url'),
});
