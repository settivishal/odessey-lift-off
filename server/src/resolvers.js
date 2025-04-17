const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementTrackViews: (_, { id }, { dataSources }) => {
      const track = dataSources.trackAPI.incrementTrackViews(id);

      return {
        code: 200,
        success: true,
        message: `Successfully incremented number of views for track ${id}`,
        track,
      };
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModule(id);
    },
  },
};

export default resolvers;
