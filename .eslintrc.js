/**
 * Copyright (c) Ang Lee 2020 (ang.lee@gmail.com)
 **/

module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['header', 'import'],
  rules: {
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
    'header/header': [
      'error',
      'block',
      [
        '*',
        {
          pattern: ' \\* Copyright \\(c\\) Ang Lee \\d{4} \\(ang.lee@gmail.com\\)',
          template: ' * Copyright (c) Ang Lee 2020 (ang.lee@gmail.com)',
        },
        ' *',
      ],
    ],
    'import/extensions': ['warn', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
  },
};
