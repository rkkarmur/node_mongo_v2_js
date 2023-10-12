exports.commonRepository = (_model) => {
  return {
    find: async (filter, limit, sort) => {
      const query = _model.find(filter ? filter : {});
      if (limit) {
        query.limit(3);
      }
      if (sort) {
        query.sort(sort);
      }
      return query;
    },
    findOne: async (filter) => {
      return _model.findOne(filter ? filter : {});
    },
    create: async (input) => {
      return _model.create(input);
    },
    update: async (filter, data) => {
      return _model.updateMany(filter, { $set: data });
    },
    delete: async (filter) => {
      return _model.deleteMany(filter);
    },
  };
};
