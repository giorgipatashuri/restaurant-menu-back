import { Injectable } from '@nestjs/common';

import { fileResponse } from './file.interface';
import { ensureDir, writeFile } from 'fs-extra';
import { path } from 'app-root-path';

@Injectable()
export class FileService {
  async saveFiles(files: Express.Multer.File[]): Promise<fileResponse[]> {
    const uploadFolder = `${path}/uploads/`;
    await ensureDir(uploadFolder);

    const res: fileResponse[] = await Promise.all(
      files.map(async (file) => {
        await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);

        return {
          url: `/uploads/${file.originalname}`,
          name: file.originalname,
        };
      }),
    );
    return res;
  }
}
