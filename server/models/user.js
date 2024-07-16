export const user = {
  name: 'taka',
  password: 'Taka7115tennis',
  email: 'taka7115web@gmail.com',
  role: 'admin',
};

export default {
  fields: {
    name: { type: 'string', required: true, index: 'text' }, // index only used in dev
    password: { type: 'string', minLength: 4 },
    email: { type: 'email', required: true, index: 'unique' },
    role: { type: 'string', enum: ['user', 'admin'], default: 'user' },
    //   addedBy: { model: 'user' },
    //   company: { model: 'company', default: null },
    //   pending: { type: 'boolean' },
    // resetToken: { type: 'string' },
    //   traces: [{ model: 'trace' }], // virtual, for population
  },
};
