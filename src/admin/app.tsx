export default {
  config: {
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app: any) {
    const originalGetThumb = app.getThumbnailUrl;

    app.getThumbnailUrl = (file: any) => {
      // Se não existir thumbnail, usa a imagem original
      return (
        file?.formats?.thumbnail?.url || file?.url || originalGetThumb?.(file)
      );
    };
  },
};
