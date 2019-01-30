import { RxJsonSchema } from 'rxdb';

const schema: RxJsonSchema = {
  title: 'song schema',
  description: 'describes a song schema',
  version: 0,
  keyCompression: false,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
      default: '',
    },
    name: {
      type: 'string',
      default: '',
    },
    img: {
      type: 'string',
      default: '',
    },
  },
};

export default schema;
