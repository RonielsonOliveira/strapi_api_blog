export default ({ env }: { env: (key: string) => string }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),

        transformations: {
          thumbnail: {
            width: 245,
            height: 156,
            crop: "fill",
          },
          small: {
            width: 500,
            height: 500,
            crop: "limit",
          },
          medium: {
            width: 750,
            height: 750,
            crop: "limit",
          },
          large: {
            width: 1000,
            height: 1000,
            crop: "limit",
          },
        },
      },
    },
  },
});
