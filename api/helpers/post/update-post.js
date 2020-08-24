module.exports = {


  friendlyName: 'Update post',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    subject: {
      type: 'string',
      required: true,
    },
    shortDescription: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    thumbnail: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    categoryId: {
      type: 'string',
      required: true,
    },
  },


  fn: async function ({id, ...rest}) {
    return await  Posts.updateOne({ id: id}).set({ 
     ...rest
    });
  }


};

