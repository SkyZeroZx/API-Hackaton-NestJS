export const fileNamer = (file: Express.Multer.File, username: string) => {
  const fileExtension = file.mimetype.split('/')[1];

  return `${username.substring(0,username.search('@'))}.${fileExtension}`;
};
